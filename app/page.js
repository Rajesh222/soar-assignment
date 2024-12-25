import WeeklyActivityChart from "./components/WeeklyActivityChart";
import ExpenseChart from "./components/ExpenseChart";
import QuickTransfer from "./components/QuickTransfer";
import BalanceHistoryChart from "./components/BalanceHistoryChart";
import MyCards from "./components/MyCards";
import RecentTransactions from "./components/RecentTransactions";

export default function Dashboard() {
  return (
    <>
      <div className="sm:ml-64 ml-2 grid grid-cols-1 md:grid-cols-3 gap-6 pl-6 pr-6 pt-6">
        <div className="col-span-2">
          <MyCards />
        </div>
        <div className="col-span-1">
          <RecentTransactions />
        </div>
      </div>

      <div className="sm:ml-64 ml-2 grid grid-cols-1 md:grid-cols-3 gap-6 pl-6 pr-6 pb-6">
        <div className="col-span-2">
          <WeeklyActivityChart />
        </div>
        <div className="col-span-1">
          <ExpenseChart />
        </div>
      </div>

      <div className="sm:ml-64 ml-2 grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        <div className="col-span-1">
          <QuickTransfer />
        </div>
        <div className="col-span-2">
          <BalanceHistoryChart />
        </div>
      </div>
    </>
  );
}
