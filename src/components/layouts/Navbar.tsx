import { IoMdMenu } from "react-icons/io";
import logo from "../../assets/Wanderlust Archive.png";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import DesktopMenu from "./DesktopMenu";

interface LinkMenuItem {
  name: string;
  link: string;
}

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const linkMenu: LinkMenuItem[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Contact Us",
      link: "/contact",
    },
  ];

  return (
    <>
      <nav
        className={`relative flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent`}
      >
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Wanderlust Archive Logo"
            className="w-8 md:w-12"
          />
          <h1 className="text-base md:text-xl lg:text-2xl">
            Wanderlust Archive
          </h1>
        </div>
        <div className="text-2xl cursor-pointer">
          <div
            onClick={() => setMenuIsOpen(!menuIsOpen)}
            className="border-2 p-1 rounded border-white md:hidden"
          >
            <IoMdMenu />
          </div>

          <DesktopMenu linkMenu={linkMenu} />
        </div>
      </nav>
      <div className="border-b-2"></div>

      <MobileMenu linkMenu={linkMenu} isOpen={menuIsOpen} />
    </>
  );
};

export default Navbar;
