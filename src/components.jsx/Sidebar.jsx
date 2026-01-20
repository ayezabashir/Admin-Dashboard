import { useState } from "react";
import { FiSidebar } from "react-icons/fi";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <aside
      className={`p-4 bg-slate-200 min-h-screen transition-[width] duration-300 ease-in-out ${open ? "max-w-64" : "w-16"}`}
    >
      <header className="flex justify-between items-center gap-5">
        <h1 className={`${open ? 'block' : 'hidden'}`}>Dashboard</h1>
        <button className="cursor-pointer" type="button" onClick={()=>setOpen(!open)}>
          <FiSidebar />
        </button>
      </header>
    </aside>
  );
};

export default Sidebar;
