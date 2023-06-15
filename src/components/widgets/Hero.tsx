import Image from "next/image";
import { BsCart2 } from "react-icons/bs";
import Hero_img from "../../assets/Images/header.webp";
import Featured1_img from "../../assets/Images/Featured1.webp";
import Featured2_img from "../../assets/Images/Featured2.webp";
import Featured3_img from "../../assets/Images/Featured3.webp";
import Featured4_img from "../../assets/Images/Featured4.webp";

const Hero = () => {
  return (
    <div className="md:flex justify-between mx-6 md:mx-32">
      {/* Left side */}
      <div className="mt-16 md:mt-32 max-w-lg">
        <span className="bg-[#e1edff] text-[#571eff] font-bold px-6 py-3 rounded-md ">Sale 70%</span>
        <h1 className="mt-8 md:mt-12 text-3xl md:text-5xl font-extrabold">An Industrial Take on Streetwear</h1>
        <p className="text-md mt-8 md:mt-16">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <button className="mt-10 flex shrink-0 bg-black text-white font-medium gap-5 px-7 md:px-14 py-3 md:py-6 border-2 border-gray-500">
          <BsCart2 size={24}/>
          <span >Start Shopping</span>
        </button>
        {/* Brands */}
        <div className="flex justify-between mt-16 md:mt-28">
        <Image src={Featured1_img} alt="Featured"/>
        <Image src={Featured2_img} alt="Featured"/>
        <Image src={Featured3_img} alt="Featured"/>
        <Image src={Featured4_img} alt="Featured"/>
        </div>
      </div>
      {/* Right side */}
      <div className="rounded-full shrink-0 bg-[#ffece3] mt-16 md:mr-28">
        <Image
          src={Hero_img}
          alt="hero_img"
          width={650}
          height={650}
          className="-mt-5"
        />
      </div>
    </div>
  );
};

export default Hero;
