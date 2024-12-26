"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const WeeklyActivityChart = ({ weeklyActivity }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          boxWidth: 12,
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          beginAtZero: true,
          stepSize: 100,
        },
        grid: {
          color: "#e5e7eb", // Tailwind's gray-200
        },
      },
    },
  };
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Weekly Activity
      </h2>
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <div className="h-[300px]">
          <Bar data={weeklyActivity} options={options} />;
        </div>
      </div>
    </div>
  );
};

export default WeeklyActivityChart;
