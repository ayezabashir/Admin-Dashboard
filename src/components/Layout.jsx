import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 bg-gray-200 dark:bg-zinc-800 overflow-hidden">
        <MainHeader />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout