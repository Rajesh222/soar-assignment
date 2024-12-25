"use client";
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseChart = () => {
  const data = {
    labels: ["Entertainment", "Bill Expense", "Investment", "Others"],
    datasets: [
      {
        label: "Expense Distribution",
        data: [30, 15, 20, 35],
        backgroundColor: [
          "#2C3E50", // Entertainment
          "#E67E22", // Bill Expense
          "#357EDD", // Investment
          "#1C1C1C", // Others
        ],
        borderWidth: 2,
        borderColor: "#fff",
        hoverOffset: 6,
        borderJoinStyle: "square",
        rotation: -90,
        circumference: 360,
        shadowColor: "rgba(0, 0, 0, 0.2)",
        shadowBlur: 10,
      },
    ],
  };

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
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Expense Statistics</h2>
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <div className="h-[300px]">
          <Pie data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default ExpenseChart;
