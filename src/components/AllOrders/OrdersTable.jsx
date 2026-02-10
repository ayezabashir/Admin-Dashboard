import { useState } from "react";
import Pagination from "../Pagination";

const orderStatusStyles = {
  pending: "bg-yellow-100 text-yellow-700",
  shipped: "bg-blue-100 text-blue-700",
  delivered: "bg-green-100 text-green-700",
  cancelled: "bg-red-100 text-red-700",
};

const OrdersTable = ({ orders }) => {
  const [currPage, setCurrPage] = useState(1);
  const ordersPerPage = 4;
  const totalPages = Math.ceil(orders.length / ordersPerPage);
  const indexOfLastOrder = currPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);
  const handlePrevPage = () => {
    if (currPage > 1) {
      setCurrPage((prev) => prev - 1);
    }
  };
  const handleNextPage = () => {
    if (currPage < totalPages) {
      setCurrPage((prev) => prev + 1);
    }
  };
  return (
    <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-100 dark:bg-zinc-900">
          <tr>
            <th className="text-left p-4">Order ID</th>
            <th className="text-left p-4">Customer</th>
            <th className="text-left p-4">Date</th>
            <th className="text-left p-4">Amount</th>
            <th className="text-left p-4">Payment</th>
            <th className="text-left p-4">Status</th>
          </tr>
        </thead>

        <tbody>
          {currOrders.map((order) => (
            <tr
              key={order.id}
              className="border-t border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-zinc-900 transition"
            >
              <td className="p-4 font-medium">{order.id}</td>
              <td className="p-4">{order.customer}</td>
              <td className="p-4">{order.date}</td>
              <td className="p-4">${order.amount}</td>
              <td className="p-4">{order.payment}</td>
              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${orderStatusStyles[order.status]}`}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        handlePrevPage={handlePrevPage}
        currPage={currPage}
        handleNextPage={handleNextPage}
      />
    </div>
  );
};

export default OrdersTable;
