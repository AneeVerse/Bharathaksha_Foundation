import { FaCogs, FaMicroscope, FaPalette, FaHandsHelping, FaBullhorn, FaFileAlt } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function RIASECResult({ data }) {
  const router = useRouter();

  // Definitions for each category based on the PDF
  const definitions = {
    R: "Realistic people are often good at mechanical or athletic jobs. They excel in fields such as Agriculture, Health Assistant, Computers, Construction, Mechanic/Machinist, Engineering, Food and Hospitality.",
    I: "Investigative people like to watch, learn, analyze, and solve problems. Majors include Marine Biology, Engineering, Chemistry, Zoology, Medicine/Surgery, Consumer Economics, and Psychology.",
    A: "Artistic people like to work in unstructured situations where they can use their creativity. Fields include Communications, Cosmetology, Fine and Performing Arts, Photography, Radio and TV, Interior Design, and Architecture.",
    S: "Social people like to work with others rather than things. Suitable fields are Counseling, Nursing, Physical Therapy, Travel, Advertising, Public Relations, and Education.",
    E: "Enterprising people enjoy persuading others and performing. They are suited for Fashion Merchandising, Real Estate, Marketing/Sales, Law, Political Science, International Trade, and Banking/Finance.",
    C: "Conventional people are detail-oriented and organized, excelling in Accounting, Court Reporting, Insurance, Administration, Medical Records, Banking, and Data Processing.",
  };

  const icons = {
    R: <FaCogs className="text-green-600 text-3xl" />,
    I: <FaMicroscope className="text-blue-600 text-3xl" />,
    A: <FaPalette className="text-pink-600 text-3xl" />,
    S: <FaHandsHelping className="text-purple-600 text-3xl" />,
    E: <FaBullhorn className="text-yellow-600 text-3xl" />,
    C: <FaFileAlt className="text-red-600 text-3xl" />
  };

  // Extracting and sorting the scores
  const scoresArray = Object.entries(data.scores);
  scoresArray.sort(([, a], [, b]) => b - a); // Sort in descending order

  // Get the highest score value
  const highestScore = scoresArray[0][1];

  // Find all categories that share the top 3 scores (or more if tied)
  const topScores = scoresArray.filter(([, score]) => score >= highestScore);

  // Ensure at least 3 categories are displayed (or more if tied)
  let minimumTopCategories = 3;
  while (topScores.length < minimumTopCategories && scoresArray.length > topScores.length) {
    const nextTopScore = scoresArray[topScores.length][1];
    topScores.push(...scoresArray.filter(([, score]) => score === nextTopScore));
  }

  return (
    <div className="min-h-screen p-8  flex justify-center items-center">
      <div className="p-5 sm:p-10">
        {/* Header Section */}
        <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-900 tracking-wide">
          RIASEC Career Test Result
        </h2>
        <p className="text-lg text-gray-600 font-semibold text-center mb-6">
          Your RIASEC test results indicate your aptitude and interests in different career fields. Explore your top scoring areas and learn more about the suitable career paths that align with your strengths.
        </p>

        {/* Total Score Section */}
        {/* <p className="text-lg text-gray-600 text-center mb-8">
          Total Score: <span className="font-bold text-gray-800">{data.totalScore}</span>
        </p> */}

        {/* Top Scores Section */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4 text-center border-b pb-2">Top RIASEC Scores</h3>
          <ul className="flex flex-wrap gap-6 text-lg">
            {topScores.map(([category, score], index) => (
              <li key={index} className="flex justify-between items-center  gap-5 px-6 py-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
                <div className="flex items-center gap-4">
                  {icons[category]}
                  <span className="font-medium text-gray-700">{definitions[category].split(" ")[0]}</span>
                </div>
                <span className="font-bold text-gray-800">Score: {score}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Recommended Career Paths Section */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center border-b pb-2">Recommended Career Paths</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topScores.map(([category], index) => (
              <li key={index} className="flex items-center gap-4 p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-md">
                <div className="text-4xl">{icons[category]}</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800">{definitions[category].split(" ")[0]}</h4>
                  <p className="text-gray-700 mt-2">{definitions[category]}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Ready to explore these career paths in detail or need guidance on your next steps? Schedule a one-on-one counseling session for personalized career advice.
          </p>
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
