import event1_img from "../../assets/Images/event1.webp";
import event2_img from "../../assets/Images/event2.webp";
import event3_img from "../../assets/Images/event3.webp";
import Image from "next/image";
const Promotion = () => {
  return (
    <div className="mx-6 md:mx-32 mt-28">
      <h2 className="text-[#3964f5] mb-4 font-bold text-center">PROMOTIONS</h2>
      <h1 className="text-xl md:text-4xl font-bold text-center">Our Promotions Events</h1>
      {/* Left Side */}
      <div className="md:flex gap-0 md:gap-10 mt-10">
        <div className="md:w-[70%] flex flex-col gap-4">
          <div className="flex justify-between bg-[#d6d6d8]">
            <div className="mx-16 mt-20 text-center justify-center">
              <h1 className="text-base md:text-3xl font-extrabold">GET UP TO 60%</h1>
              <p className="text-base md:text-xl">For the summer season</p>
            </div>
            <div className="">
              <Image src={event1_img} alt="event_img" />
            </div>
          </div>
          <div className="bg-black text-center  text-white p-5">
            <h1 className="text-4xl mt-5 font-bold mb-5">GET 30% Off</h1>
            <p className="text-lg mb-3">USE PROMO CODE</p>
            <button className="bg-[#474747] px-12 py-2 mb-4 tracking-widest rounded-md">
              DINEWEEKENDSALE
            </button>
          </div>
        </div>
        {/* Right Side */}
        <div className="md:flex md:w-[40%] gap-4">
          <div className="bg-[#efe1c7]">
            <h1 className="mt-6 mx-5 text-lg font-medium">Flex Sweatshirt</h1>
            <div className="mb-6 mx-5">
              <del>$100.00 </del>
              <span className="font-bold"> $75.00</span>
            </div>
            <Image src={event2_img} alt="men" />
          </div>
          <div className="bg-[#D7D7D9]">
            <h1 className="text-md font-medium mt-6 mx-5">
              Flex Push Button Bomber
            </h1>
            <div className="mb-6 mx-5">
              <del>$225.00 </del> <span className="font-bold"> $190.00</span>
            </div>
            <Image src={event3_img} alt="men" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
