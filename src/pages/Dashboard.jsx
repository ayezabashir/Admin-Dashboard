import SummaryCard from "../components/Dashboard/SummaryCard";
import dashboardata from "../data/dashboardData.json";
import {
  RiShoppingBag3Line,
  RiFileList3Line,
  RiMoneyDollarCircleLine,
  RiWallet3Line,
} from "react-icons/ri";
const Dashboard = () => {
  const { summary, salesRevenue, topCategories, recentActivity, topProducts } =
    dashboardata;
  return (
    <div className="text-gray-900 dark:text-gray-200">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <SummaryCard
          title="Total Products"
          value={summary.totalProducts}
          icon={RiShoppingBag3Line}
        />

        <SummaryCard
          title="Total Sales"
          value={summary.totalSales}
          icon={RiFileList3Line}
        />

        <SummaryCard
          title="Total Income"
          value={`$${summary.totalIncome}`}
          icon={RiMoneyDollarCircleLine}
        />

        <SummaryCard
          title="Total Expenses"
          value={`$${summary.totalExpenses}`}
          icon={RiWallet3Line}
        />
      </div>
    </div>
  );
};

export default Dashboard;
