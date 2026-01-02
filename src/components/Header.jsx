import React, { cacheSignal, useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";
import { RiDiscountPercentLine } from "react-icons/ri";
import { IoIosHelpBuoy } from "react-icons/io";
import { MdOutlinePerson } from "react-icons/md";
import { LuShoppingCart } from "react-icons/lu";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    setToggle(true);
  };
  const hideSideMenu = () => {
    setToggle(false);
  };

  const links = [
    {
      icon: <FaSearch />,
      name: "Search",
    },
    {
      icon: <RiDiscountPercentLine />,
      name: "Offers",
      sup: "New",
    },
    {
      icon: <IoIosHelpBuoy />,
      name: "Help",
    },
    {
      icon: <MdOutlinePerson />,
      name: "Sign In",
    },
    {
      icon: <LuShoppingCart />,
      name: "Cart",
    },
  ];
  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-500"
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[400px] h-full bg-white absolute duration-[600ms]"
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        ></div>
      </div>
      <header className="p-3 shadow-xl">
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="w-[100px]">
            <img src="/public/images/logo.png" className="w-full" alt="logo" />
          </div>
          <div>
            <span className="font-bold border-b-[3px] border-b-[black] ">
              xyz
            </span>
            Delhi, New Delhi, India
            <RxCaretDown
              onClick={showSideMenu}
              fontSize={25}
              className="font-bold inline text-[#fc8019]"
            />
          </div>
          <nav className="flex list-none gap-10 ml-auto text-[18px] font-semibold">
            {links.map((link, index) => {
              return (
                <li
                  key={index}
                  className="cursor-pointer flex items-center hover:text-[#fc8019] gap-3"
                >
                  {link.icon}
                  {link.name}
                  <sup className="text-[#fc8019]">{link.sup}</sup>
                </li>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
}
