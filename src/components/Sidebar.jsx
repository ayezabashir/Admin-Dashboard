import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  RiDashboardLine,
  RiShoppingBag3Line,
  RiFileList3Line,
  RiUser3Line,
  RiCustomerService2Line,
} from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";

const sidebarItems = [
  {
    id: 1,
    label: "Dashboard",
    icon: RiDashboardLine,
    route: "/dashboard",
  },
  {
    id: 2,
    label: "Products",
    icon: RiShoppingBag3Line,
    route: "/products",
  },
  {
    id: 3,
    label: "Orders",
    icon: RiFileList3Line,
    subTabs: [
      { label: "All Orders", route: "/orders/all" },
      { label: "Returns", route: "/orders/returns" },
      { label: "Order Tracking", route: "/orders/tracking" },
    ],
  },
  {
    id: 4,
    label: "Customers",
    icon: RiUser3Line,
    route: "/customers",
  },
  {
    id: 5,
    label: "Support",
    icon: RiCustomerService2Line,
    subTabs: [
      { label: "Help", route: "/support/help" },
      { label: "Contact", route: "/support/contact" },
      { label: "Complaint", route: "/support/complaint" },
    ],
  },
];

const Sidebar = () => {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);

  const isSubRouteActive = (subTabs) =>
    subTabs?.some((tab) => location.pathname === tab.route);

  return (
    <aside className="w-64 bg-white dark:bg-black border-r border-gray-200 dark:border-gray-800 p-4">
      <ul className="flex flex-col gap-2">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            location.pathname === item.route || isSubRouteActive(item.subTabs);

          return (
            <li key={item.id}>
              {item.route ? (
                <NavLink
                  to={item.route}
                  className={`flex items-center gap-3 p-3 rounded-xl font-medium transition
                    ${
                      isActive
                        ? "bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
                        : "text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-900"
                    }
                  `}
                >
                  <Icon className="text-xl" />
                  <span>{item.label}</span>
                </NavLink>
              ) : (
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === item.id ? null : item.id)
                  }
                  className={`w-full flex items-center justify-between p-3 rounded-xl font-medium transition
                    ${
                      isActive
                        ? "bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
                        : "text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-900"
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="text-xl" />
                    <span>{item.label}</span>
                  </div>
                  <BiChevronDown
                    className={`transition ${
                      openDropdown === item.id ? "rotate-180" : ""
                    }`}
                  />
                </button>
              )}

              {item.subTabs && openDropdown === item.id && (
                <ul className="ml-10 mt-2 flex flex-col gap-1">
                  {item.subTabs.map((sub) => (
                    <NavLink
                      key={sub.route}
                      to={sub.route}
                      className={({ isActive }) =>
                        `text-sm px-3 py-2 rounded-lg transition
                        ${
                          isActive
                            ? "bg-gray-300 dark:bg-gray-700 text-black dark:text-white"
                            : "text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-900"
                        }`
                      }
                    >
                      {sub.label}
                    </NavLink>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
