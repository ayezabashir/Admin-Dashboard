import { useState } from "react";
import { BiPencil, BiTrash } from "react-icons/bi";
import AddProducts from "./AddProducts";
const statusStyles = {
  active: "bg-green-100 text-green-700",
  low_stock: "bg-yellow-100 text-yellow-700",
  out_of_stock: "bg-red-100 text-red-700",
};

const ProductsTable = ({ products, setProducts, categories }) => {
  const [openEditProduct, setOpenEditProduct] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currPage, setCurrPage] = useState(1);
  const productsPerPage = 4;
  const totalPages = Math.ceil(products.length / productsPerPage);
  const indexOfLastProduct = currPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleEdit = (productId) => {
    const productToEdit = products.find((product) => product.id === productId);
    setSelectedProduct(productToEdit);
    setOpenEditProduct(true);
  };
  const handleDelete = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId,
    );
    setProducts(updatedProducts);
  };
  const handlePrevPage = () => {
    setCurrPage((prev) => prev - 1);
  };
  const handleNextPage = () => {
    if (currPage < totalPages) {
      setCurrPage((prev) => prev + 1);
    }
  };

  return (
    <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-100 dark:bg-zinc-900">
          <tr>
            <th className="text-left p-4">Product</th>
            <th className="text-left p-4">Category</th>
            <th className="text-left p-4">Price</th>
            <th className="text-left p-4">Stock</th>
            <th className="text-left p-4">Status</th>
            <th className="text-right p-4">Action</th>
          </tr>
        </thead>

        <tbody>
          {currProducts.map((product) => (
            <tr
              key={product.id}
              className="border-t border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-zinc-900 transition"
            >
              <td className="p-4 flex items-center gap-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-10 h-10 rounded-lg object-cover"
                />
                <div>
                  <p className="font-semibold">{product.name}</p>
                  <p className="text-xs text-gray-500">{product.sku}</p>
                </div>
              </td>
              <td className="p-4">{product.category}</td>
              <td className="p-4">${product.price}</td>
              <td className="p-4">{product.stock}</td>
              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[product.status]}`}
                >
                  {product.status.replace("_", " ")}
                </span>
              </td>
              <td className="p-4 text-right">
                <button
                  onClick={() => handleEdit(product.id)}
                  className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-800"
                >
                  <BiPencil className="text-green-500 text-lg" />
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-800"
                >
                  <BiTrash className="text-red-500 text-lg" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-start items-center gap-4 ml-3 my-5">
        <button
          className="px-3 py-1 cursor-pointer border border-gray-400 rounded-md"
          onClick={handlePrevPage}
        >
          Prev
        </button>
        <p>{currPage}</p>
        <button
          className="px-3 py-1 cursor-pointer border border-gray-400 rounded-md"
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
      {openEditProduct && (
        <AddProducts
          setOpenEditProduct={setOpenEditProduct}
          selectedProduct={selectedProduct}
          setProducts={setProducts}
          categories={categories}
        />
      )}
    </div>
  );
};

export default ProductsTable;
