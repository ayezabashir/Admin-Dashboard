const OrdersFilters = ({ search, setSearch, status, setStatus }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 bg-gray-50 dark:bg-zinc-900 p-4 rounded-xl">
      <input
        type="text"
        placeholder="Search order ID or customer"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-1/2 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black"
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="w-full md:w-1/4 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black"
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
