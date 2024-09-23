"use client";

import React, { useState } from 'react';
import { psiQuizData } from '@/data/psiQuizData'; // Assuming the quizData with options and labels in multiple languages is imported

const PersonalStyleInventoryQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(psiQuizData.length).fill([-1, -1])); // Initialize with -1 meaning no selection
  const [language, setLanguage] = useState("en"); // Default language set to English

  // Handle score changes for each question
  const handleAnswerChange = (index, statement1Value) => {
    const statement2Value = 5 - statement1Value; // The sum of both must always be 5
    const updatedAnswers = [...answers];
    updatedAnswers[index] = [statement1Value, statement2Value]; // Update the selected answer
    setAnswers(updatedAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < psiQuizData.length - 1) {
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
      I: 0,
      E: 0,
      N: 0,
      S: 0,
      T: 0,
      F: 0,
      P: 0,
      J: 0,
    };

    // Count the occurrences of each option based on the selected answers
    psiQuizData.forEach((question, index) => {
      const selectedOption1 = question.options[0].category;
      const selectedOption2 = question.options[1].category;
      counts[selectedOption1] += answers[index][0]; // Add points for statement 1
      counts[selectedOption2] += answers[index][1]; // Add points for statement 2
    });

    // Determine the dominant categories for the result
    const ie = counts.I > counts.E ? "I" : "E";
    const ns = counts.N > counts.S ? "N" : "S";
    const tf = counts.T > counts.F ? "T" : "F";
    const pj = counts.P > counts.J ? "P" : "J";
    
    // Final result in the form of a 4-letter code
    const result = `${ie}${ns}${tf}${pj}`;

    console.log("Final Scores:", counts);
    console.log("Result:", result);

    alert(`Your Personality Type is: ${result} ${JSON.stringify(counts)}`); // Show result in an alert (can replace with proper UI display)
  };

  const isNextDisabled = answers[currentQuestion][0] === -1; // Disable the Next button if no selection is made

  return (
    <div className="mt-[90px] max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Introduction to the Personal Style Inventory */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-4 text-center">Personal Style Inventory</h1>
        <p className="mb-4 text-sm text-gray-700">
          Just as every person has differently shaped feet and toes from every other person, so we all have differently
          “shaped” personalities. Just as no person’s foot shape is “right” or “wrong,” so no person’s personality shape
          is right or wrong. The purpose of this inventory is to give you a picture of the shape of your preferences, but
          that shape, while different from the shapes of other persons’ personalities, has nothing to do with mental health
          or intelligence.
        </p>
        <p className="mb-4 text-sm text-gray-700">
          The following items are arranged in pairs (a & b) and each member of the pair represents a preference you may or may not hold. 
          Rate your preference for each item by giving it a score between 0 - 5.
        </p>
        <ul className="list-disc list-inside mb-6 text-sm text-gray-700">
          <li>0 = You really feel negative about it or very positive about the other member of the pair.</li>
          <li>1 = Still feel quite negative about this item.</li>
          <li>2 = Feel moderately negative about the item.</li>
          <li>3 = Not really strongly negative or positive.</li>
          <li>4 = Feel much more positive about this item.</li>
          <li>5 = You strongly prefer it or do not prefer the other member of the pair.</li>
        </ul>
        <p className="mb-4 text-sm text-gray-700">
          The scores for each &quot;a & b&quot; pair MUST ADD UP TO 5 (i.e., 0+5, 1+4, 2+3). Do not use fractions such as 2½.
        </p>
      </div>

      {/* Language Selection Dropdown */}
      <div className="mb-6 flex justify-end gap-2 items-center">
        <label htmlFor="language" className="text-md font-semibold text-gray-700">Select Language:</label>
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

      <h2 className="text-xl font-semibold mb-6">Question {currentQuestion + 1} of {psiQuizData.length}</h2>

      {/* Display the statements for the current question */}
      <div className="mb-6">
        {/* Statement 1 */}
        <p className="text-lg mb-2 font-medium">{psiQuizData[currentQuestion].options[0].label[language]}</p>
        <div className="flex justify-center gap-2 sm:gap-4 mb-4">
          {[0, 1, 2, 3, 4, 5].map((value) => (
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
        <p className="text-lg mb-2 font-medium">{psiQuizData[currentQuestion].options[1].label[language]}</p>
        <div className="flex justify-center gap-2 sm:gap-4 mb-4">
          {[0, 1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              onClick={() => handleAnswerChange(currentQuestion, 5 - value)} // Ensure the total score between the two adds up to 5
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

        {currentQuestion < psiQuizData.length - 1 ? (
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

export default PersonalStyleInventoryQuiz;