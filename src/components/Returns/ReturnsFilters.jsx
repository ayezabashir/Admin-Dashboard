const ReturnsFilters = ({ search, setSearch, status, setStatus }) => {
  return (
    <div className="flex flex-wrap gap-4">
      <input
        type="text"
        placeholder="Search customer..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-4 py-2 border rounded-xl outline-0 bg-white dark:bg-black border-gray-300 dark:border-gray-700"
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="px-4 py-2 border rounded-xl outline-0 bg-white dark:bg-black border-gray-300 dark:border-gray-700"
      >
        <option value="">All Status</option>
        <option value="pending">Pending</option>
        <option value="approved">Approved</option>
        <option value="rejected">Rejected</option>
      </select>
    </div>
  );
};

export default ReturnsFilters;
