"use client"
// components/ExponentialGraph.js
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ExponentialGraph = ({ data }) => {
  // Extracting the number of questions and scores
  const questions = data.map(item => item.question);
  const scores = data.map(item => item.score);

  const chartData = {
    labels: questions, // x-axis
    datasets: [
      {
        label: 'Test Score',
        data: scores, // y-axis
        fill: false,
        backgroundColor: '#8ac240',
        borderColor: '#0e2f50',
        tension: 0.4, // to smooth the line
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Questions',
          color: '#0e2f50',
          font: {
            size: 16,
          },
        },
      },
      y: {
        title: {
          display: true,
          text: 'Score',
          color: '#0e2f50',
          font: {
            size: 16,
          },
        },
      },
    },
  };

  return (
    <div className="flex justify-center mt-8">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default ExponentialGraph;


 
// // components/ExponentialGraph.js
// import { Scatter } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

// const ExponentialGraph = ({ data }) => {
//   // Prepare scatter plot data
//   const scatterData = {
//     datasets: [
//       {
//         label: 'Test Results',
//         data: data.map(item => ({ x: item.question, y: item.score })),
//         backgroundColor: '#8ac240', // Green points
//         pointRadius: 6, // Adjust point size if needed
//         borderWidth: 0, // No border around the points
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       x: {
//         type: 'linear',
//         position: 'bottom',
//         title: {
//           display: true,
//           text: 'Questions',
//           color: '#0e2f50',
//           font: {
//             size: 16,
//           },
//         },
//         ticks: {
//           stepSize: 1, // Adjust step size to control the spacing
//         },
//         grid: {
//           color: '#000', // Black grid lines
//           lineWidth: 1,  // Thin lines
//         },
//         min: 0, // Questions cannot be negative
//         max: 10,  // Adjust to your data range
//       },
//       y: {
//         title: {
//           display: true,
//           text: 'Score',
//           color: '#0e2f50',
//           font: {
//             size: 16,
//           },
//         },
//         ticks: {
//           stepSize: 20, // Adjust step size for scores
//         },
//         grid: {
//           color: '#000', // Black grid lines
//           lineWidth: 1,
//         },
//         min: -100, // Allow negative scores
//         max: 100, // Adjust to your data range
//       },
//     },
//     plugins: {
//       legend: {
//         display: false, // Hide the legend as shown in the example
//       },
//     },
//     responsive: true,
//     maintainAspectRatio: false,
//   };

//   return (
//     <div className="flex justify-center mt-8">
//       <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
//         <div className="h-96">
//           <Scatter data={scatterData} options={options} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExponentialGraph;
