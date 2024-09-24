export default function PsiTest({ data }) {
  return (
    <div className="result-content">
      <h2 className="text-2xl font-bold mb-4">Psi Personality Test Result</h2>
      <p>Final Personality Type: {data.finalType}</p>
      <div>
        <h3 className="text-xl font-semibold">Category Scores</h3>
        <ul>
          {Object.entries(data.categoryScores).map(([category, score], index) => (
            <li key={index}>{category}: {score}</li>
          ))}
        </ul>
      </div>
      <div>
        {/* <h3 className="text-xl font-semibold">Total Scores</h3>
        <ul>
          {data.totalScores.map((item, index) => (
            <li key={index}>{Object.keys(item)[0]}: {Object.values(item)[0]}</li>
          ))}
        </ul> */}
      </div>
    </div>
  );
}
