import { BiSearch } from "react-icons/bi";

const CustomersFilters = ({
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
  typeFilter,
  setTypeFilter,
}) => {
  return (
    <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-4 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
      <div className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2">
        <BiSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search customers..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full outline-none bg-transparent text-sm"
        />
      </div>
      <div className="flex items-center gap-5 ">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 text-sm bg-transparent"
        >
          <option className="bg-white dark:bg-black" value="all">All Statuses</option>
          <option className="bg-white dark:bg-black" value="active">Active</option>
          <option className="bg-white dark:bg-black" value="inactive">Inactive</option>
          <option className="bg-white dark:bg-black" value="blocked">Blocked</option>
        </select>
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 text-sm bg-transparent"
        >
          <option className="bg-white dark:bg-black" value="all">All Types</option>
          <option className="bg-white dark:bg-black" value="new">New</option>
          <option className="bg-white dark:bg-black" value="vip">VIP</option>
        </select>
      </div>
    </div>
  );
};

export default CustomersFilters;
