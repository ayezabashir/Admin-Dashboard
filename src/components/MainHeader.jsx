import { BiBell, BiMoon, BiSearch, BiShoppingBag, BiSun } from "react-icons/bi";
import manimg from "/person.jpg";
import { useState } from "react";
import NotificationModalBox from "./NotificationModalBox";

const MainHeader = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const handleNotifications = () => {
    setShowNotificationModal(!showNotificationModal);
  };
  return (
    <header className="bg-white h-18 flex items-center justify-between p-4">
      <div className="flex justify-between items-center border border-gray-400 rounded-xl p-2 ">
        <input
          className="outline-0 text-sm"
          type="search"
          name="search"
          id="search"
        />
        <BiSearch className="text-xl" />
      </div>
      <div className="flex items-center gap-5">
        <button type="button" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <BiMoon className="text-xl cursor-pointer" />
          ) : (
            <BiSun className="text-xl cursor-pointer" />
          )}
        </button>
        <div className="relative flex justify-center">
          <button onClick={handleNotifications}>
            <BiBell className="text-xl cursor-pointer" />
          </button>
          {showNotificationModal && (
            <div className="absolute top-10 right-0">
              <NotificationModalBox />
            </div>
          )}
        </div>
        <div>
          <BiShoppingBag className="text-xl cursor-pointer" />
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
            <p className="text-sm font-semibold text-black">Paul Wesley</p>
            <p className="text-sm text-gray-600">Web Designer</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
