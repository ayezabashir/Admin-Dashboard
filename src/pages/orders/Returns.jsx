import { useMemo, useState } from "react";
import returnsData from "../../data/returns.json";
import ReturnsFilters from "../../components/Returns/ReturnsFilters";
import ReturnsTable from "../../components/Returns/ReturnsTable";

const Returns = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const filteredReturns = useMemo(() => {
    return returnsData.filter((item) => {
      const matchSearch = item.customer
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchStatus = status === "" || item.status === status;
      return matchSearch && matchStatus;
    });
  }, [search, status]);

  return (
    <div className="space-y-6 text-gray-900 dark:text-gray-200">
      <ReturnsFilters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
      />
      <ReturnsTable returns={filteredReturns} />
    </div>
  );
};

export default Returns;
