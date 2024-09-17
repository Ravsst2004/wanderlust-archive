import { Link } from "react-router-dom";

type MobileMenuProps = {
  linkMenu: { name: string; idLink: string; link?: string }[];
  isScrolled: boolean;
};

const DesktopMenu: React.FC<MobileMenuProps> = ({ linkMenu, isScrolled }) => {
  const currentUrl = window.location.pathname;
  const lastPath = currentUrl.split("/").pop();

  const InPage = [`/destinations/${lastPath}`];

  const scrolledClass =
    isScrolled || InPage.includes(currentUrl)
      ? "text-black border-black"
      : "md:text-white";

  return (
    <menu className="hidden lg:flex items-center gap-x-6 ">
      {linkMenu.map((item) => {
        return item.link ? (
          <Link key={item.name} to={item.link} className="transition-all">
            <p className={`md:text-base lg:text-lg ${scrolledClass}`}>
              {item.name}
            </p>
          </Link>
        ) : (
          <a
            key={item.name}
            href={`#${item.idLink}`}
            className="transition-all"
          >
            <p className={`md:text-base lg:text-lg ${scrolledClass}`}>
              {item.name}
            </p>
          </a>
        );
      })}
    </menu>
  );
};

export default DesktopMenu;
