import Image from "next/image";
import Logo from "../../assets/Images/Logo.webp";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";

const Footer = () => {
  return (
    <>
      <section className="mx-6 md:mx-32 mt-40">
        <div className="grid md:grid-cols-5 ">
          {/* Logo */}
          <div className="md:col-span-2">
            <Image src={Logo} alt="logo" className="-mt-8 w-60" />
            <p className="mt-12 max-w-md text-[#666666]">
              Small, artisan label that offers a thoughtfully curated collection
              of high quality everyday essentials made.
            </p>
            <div className="flex space-x-5 mt-10 md:mt-14 mb-8 md:mb-0">
              <div className="bg-[#F1F1F1] p-3 rounded-lg">
                <FaTwitter size={24} />
              </div>
              <div className="bg-[#F1F1F1] p-3 rounded-lg">
                <GrFacebookOption size={24} />
              </div>
              <div className="bg-[#F1F1F1] p-3 rounded-lg">
                <FaLinkedinIn size={24} />
              </div>
            </div>
          </div>
          {/* Company */}

          <ul>
            <li className="text-[#666666] font-extrabold text-xl md:mb-4 ">
              Company
            </li>
            <li className="text-[#666666] font-medium py-2">About</li>
            <li className="text-[#666666] font-medium py-2">Terms of Use</li>
            <li className="text-[#666666] font-medium py-2">Privacy Policy</li>
            <li className="text-[#666666] font-medium py-2">How it Works</li>
            <li className="text-[#666666] font-medium py-2 mb-8">Contact Us</li>
          </ul>
          {/* Support */}

          <ul>
            <li className="text-[#666666] font-extrabold text-xl md:mb-4">
              Support
            </li>
            <li className="text-[#666666] font-medium py-2">Support Carrer</li>
            <li className="text-[#666666] font-medium py-2">24h Service</li>
            <li className="text-[#666666] font-medium py-2 mb-8">Quick Chat</li>
          </ul>
          <div>
            <div className="text-[#666666] font-extrabold text-xl md:mb-4">
              Contact
            </div>
            <div className="text-[#666666] font-medium py-2">Whatsapp</div>
            <div className="text-[#666666] font-medium py-2 mb-8">Support 24h</div>
          </div>
        </div>
      </section>
      <div className="border border-gray-700 md:mt-32"></div>
      <div className="mx-6 md:mx-32 md:flex justify-between my-6 ">
        <div className="text-[#666666]">Copyright © 2023 Cloth Market</div>
        <div className="text-[#666666]">
          Design by. <strong className="text-black">Ayesha Ch</strong>
        </div>
        <div className="text-[#666666]">
          Code by. <strong className="text-black">Ayesha Ch on github</strong>
        </div>
      </div>
    </>
  );
};

export default Footer;
