import { Products } from "@/utils/mock";
import { StaticImageData } from "next/image";
import ProductCard from "../shared/ProductCard";
const ProductList = () => {
  const productsChecks = Products.slice(0, 3);

  return (
    <div className="flex justify-evenly mt-16">
      {productsChecks.map((product) => (
        <ProductCard
          key={product.id}
          title={product.name}
          price={product.price}
          img={product.image as StaticImageData}
          category={product.category}
          id={product.id}
        />
      ))}
    </div>
  );
};

export default ProductList;
