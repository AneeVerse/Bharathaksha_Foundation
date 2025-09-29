import { headers } from 'next/headers';
import { connectToDatabase } from '@/lib/mongodb';
import { requireSuperadmin } from '@/lib/auth';
import Quiz from '@/lib/models/Quiz';

export async function GET() {
  try {
    const headerList = headers();
    requireSuperadmin(headerList);
    await connectToDatabase();

    const pipeline = [
      // counts by userId + type
      { $group: { _id: { userId: '$userId', type: '$type' }, count: { $sum: 1 }, name: { $first: '$user.name' }, email: { $first: '$user.email' }, lastQuizAt: { $max: '$createdAt' }, lastQuizTitle: { $last: '$title' }, lastQuizType: { $last: '$type' } } },
      // fold into user level
      { $group: { _id: '$_id.userId', name: { $first: '$name' }, email: { $first: '$email' }, lastQuizAt: { $max: '$lastQuizAt' }, lastQuizTitle: { $first: '$lastQuizTitle' }, lastQuizType: { $first: '$lastQuizType' }, totalQuizzes: { $sum: '$count' }, countsArray: { $push: { k: '$_id.type', v: '$count' } } } },
      { $project: { _id: 0, userId: '$_id', name: 1, email: 1, totalQuizzes: 1, lastQuizAt: 1, lastQuizTitle: 1, lastQuizType: 1, countsByType: { $arrayToObject: '$countsArray' } } },
      { $sort: { lastQuizAt: -1 } },
      { $limit: 200 },
    ];

    const data = await Quiz.aggregate(pipeline);

    // quick totals
    const totals = data.reduce(
      (acc, u) => {
        acc.totalUsers += 1;
        acc.totalQuizzes += u.totalQuizzes || 0;
        return acc;
      },
      { totalUsers: 0, totalQuizzes: 0 }
    );

    return new Response(JSON.stringify({ totals, users: data }), { status: 200 });
  } catch (err) {
    const status = err?.statusCode || (err?.message?.startsWith('Unauthorized') ? 401 : 500);
    return new Response(JSON.stringify({ message: err?.message || 'Internal Server Error' }), { status });
  }
}