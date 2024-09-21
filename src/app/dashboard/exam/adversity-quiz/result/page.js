"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Loader from '@/components/layout/Loader';

export default function QuizResult() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    async function fetchQuizResult() {
      try {
        const response = await fetch('/api/quiz/adversity/result', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Get JWT token from localStorage
          },
        });
        if (!response.ok) {
          throw new Error((await response.json()).message);
        }
        const data = await response.json();
        setResult(data.quizResult);
        console.log("result", data.quizResult);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchQuizResult();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/auth/login'); // Redirect to login if no token
    }
  }, [router]);

  const getAqRating = (score) => {
    if (score >= 178) return 'High AQ';
    if (score >= 161) return 'Moderately High AQ';
    if (score >= 135) return 'Moderate AQ';
    if (score >= 118) return 'Moderately Low AQ';
    return 'Low AQ';
  };

  const getAqDescription = (score) => {
    if (score >= 178) {
      return <p><b>High AQ (178-200):</b>If you are in this range, you are among the elite, who routinely face and overcome adversities of all magnitudes. Setbacks are likely to be short-lived and contained. You probably demonstrate strong accountability for dealing with difficult situations and are an agile problem solver. People are drawn to your natural resilience and optimism. You can fine-tune your AQ and use your abilities to coach and guide others.</p>;
    }
    if (score >= 161) {
      return <p><b>Moderately High AQ (161-177):</b>If you are in this range, you are already more effective than most people at dealing with difficulties and setbacks. You are likely more resilient and persevere when faced with most challenges. There may be moments when adversity piles up and becomes more of a burden than necessary. By strengthening your AQ, you can become even more agile and able to take greater challenges.</p>;
    }
    if (score >= 135) {
      return <p><b>Moderate AQ (135-160):</b>The majority of people fall in this range. If you have a moderate AQ, this suggests that you probably fare well with many difficulties. However, when adversities mount and you become fatigued, they may wear you down unnecessarily. You may at times become demoralized or overwhelmed. As you strengthen your AQ, you will discover newfound strength and fortitude in dealing with all sorts of challenges.</p>;
    }
    if (score >= 118) {
      return <p><b>Moderately Low AQ (118-134):</b>If you score in this range, you may handle some setbacks relatively well. However, as your world becomes increasingly complex, chaotic, and challenging, you may be suffering unnecessarily. You can reduce the toll adversity takes and strengthen your resilience by raising your AQ.</p>;
    }
    return <p><b>Low AQ (117 and below):</b>If you have a low AQ, do not despair! It simply explains why life can seem so overwhelming and difficult at times. It also provides you with a firm starting point. As your AQ increases, you will experience the most dramatic results in how you view, respond to, and experience challenges in your work and life. Improving your AQ may become a transformational experience as you discover a large pool of untapped potential and enjoyment.</p>;
  };

  if (error) {
    return <div className="text-red-500 text-center mt-4">{error}</div>;
  }

  if (!result) {
    return <Loader />;
  }

  const aqRating = getAqRating(result.totalScore);
  const aqDescription = getAqDescription(result.totalScore);

  return (
    <div className="max-w-4xl mt-[90px] mx-auto p-6  rounded-lg ">
    <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Adversity Response Profile Result</h1>
  
    {/* Cards for AQ Score and AQ Rating */}
    <div className="flex justify-around gap-6 mb-6">
      {/* AQ Score Card */}
      <div className="flex-1 bg-gradient-to-r from-green-400 via-green-300 to-green-200 shadow-lg rounded-lg p-6">
        <div className="flex flex-col items-center">
          <div className="text-xl font-semibold text-gray-800">AQ Score</div>
          <div className="text-3xl font-bold text-gray-900 mt-2">{result.totalScore}</div>
        </div>
      </div>
  
      {/* AQ Rating Card */}
      <div className="flex-1 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 shadow-lg rounded-lg p-6">
        <div className="flex flex-col items-center">
          <div className="text-xl font-semibold text-gray-800">AQ Rating</div>
          <div className="text-3xl font-bold text-gray-900 mt-2">{aqRating}</div>
        </div>
      </div>
    </div>
  
    {/* Description based on AQ rating */}
    <div className="mt-6 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Description:</h2>
      <div className="text-gray-700 leading-relaxed">{aqDescription}</div>
    </div>
  
    {/* Call to action button for counseling */}
    <div className="text-center mt-10">
      <p className="text-gray-700 mb-4">For more detailed or one-on-one counselling, kindly contact us.</p>
      <button
        onClick={() => router.push('/contact')} // Navigate to contact page
        className="bg-[#8ac240] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#6b9b2c] transition-colors shadow-lg"
      >
        Contact Us for Counselling
      </button>
    </div>
  </div>
  );
}
