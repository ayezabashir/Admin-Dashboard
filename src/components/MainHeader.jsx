import { BiBell, BiMoon, BiSearch, BiShoppingBag, BiSun } from "react-icons/bi";
import manimg from "/person.jpg";
import { useContext, useEffect, useRef, useState } from "react";
import NotificationModalBox from "./NotificationModalBox";
import { themeContext } from "../context/themeContext";
import AdminModalBox from "./AdminModalBox";
import OrdersModalBox from "./OrdersModalBox";

const MainHeader = () => {
  const value = useContext(themeContext);
  const headerRef = useRef(null);
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [showOrdersModal, setShowOrdersModal] = useState(false);
  const toggleMode = () => {
    const newMode = value.mode === "light" ? "dark" : "light";
    value.setMode(newMode);
    document.documentElement.classList.toggle("dark", newMode === "dark");
    localStorage.setItem("mode", newMode);
  };
  const handleOrders = () => {
    setShowOrdersModal(!showOrdersModal);
    setShowNotificationModal(false);
    setShowAdminModal(false);
  };
  const handleNotifications = () => {
    setShowNotificationModal(!showNotificationModal);
    setShowAdminModal(false);
    setShowOrdersModal(false);
  };
  const handleAdmin = () => {
    setShowAdminModal(!showAdminModal);
    setShowNotificationModal(false);
    setShowOrdersModal(false);
  };
  useEffect(() => {
    const storedMode = localStorage.getItem("mode") || "light";
    value.setMode(storedMode);
    document.documentElement.classList.toggle("dark", storedMode === "dark");
  }, []);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setShowNotificationModal(false);
        setShowOrdersModal(false);
        setShowAdminModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <header
      ref={headerRef}
      className="bg-white dark:bg-black h-18 flex items-center justify-between p-4 transition-all duration-300 ease-in-out"
    >
      <div className="flex justify-between items-center border border-gray-400 rounded-xl p-2 ">
        <input
          className="outline-0 text-sm text-gray-900 dark:text-gray-200"
          type="search"
          name="search"
          id="search"
          placeholder="Search Anything..."
        />
        <BiSearch className="text-xl text-gray-900 dark:text-gray-200" />
      </div>
      <div className="flex items-center gap-5">
        <button className="outline-none" type="button" onClick={toggleMode}>
          {value.mode === "light" ? (
            <BiMoon className="text-xl cursor-pointer text-gray-900 dark:text-gray-200" />
          ) : (
            <BiSun className="text-xl cursor-pointer text-gray-900 dark:text-gray-200" />
          )}
        </button>
        <div className="relative flex justify-center">
          <button
            onMouseDown={(e) => e.stopPropagation()}
            onClick={handleNotifications}
          >
            <BiBell className="text-xl cursor-pointer text-gray-900 dark:text-gray-200" />
          </button>

          {showNotificationModal && (
            <div className="absolute top-10 right-0">
              <NotificationModalBox />
            </div>
          )}
        </div>
        <div className="relative flex justify-center">
          <button
            onMouseDown={(e) => e.stopPropagation()}
            onClick={handleOrders}
          >
            <BiShoppingBag className="text-xl cursor-pointer text-gray-900 dark:text-gray-200" />
          </button>

          {showOrdersModal && (
            <div className="absolute top-10 right-0">
              <OrdersModalBox />
            </div>
          )}
        </div>

        <div
          className="relative cursor-pointer"
          onMouseDown={(e) => e.stopPropagation()}
          onClick={handleAdmin}
        >
          <div className="flex items-center justify-center gap-3">
            <img
              width="35"
              height="35"
              className="rounded-full"
              src={manimg}
              alt=""
            />
            <div className="flex flex-col items-start ">
              <p className="text-sm font-semibold text-gray-900 dark:text-gray-200">
                Ayeza Bashir
              </p>
              <p className="text-sm text-gray-900 dark:text-gray-200">
                Web Developer
              </p>
            </div>
          </div>
          {showAdminModal && (
            <div className="absolute top-13 right-0">
              <AdminModalBox />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
