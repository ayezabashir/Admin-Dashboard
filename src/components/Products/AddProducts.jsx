import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";

const AddProducts = ({ setOpen, setProducts, categories }) => {
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    status: "active",
    image: null,
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, image: file });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name: form.name,
      category: form.category,
      price: Number(form.price),
      stock: Number(form.stock),
      status: form.status,
      image: form.image
        ? URL.createObjectURL(form.image)
        : "",
    };
    setProducts((prev) => [newProduct, ...prev]);
    setOpen(false);
    setForm({
      name: "",
      category: "",
      price: "",
      stock: "",
      status: "active",
      image: null,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white dark:bg-zinc-800  w-full max-w-md rounded-xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Add New Product</h2>
          <button onClick={() => setOpen(false)}>
            <RiCloseLine className="text-xl" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Product Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
          {form.image && (
            <img
              src={URL.createObjectURL(form.image)}
              alt="Preview"
              className="h-24 w-24 object-cover rounded-lg border"
            />
          )}
          <input
            name="name"
            placeholder="Product name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2"
          />
          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={form.stock}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2"
          />
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2"
          >
            <option className="bg-white dark:bg-black" value="">
              Select category
            </option>
            {categories.map((cat, index) => (
              <option
                className="bg-white dark:bg-black"
                key={index}
                value={cat}
              >
                {cat}
              </option>
            ))}
          </select>

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          >
            <option className="bg-white dark:bg-black" value="active">
              Active
            </option>
            <option className="bg-white dark:bg-black" value="low_stock">
              Low Stock
            </option>
            <option className="bg-white dark:bg-black" value="out_of_stock">
              Out of Stock
            </option>
          </select>

          <button
            type="submit"
            className="w-full bg-black text-white dark:bg-white dark:text-black py-2 rounded-lg font-semibold"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
