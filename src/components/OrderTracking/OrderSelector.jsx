const OrderSelector = ({ orders, selectedOrderId, setSelectedOrderId }) => {
  const selectedOrder = orders.find((order) => order.id === selectedOrderId);
  if (!selectedOrder) return null;
  return (
    <div className="space-y-4 bg-gray-50 dark:bg-zinc-900 p-4 rounded-xl">
      <div className="">
        <select
          value={selectedOrderId}
          onChange={(e) => setSelectedOrderId(e.target.value)}
          className="px-4 py-2 border rounded-xl outline-0 bg-white dark:bg-black border-gray-300 dark:border-gray-700"
        >
          {orders.map((order) => (
            <option key={order.id} value={order.id}>
              {order.id} — {order.customer}
            </option>
          ))}
        </select>
      </div>
      <div className=" p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <p className="text-xs text-gray-500">Customer</p>
          <p className="font-semibold">{selectedOrder.customer}</p>
        </div>

        <div>
          <p className="text-xs text-gray-500">Order Date</p>
          <p className="font-semibold">{selectedOrder.date}</p>
        </div>

        <div>
          <p className="text-xs text-gray-500">Amount</p>
          <p className="font-semibold">${selectedOrder.amount}</p>
        </div>

        <div>
          <p className="text-xs text-gray-500">Payment</p>
          <p className="font-semibold">{selectedOrder.payment}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSelector;
