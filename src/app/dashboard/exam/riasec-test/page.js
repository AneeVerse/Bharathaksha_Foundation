"use client";

import React, { useState } from 'react';
import { riasecQuizData } from '@/data/riasecQuizData'; // Assuming the quizData with options and labels in multiple languages is imported

const Quiz = () => {
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

  const submitQuiz = () => {
    console.log("Final Scores:", scores);
    alert(JSON.stringify(scores, null, 2)); // You can replace this with a proper result display
  };

  // const restartQuiz = () => {
  //   setCurrentQuestion(0);
  //   setScores({ R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 });
  // };

  return (
    <div className="mt-[90px] max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Language Selection Dropdown */}
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

      {/* Question Display */}
      <h2 className="text-xl font-semibold mb-6">Question {currentQuestion + 1} of {riasecQuizData.length}</h2>
      <p className="text-lg mb-6">
        {riasecQuizData[currentQuestion].question[language]}
      </p>

      {/* Yes/No Buttons */}
      <div className="flex justify-center gap-4">
        <button
          onClick={() => handleAnswer("yes")}
          className="px-5 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600"
        >
          Yes
        </button>
        <button
          onClick={() => handleAnswer("no")}
          className="px-5 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600"
        >
          No
        </button>
      </div>

      {/* Show restart button after quiz completion */}
      {/* {currentQuestion === riasecQuizData.length - 1 && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={restartQuiz}
            className="px-5 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600"
          >
            Restart Quiz
          </button>
        </div>
      )} */}
    </div>
  );
};

export default Quiz;
