 const AdversityResult = ({ data }) => {
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
      return <p><b>High AQ (178-200):</b>If you are in this range, you are among the elite, who routinely face and overcome adversities of all magnitudes. Setbacks are likely to be short-lived and contained. You probably demonstrate strong accountability for dealing with difficult situations and are an agile problem solver. People are drawn to your natural resilience and optimism. You can fine-tune your AQ and use your abilities to coach and guide others.</p>;
    }
    if (score >= 161) {
      return <p><b>Moderately High AQ (161-177):</b>If you are in this range, you are already more effective than most people at dealing with difficulties and setbacks. You are likely more resilient and persevere when faced with most challenges. There may be moments when adversity piles up and becomes more of a burden than necessary. By strengthening your AQ, you can become even more agile and able to take greater challenges.</p>;
    }
    if (score >= 135) {
      return <p><b>Moderate AQ (135-160):</b>The majority of people fall in this range. If you have a moderate AQ, this suggests that you probably fare well with many difficulties. However, when adversities mount and you become fatigued, they may wear you down unnecessarily. You may at times become demoralized or overwhelmed. As you strengthen your AQ, you will discover newfound strength and fortitude in dealing with all sorts of challenges.</p>;
    }
    if (score >= 118) {
      return <p><b>Moderately Low AQ (118-134):</b>If you score in this range, you may handle some setbacks relatively well. However, as your world becomes increasingly complex, chaotic, and challenging, you may be suffering unnecessarily. You can reduce the toll adversity takes and strengthen your resilience by raising your AQ.</p>;
    }
    return <p><b>Low AQ (117 and below):</b>If you have a low AQ, do not despair! It simply explains why life can seem so overwhelming and difficult at times. It also provides you with a firm starting point. As your AQ increases, you will experience the most dramatic results in how you view, respond to, and experience challenges in your work and life. Improving your AQ may become a transformational experience as you discover a large pool of untapped potential and enjoyment.</p>;
  };

  
  const aqDescription = getAqDescription(score);
  return (
    <div>
      <div className="flex justify-around mb-6 gap-5">
        <div className="p-6 flex-1 bg-green-200 rounded-lg">
          <h3 className="text-lg font-semibold">AQ Score</h3>
          <p className="text-3xl font-bold">{score}</p>
        </div>
        <div className="p-6 flex-1 bg-blue-200 rounded-lg">
          <h3 className="text-lg font-semibold">AQ Rating</h3>
          <p className="text-3xl font-bold">{aqRating}</p>
        </div>
      </div>
          {/* Description based on AQ rating */}
    <div className="mt-6 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Description:</h2>
      <div className="text-gray-700 leading-relaxed">{aqDescription}</div>
    </div>
      <p className="text-gray-700 leading-relaxed">
        Your AQ score indicates {aqRating}. This means you are {score > 160 ? "resilient" : "need to improve"}...
      </p>

       {/* Call to action button for counseling */}
    <div className="text-center mt-10">
      <p className="text-gray-700 mb-4">For more detailed or one-on-one counselling, kindly contact us.</p>
      <button
        onClick={() => router.push('/contact')} // Navigate to contact page
        className="bg-[#8ac240] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#6b9b2c] transition-colors shadow-lg"
      >
        Contact Us for Counselling
      </button>
    </div>
    </div>

  );
};


export default AdversityResult

