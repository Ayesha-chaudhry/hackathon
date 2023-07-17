import Image from "next/image";
import Logo from "../../assets/Images/Logo.webp";
import Link from "next/link";
import { ShoppingCart, Search } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-6">
      {/* Logo */}
      <div className="w-36 flex-shrink-0">
        <Link href={"/"}>
          <Image className="" src={Logo} alt="logo" width={130} height={23} />
        </Link>
      </div>
      {/* Navigation */}
      <div className="hidden md:flex justify-between items-center cursor-pointer w-full">
        <ul
          className={`flex items-center px-3 py-1 font-medium text-lg space-x-6`}
        >
          <li>
            <Link href="/category/female">Female</Link>
          </li>
          <li>
            <Link href="/category/male">Male</Link>
          </li>
          <li>
            <Link href="/category/kids">Kids</Link>
          </li>
          <li>
            <Link href="/category/sports">sports</Link>
          </li>
          <li>
            <Link href="/products">All Products</Link>
          </li>
        </ul>

        {/* Searchbar */}
        <div className="flex items-center border rounded-xl shrink-0">
          <Search className="m-2" />
          <input
            type="text"
            placeholder="What you looking for?"
            className="w-80 pl-1 py-1"
          />
        </div>
        {/* icons */}
        <div className="lg:flex hidden items-center gap-5">
          <button className="shrink-0 border text-sm px-4 py-2 rounded-xl hover:bg-[#571eff] hover:text-white transition-all duration-300">
            Sign in
          </button>
          <div className="flex items-center hover:scale-105 duration-300 delay-200 shrink-0">
            <div className="relative h-11 w-11 bg-gray-200 rounded-full flex justify-center items-center">
              <ShoppingCart className="text-xl text-bold text-black -mt-1 font-bold" />
              <div className="absolute z-10 top-1 right-2 h-4 w-4 text-xs flex justify-center items-center  bg-[#f02d34] rounded-full text-white">
                0
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive */}

      <div className="block lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            
              <Menu className="w-8 h-8" />
          
          </SheetTrigger>
          <SheetContent>
            <Link href={"/"}>
              <Image
                className="mt-12"
                src={Logo}
                alt="logo"
                width={130}
                height={23}
              />
            </Link>
            <div className="mt-12 flex items-center justify-end gap-5">
              <button className="shrink-0 border text-sm px-4 py-2 rounded-full hover:bg-[#571eff] hover:text-white transition-all duration-300">
                Sign in
              </button>
              <div className="flex items-center hover:scale-105 duration-300 delay-200 shrink-0">
                <div className="relative h-11 w-11 bg-gray-200 rounded-full flex justify-center items-center">
                  <ShoppingCart className="text-xl text-bold text-black -mt-1 font-bold" />
                  <div className="absolute z-10 top-1 right-2 h-4 w-4 text-xs flex justify-center items-center  bg-[#f02d34] rounded-full text-white">
                    0
                  </div>
                </div>
              </div>
            </div>
            <ul className={`mt-8 font-bold text-xl `}>
              <li className="">
                <Link href="/category/female">Female</Link>
              </li>
              <li>
                <Link href="/category/male">Male</Link>
              </li>
              <li>
                <Link href="/category/kids">Kids</Link>
              </li>
              <li>
                <Link href="/category/sports">sports</Link>
              </li>
              <li>
                <Link href="/products">All Products</Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
