import React from 'react';
import { useRouter } from 'next/navigation';
import { FaEye, FaVolumeUp, FaFileAlt, FaHands } from 'react-icons/fa';

// Learning styles with descriptions and icons
const learningStyles = {
  V: {
    name: "Visual",
    description:
      "You have a preference for seeing and observing things, such as pictures, diagrams, and demonstrations.",
    icon: <FaEye className="text-green-600 text-3xl" />
  },
  A: {
    name: "Auditory",
    description:
      "You learn best through listening to information, whether it be through spoken words, discussions, or lectures.",
    icon: <FaVolumeUp className="text-blue-600 text-3xl" />
  },
  R: {
    name: "Read/Write",
    description:
      "You prefer information to be presented in written format, such as through reports, essays, or manuals.",
    icon: <FaFileAlt className="text-purple-600 text-3xl" />
  },
  K: {
    name: "Kinesthetic",
    description:
      "You learn best through physical experiences, such as hands-on activities, experiments, and demonstrations.",
    icon: <FaHands className="text-orange-600 text-3xl" />
  }
};

export default function LearningStyleResult({ data }) {
  const router = useRouter();
  const { totalScore, varkCounts } = data;

  // Calculate the highest score learning style(s)
  const maxScore = Math.max(...Object.values(varkCounts));
  const preferredStyles = Object.entries(varkCounts)
    .filter(([category, score]) => score === maxScore)
    .map(([category]) => learningStyles[category].name);

  return (
    <div className="p-8 min-h-screen flex justify-center items-center">
      <div className=" ">
        <h2 className="text-4xl text-center font-bold mb-8 text-gray-900">VARK Learning Style Result</h2>

        <div className="mb-8">
          {/* <p className="text-2xl font-medium text-gray-700 text-center mb-4">
            Total Score: <span className="text-gray-900 font-bold">{totalScore}</span>
          </p> */}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(varkCounts).map(([category, score]) => (
              <li key={category} className="p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-sm transition duration-300 ease-in-out hover:shadow-md hover:bg-gray-100">
                <div className="flex items-center mb-2">
                  {learningStyles[category].icon}
                  <h4 className="text-2xl font-semibold text-gray-800 ml-2">{learningStyles[category].name}</h4>
                </div>
                <p className="text-gray-600 text-lg">Score: {score}</p>
                <p className="mt-2 text-gray-500">{learningStyles[category].description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 p-8 bg-blue-50 border border-blue-200 rounded-lg shadow-md">
          <h3 className="text-3xl font-semibold text-blue-900 text-center mb-4">Your Preferred Learning Style(s)</h3>
          <p className="text-center text-lg text-gray-700">
            Based on your scores, your most preferred learning style(s) are:{" "}
            <span className="font-bold text-blue-700">
              {preferredStyles.join(", ")}
            </span>.
          </p>
          <p className="text-center mt-6 text-gray-600">
            This score indicates your learning preferences but not necessarily your strengths. For a more detailed analysis and personalized guidance, consider booking a counseling session.
          </p>
        </div>

        {/* Call to action button for counseling */}
        <div className="text-center mt-8">
          <button
            onClick={() => router.push('/contact')} // Navigate to contact page
            className="bg-green-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-green-700 transition-colors shadow-lg"
          >
            Book a Counseling Session
          </button>
        </div>
      </div>
    </div>
  );
}
