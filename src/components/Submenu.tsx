import React from 'react';
import { Link } from 'react-router-dom';

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
 
};

const SkeletonPage: React.FC<{ type: number }> = ({ type }) => {
    const navigationLinks: LinkProps[] = typeConfig[type] || [];

    return (
        <div className="ml-0.5 mt-0.5">
            <nav className="bg-customBlue flex h-10 w-screen">
                {navigationLinks.map((link) => (
                    <div key={link.title} className="mt-2 ml-4">
                        <Link to={link.href} className="px-3 py-2 text-white focus:text-customOrange hover:text-customOrange transition-all duration-150 ease-in-out">
                            {link.title}
                        </Link>
                    </div>
                ))}
            </nav>
        </div>
    );
};

export default SkeletonPage;
