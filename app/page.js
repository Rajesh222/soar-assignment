"use client";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./slices/dataSlice";
import WeeklyActivityChart from "./components/WeeklyActivityChart";
import ExpenseChart from "./components/ExpenseChart";
import QuickTransfer from "./components/QuickTransfer";
import BalanceHistoryChart from "./components/BalanceHistoryChart";
import MyCards from "./components/MyCards";
import RecentTransactions from "./components/RecentTransactions";
import { useEffect } from "react";
import Loader from "./components/Loader";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      {data ? (
        <div>
          <div className="sm:ml-64 grid grid-cols-1 lg:grid-cols-3 gap-6 pl-6 pr-6 pt-6">
            <div className="col-span-1 lg:col-span-2">
              <MyCards cards={data.cards} />
            </div>
            <div className="col-span-1 lg:col-span-1">
              <RecentTransactions transactions={data.transactions} />
            </div>
          </div>

          <div className="sm:ml-64 grid grid-cols-1 lg:grid-cols-3 gap-6 pl-6 pr-6 pt-6">
            <div className="col-span-1 lg:col-span-2">
              <WeeklyActivityChart weeklyActivity={data.weeklyActivity} />
            </div>
            <div className="col-span-1">
              <ExpenseChart expense={data.expense} />
            </div>
          </div>

          <div className="sm:ml-64 grid grid-cols-1 lg:grid-cols-12 gap-6 p-6">
            <div className="lg:col-span-5 col-span-12">
              <QuickTransfer quickTransferData={data.quickTransferData} />
            </div>
            <div className="lg:col-span-7 col-span-12">
              <BalanceHistoryChart balanceHistory={data.balanceHistory} />
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
