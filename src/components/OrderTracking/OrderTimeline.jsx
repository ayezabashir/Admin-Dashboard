const statusSteps = ["pending", "shipped", "delivered"];

const statusLabels = {
  pending: "Order Placed",
  shipped: "Order Shipped",
  delivered: "Delivered",
};

const OrderTimeline = ({ status }) => {
  return (
    <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-6">
      <h3 className="font-semibold mb-4">Tracking Status</h3>
      <div className="flex items-center justify-between">
        {statusSteps.map((step, index) => {
          const isActive = statusSteps.indexOf(status) >= index;
          return (
            <div key={step} className="flex-1 flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                  isActive
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "bg-gray-200 dark:bg-zinc-800"
                }`}
              >
                {index + 1}
              </div>
              <p className="text-xs mt-2 text-center">{statusLabels[step]}</p>
              {index !== statusSteps.length && (
                <div
                  className={`h-1 w-full mt-4 ${
                    isActive
                      ? "bg-black dark:bg-white"
                      : "bg-gray-200 dark:bg-zinc-800"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderTimeline;
