interface LinkMenuItem {
  name: string;
  idLink: string;
}

interface MobileMenuProps {
  linkMenu: LinkMenuItem[];
  isOpen: boolean;
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  linkMenu,
  isOpen,
  setMenuIsOpen,
}) => {
  return (
    <>
      <menu
        className={`flex lg:hidden flex-col gap-4 bg-white transition-all duration-300 overflow-hidden fixed top-16 z-10 w-full ${
          isOpen
            ? "scale-y-100 opacity-100 px-6 py-4"
            : "scale-y-0 opacity-0 p-0"
        }`}
        style={{ transformOrigin: "top" }}
      >
        {linkMenu.map((item) => (
          <a
            key={item.name}
            href={`#${item.idLink}`}
            onClick={() => setMenuIsOpen(false)}
          >
            <p className={`text-lg border-b-2`}>{item.name}</p>
          </a>
        ))}
      </menu>
    </>
  );
};

export default MobileMenu;
