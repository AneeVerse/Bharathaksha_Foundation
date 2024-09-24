export default function LearningStyleResult({ data }) {
  return (
    <div className="result-content">
      <h2 className="text-2xl font-bold mb-4">VARK Learning Style Result</h2>
      <p>Total Score: {data.totalScore}</p>
      <div>
        <h3 className="text-xl font-semibold">VARK Counts</h3>
        <ul>
          {Object.entries(data.varkCounts).map(([category, score], index) => (
            <li key={index}>{category}: {score}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
