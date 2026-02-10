import { useMemo, useState } from "react";
import ProductsFilter from "../components/Products/ProductsFilter";
import ProductsHeader from "../components/Products/ProductsHeader";
import ProductsTable from "../components/Products/ProductsTable ";
import producstData from "../data/productsData.json";
const Products = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const { categories } = producstData;
  const [products, setProducts] = useState(producstData.products);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchName = product.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchCategory = category === "" || product.category === category;
      const matchStatus = status === "" || product.status === status;
      return matchName && matchCategory && matchStatus;
    });
  }, [products, search, category, status]);
  return (
    <div className="text-gray-900 dark:text-gray-200 space-y-6">
      <ProductsHeader setProducts={setProducts} categories={categories} />
      <ProductsFilter
        categories={categories}
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        status={status}
        setStatus={setStatus}
      />
      <ProductsTable
        products={filteredProducts}
        setProducts={setProducts}
        categories={categories}
      />
    </div>
  );
};

export default Products;
