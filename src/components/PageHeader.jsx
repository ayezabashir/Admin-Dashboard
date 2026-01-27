import { RiAddLine } from "react-icons/ri";

const PageHeader = ({ headerTitle, headerSubtitle, btnText, onClick }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold">{headerTitle}</h1>
        <p className="text-sm text-gray-500">{headerSubtitle}</p>
      </div>
      <button
        onClick={onClick}
        className="flex items-center gap-2 bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-xl text-sm font-semibold"
      >
        <RiAddLine />
        {btnText}
      </button>
    </div>
  );
};

export default PageHeader;
