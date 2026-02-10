import { useMemo, useState } from "react";
import OrdersFilters from "../../components/AllOrders/OrdersFilter";
import OrdersTable from "../../components/AllOrders/OrdersTable";
import orders from "../../data/orders.json";
import PageHeader from "../../components/PageHeader";

const AllOrders = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const matchSearch = order.customer
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchStatus =
        status === "" ||
        order.status.toLowerCase().trim() === status.toLowerCase().trim();


      return matchSearch && matchStatus;
    });
  }, [search, status, orders]);

  return (
    <div className="space-y-6 text-gray-900 dark:text-gray-200">
      <PageHeader
        headerTitle="All Orders"
        headerSubtitle="View and manage customer orders"
      />

      <OrdersFilters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
      />

      <OrdersTable orders={filteredOrders} />
    </div>
  );
};

export default AllOrders;
