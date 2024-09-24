"use client";

import React, { useState } from 'react';
import { rsiQuizData } from '@/data/rsiQuizData'; // Assuming the quizData with options and labels in multiple languages is imported

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(rsiQuizData.length).fill([-1, -1])); // Initialize with -1 meaning no selection
  const [language, setLanguage] = useState("en"); // Default language set to English

  // Handle score changes for each question
  const handleAnswerChange = (index, statement1Value) => {
    const statement2Value = 3 - statement1Value; // The sum of both must always be 3
    const updatedAnswers = [...answers];
    updatedAnswers[index] = [statement1Value, statement2Value]; // Update the selected answer
    setAnswers(updatedAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < rsiQuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const submitQuiz = () => {
    const counts = {
      A: 0,
      B: 0,
      C: 0,
      D: 0,
      E: 0,
      F: 0,
      G: 0,
      H: 0,
      I: 0,
    };

    // Count the occurrences of each option
    rsiQuizData.forEach((question, index) => {
      const selectedOption1 = question.options[0].id;
      const selectedOption2 = question.options[1].id;
      counts[selectedOption1] += answers[index][0]; // Add points for statement 1
      counts[selectedOption2] += answers[index][1]; // Add points for statement 2
    });

    console.log("Final Scores:", counts);
    alert(JSON.stringify(counts, null, 2)); // Show result in an alert (you can replace this with a proper result display)
  };

  const isNextDisabled = answers[currentQuestion][0] === -1; // Disable the Next button if no selection is made

  return (
    <div className="mt-[120px] mb-[30px] max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
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

      <h2 className="text-xl text-center font-semibold mb-6">Question {currentQuestion + 1} of {rsiQuizData.length}</h2>

      {/* Display the statements for the current question */}
      <div className="mb-6">
        {/* Statement 1 */}
        <p className="text-lg text-center mb-2 font-medium">
          {rsiQuizData[currentQuestion].options[0].label[language]}
        </p>
        <div className="flex justify-center gap-2 sm:gap-4 mb-4">
          {[0, 1, 2, 3].map((value) => (
            <button
              key={value}
              onClick={() => handleAnswerChange(currentQuestion, value)}
              className={`w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center rounded-full font-semibold transition-all duration-200 shadow-sm ${
                answers[currentQuestion][0] === value
                  ? "bg-green-600 text-white transform scale-105"
                  : "border border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              {value}
            </button>
          ))}
        </div>

        {/* Statement 2 */}
        <p className="text-lg text-center mb-2 font-medium">
          {rsiQuizData[currentQuestion].options[1].label[language]}
        </p>
        <div className="flex justify-center gap-2 sm:gap-4 mb-4">
          {[0, 1, 2, 3].map((value) => (
            <button
              key={value}
              onClick={() => handleAnswerChange(currentQuestion, 3 - value)} // Invert the selection for statement 2
              className={`w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center rounded-full font-semibold transition-all duration-200 shadow-sm ${
                answers[currentQuestion][1] === value
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
      <div className="flex justify-between mt-8">
        <button
          onClick={prevQuestion}
          disabled={currentQuestion === 0}
          className={`px-5 py-2 bg-gray-300 rounded-lg font-semibold text-gray-700 ${currentQuestion === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-400"}`}
        >
          Previous
        </button>

        {currentQuestion < rsiQuizData.length - 1 ? (
          <button
            onClick={nextQuestion}
            disabled={isNextDisabled} // Disable the Next button until a selection is made
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
            disabled={isNextDisabled} // Disable the Submit button if nothing is selected
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

export default Quiz;
