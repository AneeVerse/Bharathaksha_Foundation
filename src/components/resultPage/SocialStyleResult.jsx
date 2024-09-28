import React from 'react';

export default function SocialStyleResult({ data }) {
  const { x, y } = {x: -18, y:0}; // Example coordinates

  // Set graph dimensions and scale
  const width = 290; // width of the SVG
  const height = 290; // height of the SVG
  const scale = 5; // Scale factor to adjust points

  // Calculate the position of the point on the graph
  const xPosition = width / 2 + x * scale; // Center the X axis
  const yPosition = height / 2 - y * scale; // Invert the Y axis

  // Create an array of lines for the grid
  const gridLines = [];
  for (let i = -width / 2; i <= width / 2; i += scale) {
    gridLines.push(
      <line
        key={`hline-${i}`}
        x1={i + width / 2}
        y1="0"
        x2={i + width / 2}
        y2={height}
        stroke="#e2e8f0" // Light gray for grid lines
        strokeWidth="0.5"
      />
    );
    gridLines.push(
      <line
        key={`vline-${i}`}
        x1="0"
        y1={i + height / 2}
        x2={width}
        y2={i + height / 2}
        stroke="#e2e8f0" // Light gray for grid lines
        strokeWidth="0.5"
      />
    );
  }

  return (
    <div className="p-4 sm:8">
      <h2 className="text-4xl font-bold mb-7 text-center text-gray-900">Social Style Test Result</h2>
      {/* <div className="mb-4">
        <h3 className="text-xl font-semibold">Coordinates</h3>
        <p className="text-gray-700">X Coordinate: {x}</p>
        <p className="text-gray-700">Y Coordinate: {y}</p>
      </div> */}

      {/* SVG for the graph */}
      <svg width={width} height={height} className="mx-auto shadow-sm border">
        {/* Draw grid lines */}
        {gridLines}

        {/* X and Y axes */}
        <line x1="0" y1={height / 2} x2={width} y2={height / 2} stroke="black" strokeWidth="1" />
        <line x1={width / 2} y1="0" x2={width / 2} y2={height} stroke="black" strokeWidth="1" />

        {/* Point representing the coordinates */}
        <circle cx={xPosition} cy={yPosition} r="4" fill="red" />

        {/* Label for the point */}
        {/* <text x={xPosition + 10} y={yPosition - 10} fill="red" fontSize="12">
          ({x}, {y})
        </text> */}

         {/* Labels for graph quadrants */}
         <text x={30} y={40} fill="#374151" fontSize="14" fontWeight="bold">Analytical</text>
        <text x={width - 70} y={40} fill="#374151" fontSize="14" fontWeight="bold">Driver</text>
        <text x={30} y={height - 30} fill="#374151" fontSize="14" fontWeight="bold">Amiable</text>
        <text x={width - 90} y={height - 30} fill="#374151" fontSize="14" fontWeight="bold">Expressive</text>
      </svg>

      {/* Counseling Section */}
      <div className="mt-6 text-center">
        <p className="text-gray-700 max-w-4xl mx-auto mb-4">
          Understanding your social style can enhance your interactions. If you seek personalized guidance, our counseling sessions can provide valuable insights tailored to your needs.
        </p>
        <button
          onClick={() => alert("Redirecting to counseling page...")} // Placeholder for redirect action
          className="bg-green-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-green-700 transition-colors shadow-lg"
        >
          Book a Counseling Session
        </button>
      </div>
    </div>
  );
}
