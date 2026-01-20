import { useState } from "react";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";

/* eslint-disable no-unused-vars */
const ListItem = ({ active, open, icon: Icon, text, onClick, subTabs }) => {
  const [dropdownopen, setDropDownOpen] = useState(false);
  return (
    <div>
      <li
        onClick={onClick}
        className={`p-2 flex items-center justify-between cursor-pointer ${active ? "bg-gray-300 rounded-xl" : ""}`}
      >
        <div className="flex gap-2 items-center">
          <Icon
            className={`text-2xl ${active ? "text-black" : "text-gray-500"}`}
          />
          <p
            className={`text-base font-semibold ${open ? "block" : "hidden"} ${active ? "text-black" : "text-gray-500"}`}
          >
            {text}
          </p>
        </div>
        {subTabs && open && (
          <div onClick={() => setDropDownOpen(!dropdownopen)}>
            {dropdownopen ? (
              <BiDownArrow className="text-gray-500" />
            ) : (
              <BiUpArrow className="text-gray-500" />
            )}
          </div>
        )}
      </li>
      {subTabs &&
        dropdownopen &&
        open &&
        subTabs.map((item, index) => (
          <li
            key={index}
            className={`text-gray-500 font-semibold pl-10 mt-3 cursor-pointer text-sm`}
          >
            {item}
          </li>
        ))}
    </div>
  );
};

export default ListItem;
