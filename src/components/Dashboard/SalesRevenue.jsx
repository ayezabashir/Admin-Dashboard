import Chart from "react-apexcharts";
import { FaChartSimple, FaSalesforce } from "react-icons/fa6";
const SalesRevenue = ({ data }) => {
  const series = [
    {
      name: "One-Time",
      data: data.map((item) => item.oneTime),
    },
    {
      name: "Recurring",
      data: data.map((item) => item.recurring),
    },
  ];
  const options = {
    chart: {
      type: "bar",
      toolbar: { show: true },
    },
    plotOptions: {
      bar: {
        borderRadius: 0,
        columnWidth: "50%",
      },
    },
    xaxis: {
      categories: data.map((item) => item.month),
    },
    legend: {
      position: "top",
    },
    dataLabels: {
      enabled: false,
    },
  };

  return (
    <div className="bg-white dark:bg-black p-6 rounded-xl border border-gray-200 dark:border-gray-800">
      <div className="flex gap-2 items-center ">
        <FaChartSimple className="text-gray-900 dark:text-gray-200" />
        <h3 className="font-semibold text-gray-900 dark:text-gray-200">
          Sales Revenue
        </h3>
      </div>
      <Chart options={options} series={series} type="bar" height={300} />
    </div>
  );
};

export default SalesRevenue;
