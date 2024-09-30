import React from 'react';
import { FaMoneyBillWave, FaBullhorn, FaAnchor, FaBookReader, FaLightbulb, FaPeopleCarry, FaUserFriends, FaShieldAlt, FaTrophy } from 'react-icons/fa';

// Updated category descriptions with respective colors
const categoryDescriptions = {
  A: { label: "Money", description: "Desire for wealth and financial success.", icon: <FaMoneyBillWave className="text-green-600 text-3xl" /> },
  B: { label: "Power", description: "Desire for control, authority, and influence over others.", icon: <FaBullhorn className="text-red-600 text-3xl" /> },
  C: { label: "Meaning", description: "Desire to find purpose and significance in your work.", icon: <FaAnchor className="text-blue-600 text-3xl" /> },
  D: { label: "Expertise", description: "Desire to gain specialized knowledge and skills.", icon: <FaBookReader className="text-purple-600 text-3xl" /> },
  E: { label: "Innovation", description: "Desire to create and implement new ideas.", icon: <FaLightbulb className="text-yellow-600 text-3xl" /> },
  F: { label: "Social Affiliation", description: "Desire to build meaningful relationships at work.", icon: <FaPeopleCarry className="text-orange-600 text-3xl" /> },
  G: { label: "Autonomy", description: "Desire for independence and freedom in making decisions.", icon: <FaUserFriends className="text-teal-600 text-3xl" /> },
  H: { label: "Security", description: "Desire for stability, predictability, and long-term security.", icon: <FaShieldAlt className="text-gray-600 text-3xl" /> },
  I: { label: "Status", description: "Desire for recognition, prestige, and social standing.", icon: <FaTrophy className="text-pink-600 text-3xl" /> }
};

export default function RsiTest({ data }) {
  const { totalScore, counts } = data;

  // Convert counts object into an array and sort by score in ascending order
  const sortedCounts = Object.entries(counts).sort(([, scoreA], [, scoreB]) => scoreB - scoreA);

  return (
    <div className="p-6">
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-900">RSI Test Result</h2>

      <div className="mb-8">
        {/* Score Cards Displayed in Ascending Order */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sortedCounts.map(([category, score]) => (
            <div
              key={category}
              className={`p-6 bg-white border rounded-lg shadow-md transition-transform transform hover:scale-105 
                          ${score > 6 ? "border-indigo-600 bg-indigo-50" : "border-gray-300"}`}
            >
              <div className="flex items-center mb-2">
                {categoryDescriptions[category].icon}
                <h4 className="text-2xl font-bold text-gray-800 ml-2">{categoryDescriptions[category].label}</h4>
              </div>
              <p className="text-2xl font-bold text-indigo-600 mb-2">Score: {score}</p>
              <p className="text-gray-700">{categoryDescriptions[category].description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Counseling Call to Action Section */}
      <div className="mt-12 text-center">
        <p className="text-lg text-gray-600 mb-4">
          If you’re seeking guidance on how to align your desires with your career, our counseling sessions can provide personalized insights and support.
        </p>
        <button
          onClick={() => alert("Redirecting to counseling page...")} // Placeholder for redirect action
          className="bg-green-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-green-700 transition-colors shadow-lg"
        >
          Book detailed Counseling Session
        </button>
      </div>
    </div>
  );
}
