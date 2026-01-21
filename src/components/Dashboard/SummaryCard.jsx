// eslint-disable-next-line no-unused-vars
const SummaryCard = ({ title, value, icon: Icon }) => {
  return (
    <div className="bg-white dark:bg-black rounded-xl p-6 border border-gray-200 dark:border-gray-800 flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h2 className="text-2xl font-bold mt-2">{value}</h2>
      </div>
      <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-900">
        <Icon className="text-2xl text-gray-700 dark:text-gray-300" />
      </div>
    </div>
  );
};

export default SummaryCard;
