"use client"

import ExponentialGraph from "@/components/result/ExponentialGraph";


// pages/test-results.js

const TestResults = () => {
  // Sample data for the graph
  const testData = [
    { question: 'Q1', score: 2 },
    { question: 'Q2', score: 3 },
    { question: 'Q3', score: 1 },
    { question: 'Q4', score: 2 },
    { question: 'Q5', score: 2 },
    { question: 'Q6', score: 3 },
    { question: 'Q1', score: 2 },
    { question: 'Q2', score: 8 },
    { question: 'Q3', score: 3 },
    { question: 'Q4', score: 5 },
    { question: 'Q5', score: 2 },
    { question: 'Q6', score: 3 },
    { question: 'Q1', score: 7 },
    { question: 'Q2', score: 3 },
    { question: 'Q3', score: 2 },
    { question: 'Q4', score: 2 },
    { question: 'Q5', score: 2 },
    { question: 'Q6', score: 11 },
    // Add more data as needed
  ];

  return (
    <div className="min-h-screen mt-[90px] bg-gray-100">
      <h1 className="text-3xl text-center text-gray-800 font-bold mt-6">
        Test Results
      </h1>
      <ExponentialGraph data={testData} />
    </div>
  );
};

export default TestResults;


// import ExponentialGraph from "@/components/result/ExponentialGraph";

// pages/test-results.js


// const TestResults = () => {
//   // Sample data, adjust values for x (questions) and y (scores)
//   const testData = [
//     { question: 1, score: 40 },
//     { question: 2, score: -20 },
//     { question: 3, score: 50 },
//     { question: 4, score: 80 },
//     { question: 5, score: -60 },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <h1 className="text-3xl text-center text-gray-800 font-bold mt-6">
//         Test Results
//       </h1>
//       <ExponentialGraph data={testData} />
//     </div>
//   );
// };

// export default TestResults;

