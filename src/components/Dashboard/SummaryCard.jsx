// eslint-disable-next-line no-unused-vars
const SummaryCard = ({ title, value, progress, icon: Icon }) => {
  return (
    <div className="bg-white dark:bg-black rounded-xl p-6 border border-gray-200 dark:border-gray-800 flex items-start justify-between">
      <div className="flex flex-col gap-1">
        <p className="text-sm text-gray-500 dark:text-gray-200">{title}</p>
        <h2 className="text-2xl font-bold mt-2">{value}</h2>
        <p className="text-xs ">{progress}</p>
      </div>
      <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-800">
        <Icon className="text-2xl text-gray-700 dark:text-gray-300" />
      </div>
    </div>
  );
};

export default SummaryCard;
