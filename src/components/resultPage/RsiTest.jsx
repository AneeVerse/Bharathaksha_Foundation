export default function RsiTest({ data }) {
  return (
    <div className="result-content">
      <h2 className="text-2xl font-bold mb-4">RSI Test Result</h2>
      <p>Total Score: {data.totalScore}</p>
      <div>
        <h3 className="text-xl font-semibold">Category Counts</h3>
        <ul>
          {Object.entries(data.counts).map(([category, score], index) => (
            <li key={index}>{category}: {score}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
