import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";

const AddCustomerModal = ({
  selectedCustomer,
  setOpenEditModal,
  setOpen,
  setCustomers,
}) => {
  const [formData, setFormData] = useState({
    name: selectedCustomer?.name || "",
    email: selectedCustomer?.email || "",
    avatar: selectedCustomer?.avatar || null,
    orders: selectedCustomer?.orders || 0,
    status: selectedCustomer?.status || "active",
    type: selectedCustomer?.type || "new",
  });
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

    const updatedCustomer = {
      id: selectedCustomer ? selectedCustomer.id : Date.now(),
      ...formData,
      orders: Number(formData.orders),
      avatar:
        formData.avatar instanceof File
          ? URL.createObjectURL(formData.avatar)
          : formData.avatar || "",
    };

    if (selectedCustomer) {
      setCustomers((prev) =>
        prev.map((customer) =>
          customer.id === selectedCustomer.id ? updatedCustomer : customer,
        ),
      );
    } else {
      setCustomers((prev) => [updatedCustomer, ...prev]);
    }
    setOpen?.(false);
    setOpenEditModal?.(false);
  };
  const handleModalClose = () => {
    setOpen?.(false);
    setOpenEditModal?.(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 w-full max-w-md relative">
        <button
          onClick={handleModalClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-white"
        >
          <RiCloseLine size={24} />
        </button>
        <h2 className="text-xl font-bold mb-4">Add Customer</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
            required
          />
          <input
            type="number"
            name="orders"
            placeholder="orders"
            value={formData.orders}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
          <div>
            <input
              type="file"
              name="avatar"
              accept="image/*"
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
            {(avatarPreview || formData.avatar) && (
              <img
                src={
                  avatarPreview ||
                  (typeof formData.avatar === "string" ? formData.avatar : "")
                }
                alt="Avatar Preview"
                className="mt-2 w-20 h-20 rounded-full object-cover"
              />
            )}
          </div>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          >
            <option className="bg-white dark:bg-black" value="active">
              Active
            </option>
            <option className="bg-white dark:bg-black" value="inactive">
              Inactive
            </option>
            <option className="bg-white dark:bg-black" value="blocked">
              Blocked
            </option>
          </select>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          >
            <option className="bg-white dark:bg-black" value="new">
              New
            </option>
            <option className="bg-white dark:bg-black" value="vip">
              VIP
            </option>
          </select>
          <button
            type="submit"
            className="w-full bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-xl font-semibold"
          >
            {
              selectedCustomer ? "Update Cusomter" : "Add Customer"
            }
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCustomerModal;
