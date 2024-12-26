"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Filler);

const BalanceHistoryChart = ({ balanceHistory }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false,
        },
        ticks: {
          stepSize: 200,
        },
      },
    },
  };
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Balance History</h2>
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <div className="h-[300px]">
          <Line data={balanceHistory} options={options} />
        </div>
      </div>
    </div>
  );
};

export default BalanceHistoryChart;
