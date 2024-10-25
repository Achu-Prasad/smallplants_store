import { getProducts } from "@/lib/actions";
import { ProductType } from "@/lib/types";
import ProductCard from "./ProductCard";


const ProductList = async () => {
  const products = await getProducts();
  return (
    <div className="flex flex-col items-center gap-0 py-8 px-5">
      <p className="text-heading1-bold"> Products </p>
      {!products || products.length === 0 ? (
        <p>No Products Found</p>
      ) : (
        <div className="flex items-center justify-center gap-8">
          {products.map((product: ProductType) => (
            <ProductCard key ={product._id} product ={product}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
