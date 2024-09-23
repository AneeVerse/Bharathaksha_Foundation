import { connectToDatabase } from '../../../../lib/mongodb';
import QuizResultModel from '../../../../lib/models/Quiz';
import jwt from 'jsonwebtoken';
import { headers } from 'next/headers';

export async function GET(req) {
    try {
        // const { title, answers, totalScore, categoryScores, questionBreakdown } = await req.json();

        // Log the incoming data for debugging
        // console.log("Received data:", { title, answers, totalScore, categoryScores, questionBreakdown });

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
        const data = await QuizResultModel.find({userId : decodedToken.userId});


        // Log saved quiz result for debugging
        console.log("Quiz result fetched:", data);

        return new Response(
            JSON.stringify({ message: "Quiz results fetch successfully", data }),
            { status: 201 } // Created
        );

    } catch (error) {
        console.log("Error", error.message);
        return new Response(
            JSON.stringify({ message: "Error fetching quiz results", error: error.message }),
            { status: 500 } // Internal Server Error
        );
    }
}
