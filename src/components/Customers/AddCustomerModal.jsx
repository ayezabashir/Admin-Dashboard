import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";

const AddCustomerModal = ({ setOpen, setCustomers }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    avatar: null, // store the file
    orders: 0,
    totalSpent: 0,
    status: "active",
    type: "new",
    joinedAt: new Date().toISOString().split("T")[0], // default today
  });

  // For showing avatar preview
  const [avatarPreview, setAvatarPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "avatar" && files[0]) {
      setFormData((prev) => ({ ...prev, avatar: files[0] }));
      setAvatarPreview(URL.createObjectURL(files[0]));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setCustomers((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        ...formData,
        orders: Number(formData.orders),
        totalSpent: Number(formData.totalSpent),
        // Generate URL for avatar if a file is uploaded
        avatar: formData.avatar ? URL.createObjectURL(formData.avatar) : "",
      },
    ]);

    setOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-md relative">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-white"
        >
          <RiCloseLine size={24} />
        </button>

        <h2 className="text-xl font-bold mb-4">Add Customer</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            required
          />

          {/* Avatar file input */}
          <div>
            <input
              type="file"
              name="avatar"
              accept="image/*"
              onChange={handleChange}
              className="w-full"
            />
            {avatarPreview && (
              <img
                src={avatarPreview}
                alt="Avatar Preview"
                className="mt-2 w-20 h-20 rounded-full object-cover"
              />
            )}
          </div>


          {/* Status */}
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="blocked">Blocked</option>
          </select>

          {/* Type */}
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="new">New</option>
            <option value="returning">Returning</option>
            <option value="vip">VIP</option>
          </select>


          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-xl font-semibold"
          >
            Add Customer
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCustomerModal;
