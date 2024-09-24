import { connectToDatabase } from '../../../../../lib/mongodb';
import QuizResultModel from '../../../../../lib/models/Quiz';
import jwt from 'jsonwebtoken';
import { headers } from 'next/headers';

// API to fetch quiz result by quiz ID
export async function GET(req, { params }) {
  try {
    // Get the quiz ID from the URL
    const { id } = params; // This gets the quiz ID from the request

    console.log("params", params)

    // Get token from headers
    const reqHeader = headers();
    const authHeader = reqHeader.get('Authorization');
    if (!authHeader) {
      return new Response(JSON.stringify({ message: "Authorization header missing" }), { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      return new Response(JSON.stringify({ message: "Token missing" }), { status: 401 });
    }

    // Verify JWT token
    let decodedToken;
    try {
      decodedToken = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET_KEY);
    } catch (error) {
      return new Response(JSON.stringify({ message: "Invalid or expired token" }), { status: 401 });
    }

    // Connect to MongoDB
    await connectToDatabase();

    // Fetch the quiz result by ID and user ID
    const quizResult = await QuizResultModel.findOne({ _id: id, userId: decodedToken.userId });

    if (!quizResult) {
      return new Response(JSON.stringify({ message: "Quiz result not found" }), { status: 404 });
    }

    console.log("quizresult", quizResult)

    // Return the quiz result
    return new Response(
      JSON.stringify({ message: "Quiz result fetched successfully", quizResult }),
      { status: 200 }
    );

  } catch (error) {
    console.log("Error:", error.message);
    return new Response(
      JSON.stringify({ message: "Error fetching quiz result", error: error.message }),
      { status: 500 } // Internal Server Error
    );
  }
}
