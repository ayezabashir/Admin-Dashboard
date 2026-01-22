import { BsClockHistory } from "react-icons/bs";
import Activity from "./Activity";

const RecentActivity = ({data}) => {
  return (
    <div className="bg-white dark:bg-black p-6 rounded-xl border border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2 items-center justify-center">
          <BsClockHistory className="text-gray-900 dark:text-gray-200" />
          <h3 className="font-semibold text-gray-900 dark:text-gray-200">
            Recent Acitivity
          </h3>
        </div>
        <button className="outline-0 px-3 py-1 text-sm cursor-pointer rounded-md border border-gray-200 dark:border-gray-800">
          See All
        </button>
      </div>
      <div className="flex flex-col gap-4 w-full">
        {data.map((item) => (
          <Activity
            key={item.id}
            type={item.type}
            title={item.title}
            subtitle={item.subtitle}
            date={item.date}
            status={item.status}
          />
        ))}
      </div>
    </div>
  );
}

export default RecentActivity