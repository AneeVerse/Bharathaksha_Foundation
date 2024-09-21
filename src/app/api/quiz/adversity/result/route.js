// pages/api/quiz/result.js
import { connectToDatabase } from '../../../../../lib/mongodb';
import QuizResultModel from '../../../../../lib/models/Quiz';
import jwt from 'jsonwebtoken';
import { headers } from 'next/headers';

export async function GET(req) {
    try {
        // Get token from headers
        const reqHeader = headers();
        const authHeader = reqHeader.get('Authorization');
        if (!authHeader) {
            return new Response(
                JSON.stringify({ message: "Authorization header missing" }),
                { status: 401 } // Unauthorized
            );
        }

        const token = authHeader.split(' ')[1]; // Assuming 'Bearer <token>' format
        if (!token) {
            return new Response(
                JSON.stringify({ message: "Token missing" }),
                { status: 401 } // Unauthorized
            );
        }

        // Verify JWT token
        let decodedToken;
        try {
            decodedToken = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET_KEY);
        } catch (error) {
            return new Response(
                JSON.stringify({ message: "Invalid or expired token" }),
                { status: 401 } // Unauthorized
            );
        }

        // Connect to MongoDB
        await connectToDatabase();

        // Fetch the user's quiz results
        const quizResult = await QuizResultModel.findOne({ userId: decodedToken.userId });
        if (!quizResult) {
            return new Response(
                JSON.stringify({ message: "No quiz results found for this user" }),
                { status: 404 } // Not Found
            );
        }

        return new Response(
            JSON.stringify({ quizResult }),
            { status: 200 } // Success
        );
    } catch (error) {
        console.error("Error fetching quiz results:", error);
        return new Response(
            JSON.stringify({ message: "Error fetching quiz results", error: error.message }),
            { status: 500 } // Internal Server Error
        );
    }
}
