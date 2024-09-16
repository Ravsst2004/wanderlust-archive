import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  const footerLink = [
    {
      title: "About",
      link: "/",
    },
    {
      title: "Privacy Policy",
      link: "/",
    },
    {
      title: "Licensing",
      link: "/",
    },
    {
      title: "Contact",
      link: "/",
    },
  ];

  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {year}{" "}
          <Link to="/" className="hover:underline">
            Wanderlust Archive™
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          {footerLink.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.link} className="hover:underline me-4 md:me-6">
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
