export default function SocialStyleResult({ data }) {
  return (
    <div className="result-content">
      <h2 className="text-2xl font-bold mb-4">Social Style Test Result</h2>
      <div>
        <h3 className="text-xl font-semibold">Coordinates</h3>
        <p>X Coordinate: {data.coordinates.x}</p>
        <p>Y Coordinate: {data.coordinates.y}</p>
      </div>
    </div>
  );
}
