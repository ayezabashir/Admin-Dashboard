import { useState } from "react";
import orders from "../../data/orders.json";
import OrderSelector from "../../components/OrderTracking/OrderSelector";
import OrderTimeline from "../../components/OrderTracking/OrderTimeline";

const OrderTracking = () => {
  const [selectedOrderId, setSelectedOrderId] = useState(orders[0].id);
  const order = orders.find((o) => o.id === selectedOrderId);
  return (
    <div className="space-y-6 text-gray-900 dark:text-gray-200">
      <OrderSelector
        orders={orders}
        selectedOrderId={selectedOrderId}
        setSelectedOrderId={setSelectedOrderId}
      />
      <OrderTimeline status={order.status} />
    </div>
  );
};

export default OrderTracking;
