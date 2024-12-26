"use client";
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseChart = ({ expense }) => {
  const options = {
    plugins: {
      legend: {
        position: "right",
        labels: {
          color: "#333",
          font: {
            size: 14,
            weight: "bold",
          },
          boxWidth: 20,
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Expense Statistics
      </h2>
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <div className="h-[300px]">
          <Pie data={expense} options={options} />
        </div>
      </div>
    </div>
  );
};

export default ExpenseChart;
