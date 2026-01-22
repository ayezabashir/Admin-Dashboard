import ProductsFilter from "../components/Products/ProductsFilter";
import ProductsHeader from "../components/Products/ProductsHeader";
import ProductsTable from "../components/Products/ProductsTable ";
import producstData from "../data/productsData.json";
const Products = () => {
  const { categories, products } = producstData;
  return (
    <div className="text-gray-900 dark:text-gray-200 space-y-6">
      <ProductsHeader />
      <ProductsFilter categories={categories} />
      <ProductsTable products={products} />
    </div>
  );
};

export default Products;
