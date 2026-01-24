const statusStyles = {
  pending: "bg-yellow-100 text-yellow-700",
  approved: "bg-green-100 text-green-700",
  rejected: "bg-red-100 text-red-700",
};

const ReturnsTable = ({ returns }) => {
  return (
    <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-100 dark:bg-zinc-900">
          <tr>
            <th className="text-left p-4">Return ID</th>
            <th className="text-left p-4">Order</th>
            <th className="text-left p-4">Customer</th>
            <th className="text-left p-4">Reason</th>
            <th className="text-left p-4">Amount</th>
            <th className="text-left p-4">Status</th>
          </tr>
        </thead>

        <tbody>
          {returns.map((item) => (
            <tr
              key={item.id}
              className="border-t border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-zinc-900"
            >
              <td className="p-4 font-medium">{item.id}</td>
              <td className="p-4">{item.orderId}</td>
              <td className="p-4">{item.customer}</td>
              <td className="p-4">{item.reason}</td>
              <td className="p-4">${item.amount}</td>
              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[item.status]}`}
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReturnsTable;
