import { Link } from "react-router-dom";

interface LinkMenuItem {
  name: string;
  link: string;
}

interface MobileMenuProps {
  linkMenu: LinkMenuItem[];
  isOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ linkMenu, isOpen }) => {
  const currentPath = window.location.pathname;

  return (
    <>
      <menu
        className={`flex md:hidden flex-col gap-4 bg-white transition-all duration-300 overflow-hidden fixed top-16 z-10 w-full ${
          isOpen
            ? "scale-y-100 opacity-100 px-6 py-4"
            : "scale-y-0 opacity-0 p-0"
        }`}
        style={{ transformOrigin: "top" }}
      >
        {linkMenu.map((item) => (
          <Link key={item.name} to={item.link}>
            <p
              className={`text-lg border-b-2 ${
                currentPath === item.link
                  ? "text-orange-600 border-orange-600"
                  : ""
              }`}
            >
              {item.name}
            </p>
          </Link>
        ))}
      </menu>
    </>
  );
};

export default MobileMenu;
