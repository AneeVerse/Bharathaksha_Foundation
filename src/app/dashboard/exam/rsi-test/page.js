"use client"
import React, { useState } from "react";
import { quizData } from "../../../../data/quizData";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOptionChange = (questionId, optionId) => {
    setAnswers({
      ...answers,
      [questionId]: optionId,
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const getOptionCounts = () => {
    const counts = {};
    Object.values(answers).forEach((answer) => {
      if (counts[answer]) {
        counts[answer] += 1;
      } else {
        counts[answer] = 1;
      }
    });
    return counts;
  };

  if (isSubmitted) {
    const optionCounts = getOptionCounts();

    return (
      <div className="max-w-2xl mt-[100px] mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">Quiz Results</h2>
        <p className="text-lg text-gray-700 mb-6 text-center">Here’s the count of your selected options:</p>
        <ul className="text-lg text-gray-600 space-y-4">
          {Object.keys(optionCounts).map((option) => (
            <li key={option} className="p-4 bg-gray-100 rounded-lg">
              <span className="font-medium text-gray-800">Option {option}:</span> {optionCounts[option]} selections
            </li>
          ))} 
        </ul>
      </div>
    );
  }

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <div className="max-w-2xl mt-[100px] mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-gray-800">{`Question ${currentQuestionIndex + 1}/${quizData.length}`}</h2>
      <p className="text-lg text-gray-700 mb-8">{currentQuestion.question}</p>

      <div className="space-y-4">
        {/* Display options for the current question */}
        {currentQuestion.options.map((option) => (
          <div
            key={option.id}
            onClick={() => handleOptionChange(currentQuestion.id, option.id)}
            className={`flex items-center p-4 bg-gray-100 rounded-lg border cursor-pointer transition-all ${
              answers[currentQuestion.id] === option.id
                ? "border-green-500 shadow-sm shadow-green-500/50"
                : "hover:shadow-sm hover:shadow-gray-300"
            }`}
          >
            <input
              type="radio"
              name={`question-${currentQuestion.id}`}
              value={option.id}
              checked={answers[currentQuestion.id] === option.id}
              onChange={() =>
                handleOptionChange(currentQuestion.id, option.id)
              }
              className={`form-radio h-5 w-5 text-green-600 transition-all ${
                answers[currentQuestion.id] === option.id
                  ? "shadow-green-500/50"
                  : ""
              }`}
            />
            <span className="ml-4 text-gray-800 text-lg">{option.label}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={handleBack}
          disabled={currentQuestionIndex === 0}
          className={`px-6 py-2 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400 transition-all ${
            currentQuestionIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Back
        </button>

        {currentQuestionIndex < quizData.length - 1 ? (
          <button
            onClick={handleNext}
            className="px-6 py-2 bg-[#8ac240] text-white rounded-lg font-semibold hover:bg-[#6c9c2d] transition-all"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-all"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
