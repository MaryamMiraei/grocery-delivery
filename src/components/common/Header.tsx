import {
  Search,
  ShoppingCart,
  UserRound,
  Bike,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import MyCard from "./MyCard";
import { useMyCardStore } from "../../store/myCardStore";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen]= useState(false);
  const onClose = ()=> setIsCartOpen(false)
  const onOpen = ()=> setIsCartOpen(true);
  const {items}=useMyCardStore()
  const totalItemBuy = items.reduce((total,item)=> total+ item.quantity,0)
  
  // const menuRef = useRef(null);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (menuRef.current && !menuRef.current.contains(event.target)) {
  //       setIsMenuOpen(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  return (
    <header className="fixed z-50 w-full border-b border-gray-200 bg-[#f8f8f7]">
      <div className="mx-auto flex h-[64px] max-w-[1280px] items-center justify-between gap-5 px-3 lg:px-8">
        <div className="flex items-center gap-2">
          <Bike size={25} strokeWidth={2.5} className="text-[#173d32]" />
          <h1 className=" text-lg lg:text-[24px] font-bold tracking-wide text-[#263d35] ">
            InstantMart
          </h1>
        </div>
        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-[15px]">
          <NavLink
            to="/"
            className="text-[#263d35] transition hover:text-orange-500"
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className="text-[#263d35] transition hover:text-orange-500"
          >
            Products
          </NavLink>

          <NavLink
            to="/deals"
            className="text-[#e86f25] transition hover:text-orange-600"
          >
            Deals
          </NavLink>
        </nav>

        {/* Right section */}
        <div className=" flex grow items-center justify-end gap-6">
          {/* Search */}
          <div className="flex grow h-[38px] max-w-[395px] min-w-[200px] items-center gap-2 rounded-full border border-[#e8dac7] bg-[#f5f1eb] px-4">
            <Search size={18} className="text-gray-500" />

            <input
              type="text"
              placeholder="Search for groceries..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-gray-500"
            />
          </div>

          {/* Cart */}
          <button className="transition hover:scale-110 relative"
          onClick={onOpen}
          >
            <ShoppingCart
              size={24}
              strokeWidth={2}
              className="text-[#263d35] "
            />
           {totalItemBuy >0 &&  <div className="absolute -top-1 left-4 size-4 bg-app-orange-dark text-white rounded-full text-[11px]">{totalItemBuy}</div>}
          </button>
          {isCartOpen && <MyCard onClose={onClose}/>}

          {/* Menu / Close */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={25} strokeWidth={2} />
            ) : (
              <Menu size={25} strokeWidth={2} />
            )}
          </button>

          {/* Mobile Menu */}
          <div
            // ref={menuRef}
            className={`
    absolute right-[20px] top-[60px] z-50
    w-[225px]
    overflow-hidden
    rounded-xl
    border border-gray-200
    bg-white
    shadow-md
    lg:hidden

    transition-all
    duration-300
    ease-out

    ${
      isMenuOpen
        ? "translate-y-0 opacity-100"
        : "-translate-y-10 opacity-0 pointer-events-none"
    }
  `}
          >
            {/* Sign In */}
            <NavLink
              to="/login"
              onClick={() => setIsMenuOpen(false)}
              className="flex w-full items-center gap-4 px-5 py-4 text-left text-[14px] text-gray-600 hover:bg-gray-50 hover:text-black"
            >
              <UserRound size={17} strokeWidth={1.7} />
              <span>Sign In</span>
            </NavLink>

            {/* Home */}
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="flex w-full items-center gap-4 px-5 py-4 text-left text-[14px] text-gray-600 hover:bg-gray-50 hover:text-black"
            >
              <ArrowUpRight size={17} strokeWidth={1.7} />
              <span>Home</span>
            </NavLink>

            {/* Products */}
            <NavLink
              to="/products"
              onClick={() => setIsMenuOpen(false)}
              className="flex w-full items-center gap-4 px-5 py-4 text-left text-[14px] text-gray-600 hover:bg-gray-50 hover:text-black"
            >
              <ArrowUpRight size={17} strokeWidth={1.7} />
              <span>Products</span>
            </NavLink>

            {/* Deals */}
            <NavLink
              to="/deals"
              onClick={() => setIsMenuOpen(false)}
              className="flex w-full items-center gap-4 px-5 py-4 text-left text-[14px] text-gray-600 hover:bg-gray-50 hover:text-black"
            >
              <ArrowUpRight size={17} strokeWidth={1.7} />
              <span>Deals</span>
            </NavLink>
          </div>

          {/* Sign In - Desktop */}
          <button className="hidden lg:flex items-center gap-2 rounded-full bg-[#123c2e] px-5 py-2.5 text-white">
            <UserRound size={16} />
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
