import ProductsHeader from "../components/Products/ProductsHeader";
import producstData from "../data/productsData.json";
const Products = () => {
  const { categories, products } = producstData;
  return (
    <div className="text-gray-900 dark:text-gray-200 space-y-6">
      <ProductsHeader />
    </div>
  );
};

export default Products;
