import Chart from "react-apexcharts";

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
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        columnWidth: "45%",
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
      <h3 className="font-semibold mb-4">Sales Revenue</h3>
      <Chart options={options} series={series} type="bar" height={300} />
    </div>
  );
};

export default SalesRevenue;
