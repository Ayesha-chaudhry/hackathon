
import AddToCart from "@/components/shared/AddToCart";
import Qty from "@/components/shared/Qty";
import { Products } from "@/utils/mock";
import Image, { StaticImageData } from "next/image";

const sizes = ["XS", "S", "M", "L", "XL"];
const getProductsDetail = (id: string | number) => {
  return Products.filter((product) => product.id == id);
};

export default function Page({ params }: { params: { id: string } }) {
  const result = getProductsDetail(params.id);
  return (
    <div className="flex mt-16 py-10 flex-wrap">
      {result.map((product) => (
        <div key={product.id} className="flex justify-between gap-6">
          {/* Left Image */}
          <div>
            <Image src={product.image} alt={product.name} />
          </div>
          {/* Right Content */}
          <div>
            <div>
              <h1 className="text-2xl">{product.name}</h1>
              <h2 className="text-base font-semibold text-gray-400">
                {product.basetagline}
              </h2>
            </div>
            <div>
              <h3 className="text-xs font-semibold mt-6">SELECT SIZE</h3>
              {/* Sizes */}
              <div className="flex gap-x-3">
              {sizes.map((item, i) => (
                <div key={i}
                  className="center w-6 h-6 mt-2 rounded-full border hover:shadow-xl duration-300"
                >
                  <span className="text-[10px] text-center font-semibold text-gray-600">
                    {item}
                  </span>
                </div>
              ))}
              </div>
              {/* Quantity */}
              <div className="flex items-center mt-6 gap-x-3">
                <h3 className="text-[10px] font-semibold">Quantity:</h3>
                <Qty/>
              </div>
                {/* Add to Cart */}
                <div className="flex items-center gap-x-2 mt-5">
                  <AddToCart/>
                  <h2 className="text-2xl font-bold">${product.price.toFixed(2)}</h2>
                </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
