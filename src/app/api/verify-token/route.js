import jwt from 'jsonwebtoken';
import { headers } from 'next/headers';

export async function POST() {
  const headerList = headers();
  const authorizationHeader = headerList.get('authorization');

  if (!authorizationHeader) {
    return new Response(
      JSON.stringify({ message: 'Unauthorized: No token provided' }),
      { status: 401 }
    );
  }

  const token = authorizationHeader.split(' ')[1];
  if (!token) {
    return new Response(
      JSON.stringify({ message: 'Unauthorized: Invalid token format' }),
      { status: 401 }
    );
  }

  try {
    const decodedUser = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET_KEY);
    return new Response(
      JSON.stringify({
        name: decodedUser.name,
        email: decodedUser.email,
        role: decodedUser.role || 'user',
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Invalid or expired token' }),
      { status: 401 }
    );
  }
}
