import Image from "next/image";
import shrt from "../../assets/Images/feature.webp";

const Unique = () => {
  return (
    <section className="mx-6 md:mx-32 mt-40">
      <h1 className="flex justify-center md:justify-end font-bold text-4xl md:text-5xl md:mr-[40]">
        Unique and Authentic
        <br /> Vintage Designer Jewellery
      </h1>
      <div className="grid md:grid-cols-2 gap-8 mt-14 ">
        {/* Left Content */}
        <div className="grid gap-12 mx-auto relative">
          <div className="grid grid-cols-2 gap-20">
            <div>
              <div className="col-span-2 max-w-xs">
                <h1 className="font-bold text-lg mb-2">
                  Using God Quality <br />
                  Materials
                </h1>
                <p className="text-lg">
                Using good-quality materials ensures that your product meets stringent safety standards.
                </p>
              </div>
              <div className="col-span-2 max-w-xs mt-24">
                <h1 className="font-bold text-lg mb-2">
                  Modern Fashion Design
                </h1>
                <p className="text-lg">
                Modern fashion design encompasses the contemporary approach and trends in the world of fashion.
                </p>
              </div>
            </div>
            <div>
              <div className="col-span-2  max-w-xs">
                <h1 className="font-bold text-lg mb-2">
                  100% Handmade Products
                </h1>
                <p className="text-lg">
                Handmade products are crafted with meticulous attention to detail and an emphasis on craftsmanship.
                </p>
              </div>
              <div className="col-span-2 max-w-xs mt-32">
                <h1 className="font-bold text-lg mb-2">
                  Discount for Bulk Orders
                </h1>
                <p className="text-lg">
                A discount for bulk orders refers to a pricing incentive offered to customers.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -top-10 -z-10">
            <h1 className="text-9xl text-gray-100 font-bold">
              Different from others
            </h1>
          </div>
        </div>
        {/* Right Content */}
        <div className="sm:justify-center md:flex justify-between">
          <div>
            <Image src={shrt} alt="shirt" className="h-96 object-fit"/>
          </div>
          <div className="max-w-lg -mt-8 md:mt-8  ">
            <p className="text-lg ml-7 mt-20 ">
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>
            <button className="ml-5 mt-8 flex bg-black text-white font-medium px-12 py-2 border-2 border-gray-500">
              See All Product
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Unique;
