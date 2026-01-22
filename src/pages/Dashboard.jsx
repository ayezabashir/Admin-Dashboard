import RecentActivity from "../components/Dashboard/RecentActivity";
import SalesRevenue from "../components/Dashboard/SalesRevenue";
import SummaryCard from "../components/Dashboard/SummaryCard";
import TopCategories from "../components/Dashboard/TopCategories";
import TopProducts from "../components/Dashboard/TopProducts";
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
          progress="+2.5% increase"
          icon={RiShoppingBag3Line}
        />

        <SummaryCard
          title="Total Sales"
          value={summary.totalSales}
          progress="+5.8% increase"
          icon={RiFileList3Line}
        />

        <SummaryCard
          title="Total Income"
          value={`$${summary.totalIncome}`}
          progress="-3.3% decrease"
          icon={RiMoneyDollarCircleLine}
        />

        <SummaryCard
          title="Total Expenses"
          value={`$${summary.totalExpenses}`}
          progress="+2.5% increase"
          icon={RiWallet3Line}
        />
      </div>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SalesRevenue data={salesRevenue} />
        </div>
        <TopCategories data={topCategories} />
      </div>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2">
          <RecentActivity data={recentActivity} />
        </div>
        <TopProducts data={topProducts} />
      </div>
    </div>
  );
};

export default Dashboard;
