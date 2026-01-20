import { useState } from "react";
import ListItem from "./ListItem";
import {
  RiDashboardLine,
  RiShoppingBag3Line,
  RiFileList3Line,
  RiUser3Line,
  RiCustomerService2Line,
} from "react-icons/ri";

const items = [
  {
    id: 1,
    icon: RiDashboardLine,
    text: "Dashboard",
  },
  {
    id: 2,
    icon: RiShoppingBag3Line,
    text: "Products",
  },
  {
    id: 3,
    icon: RiFileList3Line,
    text: "Orders",
  },
  {
    id: 4,
    icon: RiUser3Line,
    text: "Customers",
  },
  {
    id: 5,
    icon: RiCustomerService2Line,
    text: "Support",
  },
];

const SidebarNavs = ({ open }) => {
  const [activeId, setActiveId] = useState(1);
  return (
    <ul className="flex flex-col gap-5">
      {items.map((item) => (
        <ListItem
          key={item.id}
          open={open}
          icon={item.icon}
          text={item.text}
          active={activeId === item.id}
          onClick={() => setActiveId(item.id)}
        />
      ))}
    </ul>
  );
};

export default SidebarNavs;
