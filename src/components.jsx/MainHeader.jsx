import { BiBell, BiMoon, BiSearch, BiShoppingBag } from "react-icons/bi";
import manimg from "/person.jpg"

const MainHeader = () => {
  return (
    <header className="bg-white h-18 flex items-center justify-between p-4">
      <div className="flex justify-between items-center border border-gray-400 rounded-xl p-2 ">
        <input
          className="outline-0 text-sm"
          type="search"
          name="search"
          id="search"
        />
        <BiSearch />
      </div>
      <div className="flex items-center gap-5">
        <div>
            <BiMoon />
        </div>
        <div>
            <BiBell />
        </div>
        <div>
            <BiShoppingBag />
        </div>
        <div className="flex items-center justify-center gap-3">
            <img width="30" height="30" className="rounded-full" src={manimg} alt="" />
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
