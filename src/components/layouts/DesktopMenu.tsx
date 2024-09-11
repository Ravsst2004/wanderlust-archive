import { Link } from "react-router-dom";

type MobileMenuProps = {
  linkMenu: { name: string; link: string }[];
  isScrolled: boolean;
  blockLink: string[];
};

const DesktopMenu: React.FC<MobileMenuProps> = ({
  linkMenu,
  isScrolled,
  blockLink,
}) => {
  const currentPath = window.location.pathname;
  const scrolledClass =
    isScrolled || blockLink.includes(currentPath)
      ? "text-black border-black"
      : "md:text-white";

  return (
    <menu className="hidden lg:flex items-center gap-x-6 ">
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
