import { connectToDatabase } from '../../../../lib/mongodb';
import QuizResultModel from '../../../../lib/models/Quiz';
import jwt from 'jsonwebtoken';
import { headers } from 'next/headers';

export async function POST(req) {
    try {
        // Parse the request body
        const { 
            title, 
            type, 
            finalType, 
            answers, 
            totalScore, 
            totalScores, 
            categoryScores, 
            questionBreakdown, 
            varkCounts, 
            coordinates, 
            scores, 
            counts 
        } = await req.json();
        
        // Get the Authorization header
        const reqHeader = headers();
        const authHeader = reqHeader.get('Authorization');
        if (!authHeader) {
            return new Response(
                JSON.stringify({ message: "Authorization header missing" }),
                { status: 401 }
            );
        }

        const token = authHeader.split(' ')[1]; // Assuming 'Bearer <token>'
        if (!token) {
            return new Response(
                JSON.stringify({ message: "Token missing" }),
                { status: 401 }
            );
        }

        // Verify JWT token
        let decodedToken;
        try {
            decodedToken = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET_KEY);
        } catch (error) {
            return new Response(
                JSON.stringify({ message: "Invalid or expired token" }),
                { status: 401 }
            );
        }

        // Connect to MongoDB
        await connectToDatabase();

        // Dynamic save logic based on quiz type
        const newQuizResult = new QuizResultModel({
            userId: decodedToken.userId,
             user: {
                name: decodedToken.name,
                email: decodedToken.email
            },
            title,
            type,
            answers,
            totalScore,
            finalType,
            totalScores,
            ...(type === 'Adversity' || type === 'LearningStyle' ? { categoryScores, questionBreakdown } : {}),
            ...(type === 'LearningStyle' ? { varkCounts } : {}),
            ...(type === 'SocialStyle' ? { coordinates } : {}),
            ...(type === 'PsiTest' ? { categoryScores, totalScores } : {}),
            ...(type === 'RIASEC' ? { scores } : {}),
            ...(type === 'RsiTest' ? { counts } : {})
        });

        // Save the quiz result
        await newQuizResult.save();

        console.log("newQuiz", newQuizResult)

        return new Response(
            JSON.stringify({ message: "Quiz result saved successfully", quizResult: newQuizResult }),
            { status: 201 }
        );
    } catch (error) {
        console.error("Error saving quiz result:", error);
        return new Response(
            JSON.stringify({ message: "Error saving quiz result", error: error.message }),
            { status: 500 }
        );
    }
}
