"use client";

import React, { useState } from 'react';
import { riasecQuizData } from '@/data/riasecQuizData'; // Assuming the quizData with options and labels in multiple languages is imported
import { useRouter } from 'next/navigation';

const Quiz = () => {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [language, setLanguage] = useState("en"); // Default language set to English
  const [scores, setScores] = useState({
    R: 0,
    I: 0,
    A: 0,
    S: 0,
    E: 0,
    C: 0,
  });
  const [loading, setLoading] = useState(false); // Loading state for submit button

  const handleAnswer = (answer) => {
    if (answer === "yes") {
      const updatedScores = { ...scores };
      const category = riasecQuizData[currentQuestion].category;
      updatedScores[category] += 1; // Increment the category score
      setScores(updatedScores);
    }

    if (currentQuestion < riasecQuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      submitQuiz();
    }
  };

  const submitQuiz = async () => {
    const quizResult = {
      title: "RIASEC Career Test",
      type: "RIASEC",
      totalScore: Object.values(scores).reduce((acc, val) => acc + val, 0), // Sum of scores
      scores // RIASEC scores for each category (R, I, A, S, E, C)
    };

    try {
      setLoading(true); // Show loading spinner

      const res = await fetch('/api/quiz/saveResult', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(quizResult),
      });

      if (res.ok) {
        const resultData = await res.json();
        router.push(`/dashboard/result/${resultData.quizResult._id}`);
      } else {
        console.error('Failed to save quiz result.');
      }
    } catch (error) {
      console.error('Error submitting quiz:', error);
    } finally {
      setLoading(false); // Stop loading when the request finishes
    }
  };

  return (
    <div className="mt-[120px] mb-[30px] max-w-3xl mx-auto p-6 bg-white rounded-lg shadow">
      {/* Language Selection Dropdown */}
      <div className="mb-6 flex justify-end gap-2 items-center">
        <label htmlFor="language" className="text-md font-semibold text-gray-700">
          Select Language:
        </label>
        <select
          id="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-gray-100 border border-gray-300 rounded pl-3 pr-8 py-2 text-sm shadow-sm"
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="mr">Marathi</option>
        </select>
      </div>

      {/* Question Display */}
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Question {currentQuestion + 1} of {riasecQuizData.length}
      </h2>
      <p className="text-lg mb-6 text-gray-700">
        {riasecQuizData[currentQuestion].question[language]}
      </p>

      {/* Yes/No Buttons */}
      <div className="flex flex-col justify-center gap-6">
        <button
          onClick={() => handleAnswer("yes")}
          className={`px-5 py-3 border border-green-600 text-green-600 rounded-md font-semibold hover:bg-green-600 hover:text-white shadow-md transition-all transform ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading} // Disable button when loading
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin h-5 w-5 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 118 8v-8H4z"></path>
              </svg>
              Submitting...
            </span>
          ) : (
            'Yes'
          )}
        </button>
        <button
          onClick={() => handleAnswer("no")}
          className={`px-5 py-3 border border-red-600 text-red-600 rounded-md font-semibold hover:bg-red-600 shadow-md hover:text-white transition-all transform ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading} // Disable button when loading
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin h-5 w-5 mr-2 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 118 8v-8H4z"></path>
              </svg>
              Submitting...
            </span>
          ) : (
            'No'
          )}
        </button>
      </div>
    </div>
  );
};

export default Quiz;
