import { headers } from 'next/headers';
import { connectToDatabase } from '@/lib/mongodb';
import { requireSuperadmin } from '@/lib/auth';
import Quiz from '@/lib/models/Quiz';

// List quiz attempts for a specific user (admin only)
export async function GET(req, { params }) {
  try {
    const headerList = headers();
    requireSuperadmin(headerList);
    await connectToDatabase();

    const { userId } = params;
    const { searchParams } = new URL(req.url);
    const limit = Math.min(parseInt(searchParams.get('limit') || '50', 10), 200);
    const skip = Math.max(parseInt(searchParams.get('skip') || '0', 10), 0);

    const attempts = await Quiz.find({ userId })
      .select('_id title type createdAt updatedAt')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    const total = await Quiz.countDocuments({ userId });

    return new Response(JSON.stringify({ attempts, total }), { status: 200 });
  } catch (err) {
    const status = err?.statusCode || (err?.message?.startsWith('Unauthorized') ? 401 : 500);
    return new Response(JSON.stringify({ message: err?.message || 'Internal Server Error' }), { status });
  }
}