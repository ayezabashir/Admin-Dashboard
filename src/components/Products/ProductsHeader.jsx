import { useState } from "react";
import AddProducts from "./AddProducts";
import PageHeader from "../PageHeader";

const ProductsHeader = ({ setProducts, categories }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <PageHeader
        headerTitle="Products"
        headerSubtitle="Manage your products and inventory"
        btnText="Add Product"
        onClick={() => setOpen(true)}
      />
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
