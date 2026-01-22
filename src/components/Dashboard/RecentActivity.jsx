import { BsClockHistory } from "react-icons/bs";

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
      </div>
    </div>
  );
}

export default RecentActivity