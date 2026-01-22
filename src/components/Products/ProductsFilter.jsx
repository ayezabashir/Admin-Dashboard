import { BiSearch } from 'react-icons/bi';

const ProductsFilter = ({categories}) => {
  return (
    <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-4 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
      <div className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 w-full md:w-1/3">
        <BiSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search products..."
          className="w-full outline-none bg-transparent text-sm"
        />
      </div>
      <div className="flex gap-4 w-full md:w-auto">
        <select className="border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 text-sm bg-transparent">
          <option className="bg-white dark:bg-black" value="">
            All Categories
          </option>
          {categories.map((cat, index) => (
            <option className="bg-white dark:bg-black" key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <select className="border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 text-sm bg-transparent">
          <option className='bg-white dark:bg-black' value="">All Status</option>
          <option className='bg-white dark:bg-black' value="active">Active</option>
          <option className='bg-white dark:bg-black' value="low_stock">Low Stock</option>
          <option className='bg-white dark:bg-black' value="out_of_stock">Out of Stock</option>
        </select>
      </div>
    </div>
  );
}

export default ProductsFilter