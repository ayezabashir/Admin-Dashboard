import { RiAddLine } from 'react-icons/ri';

const ProductsHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold">Products</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Manage your products, pricing, and inventory
        </p>
      </div>
      <button
        type="button"
        className="flex items-center gap-2 bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-xl text-sm font-semibold hover:opacity-90 transition"
      >
        <RiAddLine className="text-lg" />
        Add Product
      </button>
    </div>
  );
}

export default ProductsHeader