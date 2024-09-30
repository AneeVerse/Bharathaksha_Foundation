"use client";

import React, { useState } from "react";
import { socialStylesQuiz } from "@/data/socialStyleQuiz"; // Assuming the data is imported
import { useRouter } from "next/navigation";

const SocialStylesQuiz = () => {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [answers, setAnswers] = useState({}); // Track selected answers
  const [language, setLanguage] = useState("en"); // Default language is English
  const [loading, setLoading] = useState(false); // Add loading state

  // Handle answer selection
  const handleAnswerChange = (option) => {
    const updatedAnswers = { ...answers };
    const questionId = socialStylesQuiz[currentQuestion].id;

    // Update selected answer
    updatedAnswers[questionId] = option.id;

    // Update x and y coordinates based on selected category
    const updatedCoordinates = { ...coordinates };
    if (option.category.includes("x")) {
      updatedCoordinates.x += option.category === "+x" ? 1 : -1;
    } else if (option.category.includes("y")) {
      updatedCoordinates.y += option.category === "+y" ? 1 : -1;
    }

    setAnswers(updatedAnswers);
    setCoordinates(updatedCoordinates);
  };

  // Navigation functions
  const nextQuestion = () => {
    if (currentQuestion < socialStylesQuiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const submitQuiz = async () => {
    setLoading(true); // Set loading to true when submit starts
    const quizResult = {
      title: "Social Styles Test",
      type: "SocialStyle",
      // answers, // Assuming answers store selected options
      coordinates // Save the final coordinates (e.g., {x: 2, y: -1})
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
      setLoading(false); // Set loading back to false when the request is done
    }
  };

  // Disable next button until an option is selected for the current question
  const isNextDisabled = !answers[socialStylesQuiz[currentQuestion].id];

  return (
    <div className="max-w-3xl mt-[120px] mb-[30px] mx-auto p-6 bg-white rounded-lg shadow">
      {/* Language Selection */}
      <div className="mb-6 flex justify-end gap-2 items-center">
        <label htmlFor="language" className="text-md font-semibold text-gray-700">
          Select Language:
        </label>
        <select
          id="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-transparent border border-gray-300 rounded pl-3 pr-8 py-2 text-sm"
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="mr">Marathi</option>
        </select>
      </div>

      {/* Title and Instructions */}
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-semibold mb-2">Social Styles Quiz</h1>
        <p className="text-sm text-gray-700">
          {socialStylesQuiz[currentQuestion].question[language]}
        </p>
      </div>

      {/* Options (no questions, just statements) */}
      <div className="mb-6">
        {socialStylesQuiz[currentQuestion].options.map((option) => (
          <label
            key={option.id}
            className={`block p-3 mb-2 border rounded-lg cursor-pointer ${
              answers[socialStylesQuiz[currentQuestion].id] === option.id
                ? "border-green-500 bg-green-100"
                : "border-gray-300"
            }`}
          >
            <input
              type="radio"
              name={`question-${currentQuestion}`}
              value={option.id}
              onChange={() => handleAnswerChange(option)}
              className="mr-2"
              checked={
                answers[socialStylesQuiz[currentQuestion].id] === option.id
              }
            />
            {option.label[language]} {/* Display statement based on selected language */}
          </label>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <button
          onClick={prevQuestion}
          disabled={currentQuestion === 0}
          className={`px-5 py-2 bg-gray-300 rounded-lg font-semibold text-gray-700 ${
            currentQuestion === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-400"
          }`}
        >
          Back
        </button>

        {currentQuestion < socialStylesQuiz.length - 1 ? (
          <button
            onClick={nextQuestion}
            disabled={isNextDisabled}
            className={`px-5 py-2 rounded-lg font-semibold ${
              isNextDisabled
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-green-500 text-white hover:bg-green-600"
            }`
          }>
            Next
          </button>
        ) : (
          <button
            onClick={submitQuiz}
            disabled={loading} // Disable button when loading
            className={`px-5 py-2 rounded-lg font-semibold ${
              loading
                ? "bg-blue-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            {loading ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12c0-4.418 3.582-8 8-8s8 3.582 8 8"></path>
                </svg>
                Submitting...
              </span>
            ) : (
              "Submit"
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default SocialStylesQuiz;
