import SearchBar from "../uicomponents/SearchBar";
import OmzLogo from "../images/Openmynz_logo.png";
import { icons } from "../svg/Icons";
const Navbar: React.FC =()=>{
    return (
        <>
            <div className="h-12 w-screen bg-customBlue flex pt-3 justify-between">
                <div className="ml-12">
                    <div className="flex  justify-between lg:gap-80 ">
                        <p className="text-gray-300 font-bold sm:relative sm:right-2 md:right-10">
                            Good Evening Lisa!
                        </p>
                        <a href="https://openmynz.in/">
                            <img
                                src={OmzLogo}
                                className="h-10 w-auto sm:relative sm:right-2 md:right-4 bottom-2 relative lg:left-20 "
                            />
                        </a>
                        <SearchBar className="w-64 sm:relative sm:left-2 md:left-12 mr-12" />
                    </div>
                </div>
                <div className="mr-4">
                    <div className="flex gap-2 pl-2">
                        <icons.notification className="fill-gray-300" />
                        <icons.setting className="fill-gray-300" />
                        <icons.userprofile className="fill-customBlue pb-1 stroke-gray-300" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;