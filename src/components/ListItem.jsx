import { useState } from "react";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";

/* eslint-disable no-unused-vars */
const ListItem = ({
  active,
  open,
  icon: Icon,
  text,
  onMainClick,
  subTabs,
  activeSubTab,
  onSubTabClick,
}) => {
  const [dropdownopen, setDropDownOpen] = useState(false);
  return (
    <div>
      <li
        onClick={onMainClick}
        className={`p-2 flex items-center justify-between cursor-pointer ${active ? "bg-gray-300 rounded-xl" : ""}`}
      >
        <div className="flex gap-2 items-center">
          <Icon
            className={`text-2xl ${active ? "text-black dark:text-slate-800" : "text-gray-500 dark:text-gray-400"}`}
          />
          <p
            className={`text-base font-semibold ${open ? "block" : "hidden"} ${active ? "text-black dark:text-slate-800" : "text-gray-500 dark:text-gray-400"}`}
          >
            {text}
          </p>
        </div>
        {subTabs && open && (
          <div
            onClick={(e) => {
              e.stopPropagation();
              setDropDownOpen(!dropdownopen);
            }}
          >
            {dropdownopen ? (
              <BiDownArrow className="text-gray-500 dark:text-gray-400" />
            ) : (
              <BiUpArrow className="text-gray-500 dark:text-gray-400" />
            )}
          </div>
        )}
      </li>
      {subTabs &&
        dropdownopen &&
        open &&
        subTabs.map((item, index) => (
          <li
            onClick={(e) => {
              e.stopPropagation();
              onSubTabClick(item);
            }}
            key={index}
            className={`text-gray-500 font-semibold ml-7 mt-3 py-2 px-3 cursor-pointer text-sm ${activeSubTab === item ? "bg-gray-300 rounded-xl" : ""}`}
          >
            {item}
          </li>
        ))}
    </div>
  );
};

export default ListItem;
