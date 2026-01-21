import { useState } from "react";
import { FiSidebar } from "react-icons/fi";
import SidebarNavs from "./SidebarNavs";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <aside
      className={`p-4 bg-slate-200 dark:bg-stone-900 min-h-screen transition-[width] duration-300 ease-in-out ${open ? "w-64" : "w-16"}`}
    >
      <header
        className={`flex items-center  ${open ? "justify-between" : "justify-center"}`}
      >
        <h1
          className={`${open ? "block" : "hidden"} font-bold text-2xl text-black dark:text-slate-200`}
        >
          Dashboard
        </h1>
        <button
          className="cursor-pointer flex justify-center"
          type="button"
          onClick={() => setOpen(!open)}
        >
          <FiSidebar className="text-black dark:text-slate-200" />
        </button>
      </header>
      <main className="mt-10">
        <SidebarNavs open={open} />
      </main>
    </aside>
  );
};

export default Sidebar;
