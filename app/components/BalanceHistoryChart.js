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

const BalanceHistoryChart = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Balance",
        data: [100, 200, 400, 800, 300, 500, 650, 700, 900, 1000, 1200, 800],
        borderColor: "#1814F3",
        backgroundColor: "#2D60FF40",
        fill: true,
        tension: 0.4,
      },
    ],
  };

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
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default BalanceHistoryChart;
