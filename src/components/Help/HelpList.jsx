import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const HelpList = ({ items }) => {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl divide-y divide-gray-200 dark:divide-gray-800">
      {items.map((item) => (
        <div key={item.id} className="p-4">
          <button
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            className="w-full flex justify-between items-center text-left"
          >
            <div>
              <p className="text-xs text-gray-500">{item.category}</p>
              <p className="font-semibold">{item.question}</p>
            </div>
            <BiChevronDown
              className={`transition ${openId === item.id ? "rotate-180" : ""}`}
            />
          </button>

          {openId === item.id && (
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              {item.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default HelpList;
