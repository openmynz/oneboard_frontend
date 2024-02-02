import React from "react";
import { NavLink } from "react-router-dom";

interface LinkProps {
  title: string;
  href: string;
}

interface TypeConfig {
  [key: number]: LinkProps[];
}

const typeConfig: TypeConfig = {
  1: [
    { title: "Profile", href: "profile" },
    { title: "Assets Owned", href: "assets" },
    { title: "Goal", href: "goal" },
  ],
  2: [
    { title: "Calendar", href: "calendar" },
    { title: "EmployeeSpecific", href: "employee-specific" },
    { title: "Issues", href: "issues" },
  ],
  3: [
    { title: "Info", href: "dashboard" },
    { title: "Issues", href: "issues" },
  ],
  4: [
    {
      title: "Leave Tracker",
      href: "leave-tracker",
    },
  ],
};

const SkeletonPage: React.FC<{ type: number }> = ({ type }) => {
  const navigationLinks: LinkProps[] = typeConfig[type] || [];

  return (
    <div className="ml-0.5 mt-0.5">
      <nav id="submenu"
      className="bg-customBlue flex h-10 w-screen">
        {navigationLinks.map((link) => (
          <div key={link.href} className="mt-2 ml-4">
            <NavLink
              to={link.href}
              className="px-2   text-white focus:text-customOrange hover:text-customOrange transition-all duration-150 ease-in-out"
            >
              {link.title}
            </NavLink>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default SkeletonPage;
