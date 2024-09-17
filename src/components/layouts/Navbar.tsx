import { IoMdMenu } from "react-icons/io";
import logo from "../../assets/Wanderlust Archive.png";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import DesktopMenu from "./DesktopMenu";
import { Link } from "react-router-dom";

interface LinkMenuItem {
  name: string;
  idLink: string;
  link?: string;
}

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const currentUrl = window.location.pathname;
  const lastPath = currentUrl.split("/").pop();

  const notInPage = `/destinations/${lastPath}`;

  const scrolledClass =
    isScrolled || notInPage.includes(currentUrl)
      ? "text-black"
      : "md:text-white";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
  });

  const linkMenu: LinkMenuItem[] = [
    {
      name: "Home",
      idLink: "home",
      link: "/",
    },
    {
      name: "About Us",
      idLink: "about-us",
    },
    {
      name: "Destinations",
      idLink: "destinations",
    },
    {
      name: "Guide Book",
      idLink: "guide-book",
    },
  ];

  return (
    <>
      <nav
        className={`w-full fixed z-20 flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 xl:px-40 transition-colors ease-in duration-300 ${
          isScrolled ? "bg-white" : "bg-white md:bg-transparent"
        }`}
      >
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Wanderlust Archive Logo"
            className="w-8 md:w-12"
          />
          <Link to="/">
            <h1
              className={`text-base md:text-xl lg:text-2xl ${
                isScrolled ? "text-black" : { scrolledClass }
              }`}
            >
              Wanderlust Archive
            </h1>
          </Link>
        </div>
        <div className="text-2xl cursor-pointer">
          <div
            onClick={() => setMenuIsOpen(!menuIsOpen)}
            className="border-2 p-1 rounded border-white lg:hidden"
          >
            <IoMdMenu />
          </div>

          <DesktopMenu linkMenu={linkMenu} isScrolled={isScrolled} />
        </div>
      </nav>
      <div className="border-b-2"></div>

      <MobileMenu
        linkMenu={linkMenu}
        isOpen={menuIsOpen}
        setMenuIsOpen={setMenuIsOpen}
      />
    </>
  );
};

export default Navbar;
