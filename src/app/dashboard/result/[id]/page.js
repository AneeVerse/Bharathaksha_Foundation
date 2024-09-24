"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/layout/Loader";
import RIASECResult from "@/components/resultPage/RIASECResult";
import AdversityResult from "@/components/resultPage/AdversityResult";
import LearningStyleResult from "@/components/resultPage/LearningStyleResult";
import SocialStyleResult from "@/components/resultPage/SocialStyleResult";
import RsiTest from "@/components/resultPage/RsiTest";
import PsiTest from "@/components/resultPage/PsiTest";

export default function QuizResult({ params }) {
  const { id } = params;
  const [quizResult, setQuizResult] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchQuizResult() {
      try {
        const response = await fetch(`/api/quiz/result/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch quiz result.");
        }
        const data = await response.json();
        setQuizResult(data.quizResult); // Fetch the specific quiz result data
      } catch (err) {
        setError(err.message);
      }
    }

    if (id) fetchQuizResult();
  }, [id]);

  if (error) return <div className="text-red-500">{error}</div>;
  if (!quizResult) return <Loader />;

  // Render different components based on the quiz type
  const renderQuizResult = () => {
    switch (quizResult.type) {
      case 'Adversity':
        return <AdversityResult data={quizResult} />;
      case 'LearningStyle':
        return <LearningStyleResult data={quizResult} />;
      case 'PsiTest':
        return <PsiTest data={quizResult} />;
      case 'RIASEC':
        return <RIASECResult data={quizResult} />;
      case 'RsiTest':
        return <RsiTest data={quizResult} />;
      case 'SocialStyle':
        return <SocialStyleResult data={quizResult} />;
      default:
        return <div className="mt-[100px]">No Result Found</div>;
    }
  };

  return (
    <div className="max-w-4xl mt-[90px] mx-auto p-6 rounded-lg">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Quiz Result</h1>
      {renderQuizResult()}
    </div>
  );
}
