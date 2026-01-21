import { BiBell, BiMoon, BiSearch, BiShoppingBag, BiSun } from "react-icons/bi";
import manimg from "/person.jpg";
import { useContext, useEffect, useState } from "react";
import NotificationModalBox from "./NotificationModalBox";
import { themeContext } from "../context/themeContext";

const MainHeader = () => {
  const value = useContext(themeContext);
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const toggleMode = () => {
    const newMode = value.mode === "light" ? "dark" : "light";
    value.setMode(newMode);
    document.documentElement.classList.toggle("dark", newMode === "dark");
    localStorage.setItem("mode", newMode);
  };

  useEffect(() => {
    const storedMode = localStorage.getItem("mode") || "light";
    value.setMode(storedMode);
    document.documentElement.classList.toggle("dark", storedMode === "dark");
  }, []);

  const handleNotifications = () => {
    setShowNotificationModal(!showNotificationModal);
  };
  return (
    <header className="bg-white dark:bg-black h-18 flex items-center justify-between p-4 transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center border border-gray-400 rounded-xl p-2 ">
        <input
          className="outline-0 text-sm"
          type="search"
          name="search"
          id="search"
        />
        <BiSearch className="text-xl text-gray-900 dark:text-gray-200" />
      </div>
      <div className="flex items-center gap-5">
        <button type="button" onClick={toggleMode}>
          {value.mode === "light" ? (
            <BiMoon className="text-xl cursor-pointer text-gray-900 dark:text-gray-200" />
          ) : (
            <BiSun className="text-xl cursor-pointer text-gray-900 dark:text-gray-200" />
          )}
        </button>
        <div className="relative flex justify-center">
          <button onClick={handleNotifications}>
            <BiBell className="text-xl cursor-pointer text-gray-900 dark:text-gray-200" />
          </button>
          {showNotificationModal && (
            <div className="absolute top-10 right-0">
              <NotificationModalBox />
            </div>
          )}
        </div>
        <div>
          <BiShoppingBag className="text-xl cursor-pointer text-gray-900 dark:text-gray-200" />
        </div>
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
              Paul Wesley
            </p>
            <p className="text-sm text-gray-900 dark:text-gray-200">
              Web Designer
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
