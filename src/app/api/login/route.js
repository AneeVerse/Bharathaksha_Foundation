// pages/api/login.js
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { connectToDatabase } from '../../../lib/mongodb';
import UserModel from '../../../lib/models/User';

export async function POST(req) {
  const { email, password } = await req.json();

  try {
    await connectToDatabase();
    const user = await UserModel.findOne({ email });

    // If user is not found
    if (!user) {
      return new Response(
        JSON.stringify({ message: "User not found" }),
        { status: 400 } // Bad request
      );
    }

    // Check if password is correct
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return new Response(
        JSON.stringify({ message: "Invalid credentials" }),
        { status: 400 } // Bad request
      );
    }

    // Create JWT token
    const token = jwt.sign(
      { userId: user._id, name: user.name, email: user.email },
      process.env.NEXT_PUBLIC_JWT_SECRET_KEY,
      { expiresIn: '1y' }
    );

    return new Response(
      JSON.stringify({ token, message: "Login successful" ,  user: {name: user.name, email: user.email}}),
      { status: 200 } // OK
    );
  } catch (error) {
    // Handle internal server error
    return new Response(
      JSON.stringify({ message: "Error logging in", error: error.message }),
      { status: 500 } // Internal Server Error
    );
  }
}
