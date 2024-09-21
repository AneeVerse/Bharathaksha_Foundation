import { connectToDatabase } from '../../../../lib/mongodb';
import QuizResultModel from '../../../../lib/models/Quiz';
import jwt from 'jsonwebtoken';
import { headers } from 'next/headers';

export async function POST(req) {
    try {
        const { user, answers, totalScore, categoryScores, questionBreakdown } = await req.json();

        // Log the incoming data for debugging
        console.log("Received data:", { user, answers, totalScore, categoryScores, questionBreakdown });

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

        // Log token details for debugging
        console.log("Decoded token:", decodedToken);

        // Create and save the quiz result
        const quizResult = new QuizResultModel({
            userId: decodedToken.userId,
            user: {
                name: decodedToken.name,
                email: decodedToken.email
            },
            answers,
            totalScore,
            categoryScores, // Use the object directly
            questionBreakdown // Ensure this is an array of objects
        });

        await quizResult.save();

        // Log saved quiz result for debugging
        console.log("Quiz result saved:", quizResult);

        return new Response(
            JSON.stringify({ message: "Quiz results submitted successfully", quizResult }),
            { status: 201 } // Created
        );

    } catch (error) {
        console.log("Error", error.message);
        return new Response(
            JSON.stringify({ message: "Error submitting quiz results", error: error.message }),
            { status: 500 } // Internal Server Error
        );
    }
}
