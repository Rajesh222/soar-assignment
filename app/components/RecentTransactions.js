import React from "react";

const RecentTransactions = ({ transactions }) => {
  return (
    <div>
      {/* Header */}
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Recent Transaction
      </h2>

      {/* Transaction List */}
      <div className="h-[240px] space-y-4 p-6 bg-white rounded-lg shadow-md sm:w-96 overflow-y-auto whitespace-nowrap">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center gap-4">
            {/* Icon */}
            {transaction.icon}

            {/* Details */}
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-800">
                {transaction.title}
              </h3>
              <p className="text-xs text-gray-500">{transaction.date}</p>
            </div>

            {/* Amount */}
            <p className={`text-sm font-semibold ${transaction.amountClass}`}>
              {transaction.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
