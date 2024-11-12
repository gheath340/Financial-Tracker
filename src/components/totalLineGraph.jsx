import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const TotalLineGraph = () => {
  // Sample data for the line graph
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Total Balance',
        data: [10000, 12000, 11500, 13000, 14000, 13500, 15000],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192)',
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 16, // Larger font size for "Total Balance" label
          },
          color: '#000', // Black color for legend text
        },
      },
      title: {
        display: true,
        text: 'Total Balance Over Time',
        font: {
          size: 20, // Larger font size for title
          weight: 'bold',
        },
        color: '#000', // Black color for title text
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#666',
          font: {
            size: 12,
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: '#666',
          font: {
            size: 12,
          },
          callback: function (value) {
            return `$${value}`;
          },
        },
        grid: {
          color: 'rgba(200, 200, 200, 0.3)',
          lineWidth: 1,
          borderDash: [5, 5],
        },
      },
    },
  };

  return (
    <nav className="bg-white shadow-md border border-gray-200 h-1/2 p-4 rounded-lg w-full mx-auto max-w-5xl">
      <div className="container mx-auto h-full">
        <Line data={data} options={{ ...options, maintainAspectRatio: false }} />
      </div>
    </nav>

  );
};