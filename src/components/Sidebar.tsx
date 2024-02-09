import { NavLink } from "react-router-dom";
import Logo from "@/images/omz_logo.png";
import "@/styles/LinkStyle.css"
interface LinkProps {
  title: string;
  href: string;
}

const navigationLinks: LinkProps[] = [
  { title: "Home", href: "/main" },
  { title: "Finance", href: "/finance" },
  { title: "HR", href: "/hr" },
  { title: "IT", href: "/kk" },
  { title: "Engineering", href: "/engineering" },
  { title: "Logistics", href: "/jj" },
  { title: "Contact", href: "/bb" },
];

const Sidebar: React.FC = () => {
  return (
    <div>
      <div className="  ">
        <nav id="navlink" className="bg-customBlue flex-col w-36   overflow-y-auto h-screen mt-0.5">
          <img src={Logo} className="w-20 h-20 mt-6 ml-6 mb-6" />
          {navigationLinks.map((link) => (
            <div key={link.title} className="  p-2 ">
              <NavLink 
                to={link.href}
                className="   px-3 py-0.5 text-white hover:text-customOrange focus:text-customOrange  transition-all duration-150 ease-in-out"
                
              >
               {link.title}
              </NavLink>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};
export default Sidebar;
