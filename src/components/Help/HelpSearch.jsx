const HelpSearch = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search help articles..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full px-4 py-2 border rounded-xl bg-white dark:bg-black border-gray-300 dark:border-gray-700"
    />
  );
};

export default HelpSearch;
