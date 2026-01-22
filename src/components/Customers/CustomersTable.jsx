import { BiDotsVerticalRounded } from "react-icons/bi";
const statusStyles = {
  active: "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-100",
  inactive: "bg-gray-100 text-gray-700 dark:bg-gray-600 dark:text-gray-200",
  blocked: "bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-100",
};
const typeStyles = {
  new: "bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-100",
  returning:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-100",
  vip: "bg-purple-100 text-purple-700 dark:bg-purple-800 dark:text-purple-100",
};
const CustomersTable = ({ customers }) => {
  return (
    <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-100 dark:bg-zinc-900">
          <tr>
            <th className="text-left p-4">Customer</th>
            <th className="text-left p-4">Email</th>
            <th className="text-left p-4">Orders</th>
            <th className="text-left p-4">Status</th>
            <th className="text-left p-4">Type</th>
            <th className="text-right p-4">Action</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((c) => (
            <tr
              key={c.id}
              className="border-t border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-zinc-900 transition"
            >
              <td className="p-4 flex items-center gap-3">
                <img
                  src={c.avatar || "/customers/default.jpg"}
                  alt={c.name}
                  className="w-10 h-10 rounded-lg object-cover"
                />
                <div>
                  <p className="font-semibold">{c.name}</p>
                </div>
              </td>
              <td className="p-4 text-gray-600 dark:text-gray-200">
                {c.email}
              </td>
              <td className="p-4">{c.orders}</td>
              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[c.status]}`}
                >
                  {c.status.charAt(0).toUpperCase() + c.status.slice(1)}
                </span>
              </td>
              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${typeStyles[c.type]}`}
                >
                  {c.type.charAt(0).toUpperCase() + c.type.slice(1)}
                </span>
              </td>
              <td className="p-4 text-right">
                <button className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-800">
                  <BiDotsVerticalRounded />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomersTable;
