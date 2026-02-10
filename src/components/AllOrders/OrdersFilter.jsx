import { BiSearch } from "react-icons/bi";

const OrdersFilters = ({ search, setSearch, status, setStatus }) => {
  return (
    <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-4 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
      <div className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2">
        <BiSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search customer..."
          value={search}
          className="w-full outline-none bg-transparent text-sm"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="px-4 py-2 border rounded-xl outline-0 bg-white dark:bg-black border-gray-300 dark:border-gray-700"
      >
        <option value="">All Status</option>
        <option value="pending">pending</option>
        <option value="shipped">shipped</option>
        <option value="delivered">delivered</option>
        <option value="cancelled">cancelled</option>
      </select>
    </div>
  );
};

export default OrdersFilters;
