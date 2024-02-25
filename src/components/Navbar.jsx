import { data } from "autoprefixer";
import React from "react";

import { FaCaretDown, FaUser } from "react-icons/fa";

const Navlinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 1,
    name: "About",
    link: "/#",
  },
  {
    id: 1,
    name: "Contact",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Vegetables",
    link: "/#",
  },
  {
    id: 2,
    name: "Fruits",
    link: "/#",
  },
  {
    id: 3,
    name: "Grains",
    link: "/#",
  },
];

const Navbar = () => {
  return (
    <>
      <div className=" bg-white shadow-md">
        <div className="container flex justify-between py-4 sm:py-3">
          {/* Logo Section */}
          <div className="font-bold text-3xl">Logo</div>
          {/* Navlinks section */}
          <div className="">
            <ul className=" flex items-center gap-10">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id}>
                  <a
                    href={link}
                    className=" inline-block hover:text-primary text-xl font-semibold"
                  >
                    {name}
                  </a>
                </li>
              ))}
              {/* simple dropdown and links */}
              <li className=" cursor-pointer group relative">
                <a
                  href="/#"
                  className="inline-block hover:text-primary text-xl font-semibold"
                >
                  <div className=" flex items-center gap-[2px] py-2">
                    Categories
                    <span>
                      <FaCaretDown className=" group-hover:rotate-180 duration-300" />
                    </span>
                  </div>
                </a>
                {/* Dropdown secction */}
                <div className=" mt-2 absolute z-[9999] hidden group-hover:block w-[200px] bg-white text-black shadow-md">
                  <ul>
                    {DropdownLinks.map(({ id, name, link }) => (
                      <li key={id}>
                        <a
                          href={link}
                          className=" text-xl inline-block w-full rounded-md p-2 hover:bg-primary/20"
                        >
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              {/* Login button section */}
              <li>
                <button className=" flex justify-center items-start gap-2 bg-sceondary text-xl h-[40px] text-white px-5 py-2 hover:scale-105 duration-300">
                    <FaUser className=" mt-1"/>
                    My Account
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
