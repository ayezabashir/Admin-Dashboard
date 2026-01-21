import Chart from "react-apexcharts";

const TopCategories = ({ data }) => {
  const series = data.map((item) => item.percentage);
  const labels = data.map((item) => item.category);

  const options = {
    labels,
    legend: {
      position: "bottom",
    },
    dataLabels: {
      enabled: false,
    },
  };

  return (
    <div className="bg-white dark:bg-black p-6 rounded-xl border border-gray-200 dark:border-gray-800">
      <h3 className="font-semibold mb-4">Top Categories</h3>
      <Chart options={options} series={series} type="donut" height={300} />
    </div>
  );
};

export default TopCategories;
