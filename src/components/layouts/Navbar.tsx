import { IoMdMenu } from "react-icons/io";
import logo from "../../assets/Wanderlust Archive.png";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import DesktopMenu from "./DesktopMenu";

interface LinkMenuItem {
  name: string;
  link: string;
}

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const currentPath = window.location.pathname;
  const lastPath = currentPath.split("/").pop();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
  });

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
      name: "Destinations",
      link: "/destinations",
    },
    {
      name: "Contact Us",
      link: "/contact",
    },
  ];
  const blockLink = ["/destinations", `/destinations/${lastPath}`];

  return (
    <>
      <nav
        className={`w-full fixed z-20 flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 xl:px-40 transition-colors ease-in duration-300 ${
          isScrolled || blockLink.includes(currentPath)
            ? "bg-white"
            : "bg-white md:bg-transparent"
        }`}
      >
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Wanderlust Archive Logo"
            className="w-8 md:w-12"
          />
          <h1
            className={`text-base md:text-xl lg:text-2xl ${
              isScrolled || blockLink.includes(currentPath)
                ? "text-black"
                : "md:text-white"
            }`}
          >
            Wanderlust Archive
          </h1>
        </div>
        <div className="text-2xl cursor-pointer">
          <div
            onClick={() => setMenuIsOpen(!menuIsOpen)}
            className="border-2 p-1 rounded border-white lg:hidden"
          >
            <IoMdMenu />
          </div>

          <DesktopMenu
            linkMenu={linkMenu}
            isScrolled={isScrolled}
            blockLink={blockLink}
          />
        </div>
      </nav>
      <div className="border-b-2"></div>

      <MobileMenu linkMenu={linkMenu} isOpen={menuIsOpen} />
    </>
  );
};

export default Navbar;
