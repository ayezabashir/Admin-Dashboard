/* eslint-disable no-unused-vars */
const ListItem = ({ active, open, icon: Icon, text, onClick }) => {
  return (
    <li
      onClick={onClick}
      className={`p-2 flex items-center gap-4 cursor-pointer ${active ? "bg-gray-300 rounded-xl" : ""}`}
    >
      <Icon className={`text-2xl ${active ? "text-black" : "text-gray-500"}`} />
      <p
        className={`text-base font-semibold ${open ? "block" : "hidden"} ${active ? "text-black" : "text-gray-500"}`}
      >
        {text}
      </p>
    </li>
  );
};

export default ListItem;
