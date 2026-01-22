import { FaSquareLetterboxd } from "react-icons/fa6";

const TopProducts = ({ data }) => {
  const tableHeadingStyles = "text-start pb-5 font-semibold";
  return (
    <div className="bg-white dark:bg-black p-6 rounded-xl border border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between mb-10">
        <div className="flex gap-2 items-center justify-center">
          <FaSquareLetterboxd className="text-gray-900 dark:text-gray-200" />
          <h3 className="font-semibold text-gray-900 dark:text-gray-200">
            Top Products
          </h3>
        </div>
        <button className="outline-0 px-3 py-1 text-sm cursor-pointer rounded-md border border-gray-200 dark:border-gray-800">
          See All
        </button>
      </div>
      <div className="flex flex-col gap-5 w-full">
        <table className="text-gray-900 dark:text-gray-200 w-full">
          <tbody>
            <tr>
              <th className={tableHeadingStyles}>Products</th>
              <th className={tableHeadingStyles}>Stocks</th>
              <th className={tableHeadingStyles}>Price</th>
              <th className={tableHeadingStyles}>Sales</th>
              <th className={tableHeadingStyles}>Earnings</th>
            </tr>
            {data.map((item, index) => {
              const isLast = index === item.length - 1;
              const borderClass = isLast
                ? "border-0"
                : "border-b border-gray-200 dark:border-gray-800 ";
              return (
                <tr>
                  <td className={`py-3 font-thin ${borderClass}`}>
                    {item.name}
                  </td>
                  <td className={`py-3 font-thin ${borderClass}`}>
                    {item.stock}
                  </td>
                  <td className={`py-3 font-thin ${borderClass}`}>
                    {item.price}
                  </td>
                  <td className={`py-3 font-thin ${borderClass}`}>
                    {item.sales}
                  </td>
                  <td className={`py-3 font-thin ${borderClass}`}>
                    {item.earnings}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopProducts;
