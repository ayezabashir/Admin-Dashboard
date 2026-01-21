import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <MainHeader />
        <main className="p-6">
            <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout