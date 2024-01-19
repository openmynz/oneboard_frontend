import { Link } from "react-router-dom";
import Logo from "../images/omz_logo.png";
interface LinkProps {
  title: string;
  href: string;
}

const navigationLinks: LinkProps[] = [
  { title: "Home", href: "/main" },
  { title: "Engineering", href: "/leave" },
  { title: "Finance", href: "/finance" },
  { title: "HR", href: "#" },
  { title: "IT", href: "#" },
  { title: "Logistics", href: "#" },
  { title: "Contact", href: "#" },
];

const Sidebar: React.FC = () => {
  return (
    <div>
      <div className="  ">
        <nav className="bg-customBlue flex-col w-36  overflow-y-auto h-screen mt-0.5">
          <img src={Logo} className="w-20 h-20 mt-6 ml-6 mb-6" />
          {navigationLinks.map((link) => (
            <div key={link.title} className="mt-2 ml-4 ">
              <Link
                to={link.href}
                className="px-3 py-2 text-white hover:text-customOrange transition-all duration-150 ease-in-out"
              >
                {link.title}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};
export default Sidebar;
