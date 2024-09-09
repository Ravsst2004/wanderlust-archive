import { Link } from "react-router-dom";

type MobileMenuProps = {
  linkMenu: { name: string; link: string }[];
  isScrolled: boolean;
};

const DesktopMenu: React.FC<MobileMenuProps> = ({ linkMenu, isScrolled }) => {
  const currentPath = window.location.pathname;
  const scrolledClass = isScrolled ? "text-black border-black" : "md:text-white";

  return (
    <menu className="hidden md:flex items-center gap-x-6 ">
      {linkMenu.map((item) => {
        const currentPathClass = currentPath === item.link ? "border-b-2" : "";
        return (
          <Link key={item.name} to={item.link}>
            <p
              className={`md:text-base lg:text-lg ${currentPathClass} ${scrolledClass}`}
            >
              {item.name}
            </p>
          </Link>
        );
      })}
    </menu>
  );
};

export default DesktopMenu;
