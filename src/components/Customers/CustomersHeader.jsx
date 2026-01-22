import { useState } from "react";
import { RiAddLine } from "react-icons/ri";
import AddCustomerModal from "./AddCustomerModal";

const CustomersHeader = ({ setCustomers }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Customers</h1>
          <p className="text-sm text-gray-500">
            Manage your customers and view insights
          </p>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-xl text-sm font-semibold"
        >
          <RiAddLine />
          Add Customer
        </button>
      </div>
      {open && (
        <AddCustomerModal setOpen={setOpen} setCustomers={setCustomers} />
      )}
    </>
  );
};

export default CustomersHeader;
