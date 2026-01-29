const orders = [
  { id: "#ORD-1024", customer: "Usman Malik", amount: 2100 },
  { id: "#ORD-1023", customer: "Sara Ahmed", amount: 75 },
  { id: "#ORD-1022", customer: "Ali Raza", amount: 320 },
];
const OrdersModalBox = () => {
  return (
    <div className="w-72 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl shadow-lg p-4 space-y-3">
      <h3 className="font-semibold text-sm text-black dark:text-white ">
        Recent Orders
      </h3>
      {orders.map((order) => (
        <div
          key={order.id}
          className="flex justify-between items-center text-sm border-b last:border-none pb-2 dark:border-gray-800"
        >
          <div>
            <p className="text-black dark:text-white font-medium">{order.id}</p>
            <p className="text-black dark:text-white text-xs ">
              {order.customer}
            </p>
          </div>
          <p className="font-semibold">${order.amount}</p>
        </div>
      ))}
      <button className="w-full mt-2 text-sm font-medium py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black">
        View All Orders
      </button>
    </div>
  );
};

export default OrdersModalBox;
