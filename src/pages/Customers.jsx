import { useMemo, useState } from "react";
import CustomersHeader from "../components/Customers/CustomersHeader";
import customersData from "../data/customersData.json";
import CustomersFilters from "../components/Customers/CustomersFilters";
import CustomersTable from "../components/Customers/CustomersTable";

const Customers = () => {
  const [customers, setCustomers] = useState(customersData.customers);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const filteredCustomers = useMemo(() => {
    return customers.filter((c) => {
      const matchName = c.name.toLowerCase().includes(searchQuery.toLowerCase()) 
      const matchStatus = statusFilter === "all" || c.status === statusFilter;
      const matchType = typeFilter === "all" || c.type === typeFilter;
      return matchName && matchStatus && matchType;
    });
  }, [customers, searchQuery, statusFilter, typeFilter]);

  return (
    <div className="text-gray-900 dark:text-gray-200 space-y-6">
      <CustomersHeader setCustomers={setCustomers} />
      <CustomersFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
      />
      <CustomersTable customers={filteredCustomers} setCustomers={setCustomers} />
    </div>
  );
};

export default Customers;
