export default function RIASECResult({ data }) {
  return (
    <div className="result-content">
      <h2 className="text-2xl font-bold mb-4">RIASEC Career Test Result</h2>
      <p>Total Score: {data.totalScore}</p>
      <div>
        <h3 className="text-xl font-semibold">RIASEC Scores</h3>
        <ul>
          {Object.entries(data.scores).map(([category, score], index) => (
            <li key={index}>{category}: {score}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
