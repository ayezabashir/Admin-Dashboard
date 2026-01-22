import { BsPerson } from 'react-icons/bs';
const Activity = ({ type, title , subtitle, date, status}) => {
      return (
        <div className="flex items-center rounded-2xl justify-between border border-gray-200 dark:border-gray-800 p-2 py-3">
          <div className="flex gap-3">
            <div
              className={`rounded-full p-1 w-8 h-8 flex items-center justify-center
                ${type === "order" ? "bg-blue-300/20 text-blue-500" : type === "alert" ? "bg-red-300/20 text-red-500" : type === "promo" ? "bg-green-300/20 text-green-500" : "bg-gray-400/20 text-gray-400"}`}
            >
              <BsPerson />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-sm text-gray-900 dark:text-gray-200">
                {title}
              </h4>
              <h5 className="text-xs text-gray-900 dark:text-gray-200">
                {subtitle} <span className="font-thin">{date}</span>
              </h5>
            </div>
          </div>
          <div>
            <p
              className={`p-2 text-xs rounded-xl 
                ${type === "order" ? "bg-blue-300/20 text-blue-500" : type === "alert" ? "bg-red-300/20 text-red-500" : type === "promo" ? "bg-green-300/20 text-green-500" : "bg-gray-400/20 text-gray-400"}`}
            >
              {status}
            </p>
          </div>
        </div>
      );
};

export default Activity