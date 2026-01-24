import { useMemo, useState } from "react";
import OrdersHeader from "./components/OrdersHeader";
import OrdersFilters from "./components/OrdersFilters";
 const orders = [
   {
     id: "#ORD-1021",
     customer: "Ayesha Khan",
     date: "2025-01-12",
     amount: 1450,
     payment: "Paid",
     status: "delivered",
   },
   {
     id: "#ORD-1022",
     customer: "Ali Raza",
     date: "2025-01-14",
     amount: 320,
     payment: "Pending",
     status: "pending",
   },
   {
     id: "#ORD-1023",
     customer: "Sara Ahmed",
     date: "2025-01-15",
     amount: 75,
     payment: "Paid",
     status: "shipped",
   },
   {
     id: "#ORD-1024",
     customer: "Usman Malik",
     date: "2025-01-16",
     amount: 2100,
     payment: "Refunded",
     status: "cancelled",
   },
 ];

const AllOrders = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const matchSearch =
        order.id.toLowerCase().includes(search.toLowerCase()) ||
        order.customer.toLowerCase().includes(search.toLowerCase());

      const matchStatus = status === "" || order.status === status;

      return matchSearch && matchStatus;
    });
  }, [search, status, orders]);

  return (
    <div className="space-y-6 text-gray-900 dark:text-gray-200">
      <OrdersHeader />

      <OrdersFilters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
      />

    </div>
  );
};

export default AllOrders;
