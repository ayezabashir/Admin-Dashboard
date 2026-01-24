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
        className="border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 text-sm bg-transparent"
      >
        <option value="">All Status</option>
        <option value="pending">Pending</option>
        <option value="shipped">Shipped</option>
        <option value="delivered">Delivered</option>
        <option value="cancelled">Cancelled</option>
      </select>
    </div>
  );
};

export default OrdersFilters;
