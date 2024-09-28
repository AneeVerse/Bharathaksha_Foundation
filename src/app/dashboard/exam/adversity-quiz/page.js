"use client";
import React, { useState } from "react";
import { adversityResponseProfile } from "@/data/adversityResponseProfile";
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { FaSpinner } from "react-icons/fa"; // Import spinner icon

const Quiz = () => {
  const [language, setLanguage] = useState("en");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setLocalAnswers] = useState(Array(adversityResponseProfile.length).fill(-1));
  const [loading, setLoading] = useState(false); // Add loading state

  const dispatch = useDispatch();
  const router = useRouter();

  const handleAnswerChange = (value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = value;
    setLocalAnswers(updatedAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < adversityResponseProfile.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // Function to calculate category scores and question-wise breakdown
  const calculateCategoryScores = (answers) => {
    const categoryScores = {};
    const questionBreakdown = [];

    adversityResponseProfile.forEach((question, index) => {
      const category = question.category;
      if (!categoryScores[category]) {
        categoryScores[category] = 0; // Initialize category score if it doesn't exist
      }
      const score = answers[index];
      categoryScores[category] += score; // Add the answer to the respective category score

      // Store question-wise score breakdown
      questionBreakdown.push({
        question: question.situation[language],
        category,
        score,
      });
    });

    return { categoryScores, questionBreakdown };
  };

  const submitQuiz = async () => {
    setLoading(true); // Set loading state to true
    const totalScore = answers.reduce((sum, score) => sum + score, 0) * 2;
    const { categoryScores, questionBreakdown } = calculateCategoryScores(answers); // Logic to calculate category scores

    const quizResult = {
      title: "Adversity Response Profile Test",
      type: "Adversity",
      totalScore,
      categoryScores,
      questionBreakdown,
    };

    try {
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
      setLoading(false); // Set loading state to false after submission
    }
  };

  return (
    <div className="max-w-4xl mx-3  sm:mx-4 md:mx-10 lg:mx-auto mt-36 p-3 sm:p-8 bg-white rounded-lg mb-12 shadow-lg border border-gray-200">
      {/* Language Selection Dropdown */}
      <div className="mb-6 flex justify-end gap-2 items-center">
        <label htmlFor="language" className=" text-md self-center font-semibold text-gray-700">
          Select Language:
        </label>
        <div className="relative self-center">
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="mr">Marathi</option>
          </select>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
          </svg>
        </div>
      </div>

      {/* Question Title */}
      <h2 className=" text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-6">
        Question {currentQuestion + 1} of {adversityResponseProfile.length}
      </h2>

      {/* Question Content */}
      <div className="bg-gray-50 p-3 sm:p-6 rounded-lg shadow-sm mb-8 border border-gray-200">
        <p className="text-md sm:text-lg font-medium mb-4 text-gray-700">
          <strong className="font-semibold text-gray-900">Situation:</strong> {adversityResponseProfile[currentQuestion].situation[language]}
        </p>
        <p className="text-base text-gray-600">
          {adversityResponseProfile[currentQuestion].response[language]}
        </p>
      </div>

      {/* Answer Options */}
      <div className="relative mb-8">
        <div className="flex justify-between text-[11px] max-w-sm mx-auto sm:text-sm mb-3 text-gray-500">
          <span>{adversityResponseProfile[currentQuestion].minLabel[language]}</span>
          <span>{adversityResponseProfile[currentQuestion].maxLabel[language]}</span>
        </div>
        <div className="flex justify-center gap-2 sm:gap-4">
          {[0, 1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              onClick={() => handleAnswerChange(value)}
              className={`w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center rounded-full font-semibold transition-all duration-200 shadow-sm ${
                answers[currentQuestion] === value
                  ? "bg-green-600 text-white transform scale-105"
                  : "border border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              {value}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center">
        {/* Previous Button */}
        <button
          onClick={prevQuestion}
          disabled={currentQuestion === 0}
          className={`px-5 py-3 text-sm sm:text-lg flex items-center gap-2 rounded-lg font-semibold transition-all duration-200 shadow-sm focus:outline-none ${
            currentQuestion === 0
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-gray-600 text-white hover:bg-gray-700"
          }`}
        >
          <FaAngleLeft className=" text-md sm:text-lg" />
         <span className="self-center">Previous</span> 
        </button>

        {currentQuestion < adversityResponseProfile.length - 1 ? (
          // Next Button
          <button
            onClick={nextQuestion}
            disabled={answers[currentQuestion] === -1}
            className={`px-5 text-sm sm:text-lg py-3 flex items-center gap-2 rounded-lg font-semibold transition-all duration-200 shadow-md focus:outline-none ${
              answers[currentQuestion] === -1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-[#8ac240] text-white hover:bg-[#6b9730]"
            }`}
          >
             <span className="self-center">Next</span>
            <FaAngleRight className=" text-md sm:text-lg" />
          </button>
        ) : (
          // Submit Button
          <button
            onClick={submitQuiz}
            disabled={answers[currentQuestion] === -1 || loading} // Disable when loading is true
            className={`px-6 py-3 text-sm sm:text-lg rounded-lg font-semibold transition-all duration-200 shadow-md focus:outline-none ${
              answers[currentQuestion] === -1 || loading
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-green-600 text-white hover:bg-green-700"
            }`}
          >
            {loading ? (
              <FaSpinner className="animate-spin" /> // Show spinner when loading
            ) : (
              "Submit"
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
