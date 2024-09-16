type MobileMenuProps = {
  linkMenu: { name: string; idLink: string }[];
  isScrolled: boolean;
};

const DesktopMenu: React.FC<MobileMenuProps> = ({ linkMenu, isScrolled }) => {
  const scrolledClass = isScrolled
    ? "text-black border-black"
    : "md:text-white";

  return (
    <menu className="hidden lg:flex items-center gap-x-6 ">
      {linkMenu.map((item) => {
        return (
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
