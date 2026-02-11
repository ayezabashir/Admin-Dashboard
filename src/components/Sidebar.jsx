import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  RiDashboardLine,
  RiShoppingBag3Line,
  RiFileList3Line,
  RiUser3Line,
  RiCustomerService2Line,
  RiMenuFoldLine,
} from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { CgClose } from "react-icons/cg";

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
    ],
  },
];

const Sidebar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);

  const isSubRouteActive = (subTabs) =>
    subTabs?.some((tab) => location.pathname === tab.route);
  return (
    <aside
      className={`h-screen bg-white dark:bg-black border-r border-zinc-200 dark:border-zinc-800
      transition-all duration-300 ease-in-out
      ${open ? "w-64" : "w-20"}`}
    >
      <div className="flex items-center justify-between p-4">
        <h1
          className={`text-xl font-bold text-zinc-600 dark:text-zinc-300 ${open ? "block" : "hidden"}`}
        >
          Admin Dashboard
        </h1>
        <button
          onClick={() => {
            setOpen(!open);
            setOpenDropdown(null);
          }}
          className="text-xl text-zinc-600 dark:text-zinc-300 cursor-pointer"
        >
          {open ? <RiMenuFoldLine /> : <CgClose className="ml-1" />}
        </button>
      </div>

      <ul className="flex flex-col gap-2 px-2">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            location.pathname === item.route || isSubRouteActive(item.subTabs);

          return (
            <li key={item.id}>
              {item.route ? (
                <NavLink
                  to={item.route}
                  className={`flex items-center gap-3 p-3 rounded-xl transition
                  ${
                    isActive
                      ? "bg-zinc-200 dark:bg-zinc-800 text-black dark:text-white"
                      : "text-zinc-500 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900"
                  }`}
                >
                  <Icon className="text-xl min-w-6" />

                  <span
                    className={`transition-all duration-300 origin-left
                    ${
                      open
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-0 hidden"
                    }`}
                  >
                    {item.label}
                  </span>
                </NavLink>
              ) : (
                <button
                  onClick={() =>
                    open &&
                    setOpenDropdown(openDropdown === item.id ? null : item.id)
                  }
                  className={`w-full flex items-center justify-between p-3 rounded-xl transition
                  ${
                    isActive
                      ? "bg-zinc-200 dark:bg-zinc-800 text-black dark:text-white"
                      : "text-zinc-500 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="text-xl min-w-6" />

                    <span
                      className={`transition-all duration-300 origin-left
                      ${
                        open
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-0 hidden"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>

                  {open && (
                    <BiChevronDown
                      className={`transition-transform duration-300
                      ${openDropdown === item.id ? "rotate-180" : ""}`}
                    />
                  )}
                </button>
              )}

              {open && item.subTabs && openDropdown === item.id && (
                <ul className="ml-10 mt-2 flex flex-col gap-1">
                  {item.subTabs.map((sub) => (
                    <NavLink
                      key={sub.route}
                      to={sub.route}
                      className={({ isActive }) =>
                        `text-sm px-3 py-2 rounded-lg transition
                          ${
                            isActive
                              ? "bg-zinc-300 dark:bg-zinc-800 text-black dark:text-white"
                              : "text-zinc-500 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900"
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
