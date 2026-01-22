import Chart from "react-apexcharts";
import { BiTrophy } from "react-icons/bi";
import { GiChampions } from "react-icons/gi";

const TopCategories = ({ data }) => {
  const series = data.map((item) => item.percentage);
  const labels = data.map((item) => item.category);

  const options = {
    labels,
    chart: {
      type: "donut",
      toolbar: {show: true}
    },
    legend: {
      position: "bottom",
    },
    dataLabels: {
      enabled: false,
    },
  };

  return (
    <div className="bg-white dark:bg-black p-6 rounded-xl border border-gray-200 dark:border-gray-800">
      <div className="flex gap-2 items-center ">
        <BiTrophy className="text-gray-900 dark:text-gray-200" />
        <h3 className="font-semibold text-gray-900 dark:text-gray-200">
          Top Categories
        </h3>
      </div>
      <Chart options={options} series={series} type="donut" height={300} />
    </div>
  );
};

export default TopCategories;
