// pages/api/register.js
import bcrypt from 'bcryptjs';
import { connectToDatabase } from '../../../lib/mongodb';
import UserModel from '../../../lib/models/User';
import jwt from 'jsonwebtoken';

export async function POST(req) {
  const { name, email, password, reenterPassword } = await req.json();

  // Check if passwords match
  if (password !== reenterPassword) {
    return new Response(
      JSON.stringify({ message: "Passwords do not match" }),
      { status: 400 } // Bad request
    );
  }

  try {
    await connectToDatabase();

    // Check if the user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return new Response(
        JSON.stringify({ message: "User already exists" }),
        { status: 409 } // Conflict
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create new user in the database
    const newUser = new UserModel({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    console.log("new User", newUser)

    // Create JWT token
    const token = jwt.sign(
      { userId: newUser._id, name: newUser.name, email: newUser.email },
      process.env.NEXT_PUBLIC_JWT_SECRET_KEY,
      { expiresIn: '1y' }
    );

    return new Response(
      JSON.stringify({ message: "User registered successfully", token , user: {name: newUser.name, email: newUser.email}}),
      { status: 201 } // Created
    );
  } catch (error) {    
    console.log("error", error)
    return new Response(
      JSON.stringify({ message: "Error registering user", error: error.message }),
      { status: 500 } // Internal Server Error
    );
  }
}
