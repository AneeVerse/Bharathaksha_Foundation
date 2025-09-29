import { headers } from 'next/headers';
import { connectToDatabase } from '@/lib/mongodb';
import User from '@/lib/models/User';
import bcrypt from 'bcryptjs';
import { requireSuperadmin } from '@/lib/auth';

export async function GET() {
  try {
    const headerList = headers();
    const me = requireSuperadmin(headerList);
    await connectToDatabase();
    const user = await User.findById(me.userId).select('email role');
    if (!user) return new Response(JSON.stringify({ message: 'Not found' }), { status: 404 });
    return new Response(JSON.stringify({ email: user.email, role: user.role }), { status: 200 });
  } catch (err) {
    const status = err?.statusCode || (err?.message?.startsWith('Unauthorized') ? 401 : 500);
    return new Response(JSON.stringify({ message: err?.message || 'Internal Server Error' }), { status });
  }
}

export async function PUT(req) {
  try {
    const headerList = headers();
    const me = requireSuperadmin(headerList);
    const body = await req.json();
    const { email, password } = body || {};

    if (!email && !password) {
      return new Response(JSON.stringify({ message: 'Nothing to update' }), { status: 400 });
    }

    await connectToDatabase();

    const update = {};
    if (email) update.email = email;
    if (password) update.password = await bcrypt.hash(password, 10);

    await User.updateOne({ _id: me.userId }, { $set: update });

    return new Response(JSON.stringify({ message: 'Updated' }), { status: 200 });
  } catch (err) {
    const status = err?.statusCode || (err?.message?.startsWith('Unauthorized') ? 401 : 500);
    return new Response(JSON.stringify({ message: err?.message || 'Internal Server Error' }), { status });
  }
}