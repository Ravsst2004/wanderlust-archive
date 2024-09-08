import { Link } from "react-router-dom";

interface LinkMenuItem {
  name: string;
  link: string;
}

interface MobileMenuProps {
  linkMenu: LinkMenuItem[];
}

const DesktopMenu: React.FC<MobileMenuProps> = ({ linkMenu }) => {
  const currentPath = window.location.pathname;

  return (
    <menu className="hidden md:flex items-center gap-x-6 ">
      {linkMenu.map((item) => (
        <Link key={item.name} to={item.link}>
          <p
            className={`md:text-base lg:text-lg ${
              currentPath === item.link ? "border-b-2" : ""
            }`}
          >
            {item.name}
          </p>
        </Link>
      ))}
    </menu>
  );
};

export default DesktopMenu;
