import React from "react";

const Navlinks =[
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
                    {
                        Navlinks.map(({id,name,link}) => (
                            <li key={id}>
                                <a href={link} className=" inline-block hover:text-primary text-xl font-semibold">{name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
   </>
  );
};

export default Navbar;
