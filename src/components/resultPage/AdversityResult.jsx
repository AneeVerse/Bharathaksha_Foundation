import React from 'react';
import { useRouter } from 'next/navigation';
import { FaChartLine, FaStar, FaRegQuestionCircle } from 'react-icons/fa';

const AdversityResult = ({ data }) => {
  const router = useRouter();
  const score = data.totalScore;

  const getAqRating = (score) => {
    if (score >= 178) return 'High AQ';
    if (score >= 161) return 'Moderately High AQ';
    if (score >= 135) return 'Moderate AQ';
    return 'Low AQ';
  };

  const aqRating = getAqRating(score);

  const getAqDescription = (score) => {
    if (score >= 178) {
      return (
        <p>
          <b>High AQ (178-200):</b> If you are in this range, you are among the elite, who routinely face and overcome adversities of all magnitudes. Setbacks are likely to be short-lived and contained. You probably demonstrate strong accountability for dealing with difficult situations and are an agile problem solver. People are drawn to your natural resilience and optimism. You can fine-tune your AQ and use your abilities to coach and guide others.
        </p>
      );
    }
    if (score >= 161) {
      return (
        <p>
          <b>Moderately High AQ (161-177):</b> If you are in this range, you are already more effective than most people at dealing with difficulties and setbacks. You are likely more resilient and persevere when faced with most challenges. There may be moments when adversity piles up and becomes more of a burden than necessary. By strengthening your AQ, you can become even more agile and able to take greater challenges.
        </p>
      );
    }
    if (score >= 135) {
      return (
        <p>
          <b>Moderate AQ (135-160):</b> The majority of people fall in this range. If you have a moderate AQ, this suggests that you probably fare well with many difficulties. However, when adversities mount and you become fatigued, they may wear you down unnecessarily. You may at times become demoralized or overwhelmed. As you strengthen your AQ, you will discover newfound strength and fortitude in dealing with all sorts of challenges.
        </p>
      );
    }
    if (score >= 118) {
      return (
        <p>
          <b>Moderately Low AQ (118-134):</b> If you score in this range, you may handle some setbacks relatively well. However, as your world becomes increasingly complex, chaotic, and challenging, you may be suffering unnecessarily. You can reduce the toll adversity takes and strengthen your resilience by raising your AQ.
        </p>
      );
    }
    return (
      <p>
        <b>Low AQ (117 and below):</b> If you have a low AQ, do not despair! It simply explains why life can seem so overwhelming and difficult at times. It also provides you with a firm starting point. As your AQ increases, you will experience the most dramatic results in how you view, respond to, and experience challenges in your work and life. Improving your AQ may become a transformational experience as you discover a large pool of untapped potential and enjoyment.
      </p>
    );
  };

  const aqDescription = getAqDescription(score);

  return (
    <div className="flex items-center justify-center py-12 px-3 sm:px-6">
      <div className="w-full bg-white px-6 py-5 sm:px-10 ">
        <h1 className='text-4xl font-semibold text-center mb-10'>Adversity Test Result</h1>
        
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-8">
          <div className="p-6 w-full md:w-1/2 bg-green-100 border-l-4 border-green-500 rounded-lg shadow-sm flex items-center">
            <FaChartLine className="text-green-500 text-4xl mr-4" />
            <div>
              <h3 className="text-xl font-bold text-green-700">AQ Score</h3>
              <p className="text-4xl font-bold text-gray-700">{score}</p>
            </div>
          </div>
          <div className="p-6 w-full md:w-1/2 bg-blue-100 border-l-4 border-blue-500 rounded-lg shadow-sm flex items-center">
            <FaStar className="text-blue-500 text-4xl mr-4" />
            <div>
              <h3 className="text-xl font-bold text-blue-700">AQ Rating</h3>
              <p className="text-4xl font-bold text-gray-700">{aqRating}</p>
            </div>
          </div>
        </div>

        {/* Description based on AQ rating */}
        <div className="mt-6 bg-white border-t-4 border-gray-300  p-3 sm:p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Description</h2>
          <div className="text-gray-700 text-lg leading-relaxed">{aqDescription}</div>
        </div>

        <p className="mt-8 text-gray-600 text-center text-lg leading-relaxed">
          Your AQ score indicates <span className="font-bold">{aqRating}</span>. This means you are{" "}
          {score > 160 ? (
            <span className="text-green-600 font-semibold">resilient and able to overcome adversities</span>
          ) : (
            <span className="text-red-600 font-semibold">in need of improving your resilience</span>
          )}
          .
        </p>

        {/* Call to action button for counseling */}
        <div className="text-center mt-10">
          <div className="flex items-center justify-center mb-4">
            <FaRegQuestionCircle className="text-gray-700  text-3xl mr-2" />
            <p className="text-gray-700">For more detailed or one-on-one counseling, kindly contact us.</p>
          </div>
          <button
            onClick={() => router.push('/contact')} // Navigate to contact page
            className="bg-green-500 text-white font-bold py-3 px-8 rounded-full hover:bg-green-600 transition-colors shadow-lg"
          >
             Book detailed Counseling Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdversityResult;
