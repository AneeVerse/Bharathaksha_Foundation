"use client";
import React, { useState } from 'react';
import { riasecQuizData } from '@/data/riasecQuizData';

const RIASECQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(riasecQuizData.length).fill(null));
  const [showResults, setShowResults] = useState(false); // State to control when to show results
  const [results, setResults] = useState({ R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 }); // State to store the results

  const handleAnswerChange = (value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = value;
    setAnswers(updatedAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < riasecQuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      submitQuiz(); // Calculate and show results
    }
  };

  const submitQuiz = () => {
    const score = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
    const categories = ['R', 'I', 'A', 'S', 'E', 'C'];
    answers.forEach((answer, index) => {
      if (answer !== null) {
        score[categories[answer]] += 1;
      }
    });
    setResults(score);
    setShowResults(true); // Set the state to show results
  };

  return (
    <div className="max-w-xl mx-auto mt-[130px] p-8 bg-white rounded-lg shadow-lg">
      {!showResults ? (
        <>
          <h2 className="text-2xl font-bold mb-4 text-center">
            Question {currentQuestion + 1} of {riasecQuizData.length}
          </h2>
          <div className="mb-6 text-left">
            <p className="text-lg font-semibold mb-2">
              {riasecQuizData[currentQuestion].question}
            </p>
          </div>

          <div className="flex justify-center space-x-4 mb-6">
            {Array.from({ length: 6 }, (_, i) => i).map(value => (
              <button
                key={value}
                onClick={() => handleAnswerChange(value)}
                className={`w-12 h-12 flex items-center justify-center rounded-full text-white font-semibold transition-all duration-200 ${
                  answers[currentQuestion] === value
                    ? 'bg-green-600 shadow-lg transform scale-105'
                    : 'bg-gray-400 hover:bg-green-500'
                }`}
              >
                {value}
              </button>
            ))}
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => setCurrentQuestion(currentQuestion - 1)}
              disabled={currentQuestion === 0}
              className="px-6 py-3 rounded-md font-semibold text-white bg-gray-500 hover:bg-gray-600"
            >
              Previous
            </button>

            <button
              onClick={nextQuestion}
              className="px-6 py-3 rounded-md font-semibold text-white bg-green-500 hover:bg-green-600 transition-all duration-200"
            >
              {currentQuestion < riasecQuizData.length - 1 ? 'Next' : 'Submit'}
            </button>
          </div>
        </>
      ) : (
        <div className="results mt-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Your RIASEC Results</h2>
          {Object.keys(results).map(key => (
            <p key={key}>{`${key}: ${results[key]}`}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default RIASECQuiz;
