"use client";

import React, { useState } from "react";
import { learningStyleQuiz } from "@/data/learningStyleQuiz"; // Assuming the quiz data is imported from your file
import { useRouter } from "next/navigation";

const VARKQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const router = useRouter();
  const [answers, setAnswers] = useState({});
  const [varkCounts, setVarkCounts] = useState({
    V: 0,
    A: 0,
    R: 0,
    K: 0,
  });
  const [language, setLanguage] = useState("en"); // Default language is English

  // Handle option selection and update VARK category counts
  const handleAnswerChange = (option) => {
    const updatedAnswers = { ...answers };
    const questionId = learningStyleQuiz[currentQuestion].id;

    // Toggle option selection: if it's already selected, remove it, otherwise add it
    if (updatedAnswers[questionId]?.includes(option.id)) {
      updatedAnswers[questionId] = updatedAnswers[questionId].filter(
        (id) => id !== option.id
      );
    } else {
      updatedAnswers[questionId] = updatedAnswers[questionId]
        ? [...updatedAnswers[questionId], option.id]
        : [option.id];
    }

    // Recalculate VARK counts without negative values
    const updatedVarkCounts = { V: 0, A: 0, R: 0, K: 0 };
    Object.keys(updatedAnswers).forEach((qid) => {
      updatedAnswers[qid].forEach((answerId) => {
        const selectedOption = learningStyleQuiz
          .find((q) => q.id === Number(qid))
          .options.find((opt) => opt.id === answerId);
        updatedVarkCounts[selectedOption.category] += 1;
      });
    });

    setAnswers(updatedAnswers);
    setVarkCounts(updatedVarkCounts);
  };

  // Navigation functions
  const nextQuestion = () => {
    if (currentQuestion < learningStyleQuiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

 // Submit Quiz and send data to the backend
//  const submitQuiz = async () => {
//   const totalScore = varkCounts.V + varkCounts.A + varkCounts.R + varkCounts.K;
  
//   const quizResult = {
//     title: "VARK Learning Style Quiz",
//     type: "LearningStyle",
//     answers: answers,
//     totalScore,
//     varkCounts
//   };

//   try {
//     const res = await fetch('/api/quiz/saveResult', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${localStorage.getItem('token')}`,
//       },
//       body: JSON.stringify(quizResult),
//     });

//     if (res.ok) {
//       const resultData = await res.json();
//       router.push(`/dashboard/result/${resultData.quizResult._id}`);
//     } else {
//       console.error('Failed to save quiz result.');
//     }
//   } catch (error) {
//     console.error('Error submitting quiz:', error);
//   }
// };

const submitQuiz = async () => {
  const totalScore = varkCounts.V + varkCounts.A + varkCounts.R + varkCounts.K;

  const quizResult = {
    title: "VARK Learning Style Quiz",
    type: "LearningStyle",
    // answers,
    totalScore,
    varkCounts
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
  }
};


  // Check if at least one option is selected for the current question
  const isNextDisabled =
    !answers[learningStyleQuiz[currentQuestion].id] ||
    answers[learningStyleQuiz[currentQuestion].id].length === 0;

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
        <h1 className="text-2xl font-semibold mb-2">Your Learning Style</h1>
        <p className="text-sm text-gray-700">
          The VARK questionnaire provides you with a Profile of your Learning
          Preferences as well as how you process Information. Choose the answer
          which best explains your preference and circle the options below. You
          can select more than one option in a question if applicable.
        </p>
      </div>

      {/* Question */}
      <h2 className="text-xl font-semibold mb-6">
      Question  {currentQuestion + 1}/{learningStyleQuiz.length}
      </h2>
      <p className="text-lg mb-4 font-medium">
        {learningStyleQuiz[currentQuestion].question[language]}
      </p>

      {/* Options */}
      <div className="mb-6">
        {learningStyleQuiz[currentQuestion].options.map((option) => (
          <label
            key={option.id}
            className={`block p-3 mb-2 border rounded-lg cursor-pointer ${
              answers[learningStyleQuiz[currentQuestion].id]?.includes(option.id)
                ? "border-green-500 bg-green-100"
                : "border-gray-300"
            }`}
          >
            <input
              type="checkbox"
              name={`question-${currentQuestion}`}
              value={option.id}
              onChange={() => handleAnswerChange(option)}
              className="mr-2"
              checked={
                answers[learningStyleQuiz[currentQuestion].id]?.includes(
                  option.id
                ) || false
              }
            />
            {option.label[language]}
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

        {currentQuestion < learningStyleQuiz.length - 1 ? (
          <button
            onClick={nextQuestion}
            disabled={isNextDisabled}
            className={`px-5 py-2 rounded-lg font-semibold ${
              isNextDisabled
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-green-500 text-white hover:bg-green-600"
            }`}
          >
            Next
          </button>
        ) : (
          <button
            onClick={submitQuiz}
            disabled={isNextDisabled}
            className={`px-5 py-2 rounded-lg font-semibold ${
              isNextDisabled
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default VARKQuiz;
