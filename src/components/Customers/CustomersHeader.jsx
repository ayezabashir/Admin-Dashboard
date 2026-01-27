import { useState } from "react";
import AddCustomerModal from "./AddCustomerModal";
import PageHeader from "../PageHeader";

const CustomersHeader = ({ setCustomers }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <PageHeader
        headerTitle="Customers"
        headerSubtitle="Manage your customers and view insights"
        btnText="Add Customer"
        onClick={() => setOpen(true)}
      />
      {open && (
        <AddCustomerModal setOpen={setOpen} setCustomers={setCustomers} />
      )}
    </>
  );
};

export default CustomersHeader;
