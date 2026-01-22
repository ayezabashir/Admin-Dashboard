import { useState } from "react";
import { RiAddLine} from "react-icons/ri";
import AddProducts from "./AddProducts";

const ProductsHeader = ({ setProducts, categories }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Products</h1>
          <p className="text-sm text-gray-500">
            Manage your products and inventory
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-xl text-sm font-semibold"
        >
          <RiAddLine />
          Add Product
        </button>
      </div>
      {open && (
        <AddProducts
          setOpen={setOpen}
          setProducts={setProducts}
          categories={categories}
        />
      )}
    </>
  );
};

export default ProductsHeader;
