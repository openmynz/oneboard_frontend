import SearchBar from "../uicomponents/SearchBar";
import { icons } from "../svg/Icons";
const Navbar: React.FC =()=>{
    return (<><div className=" h-12    w-screen  bg-customBlue flex pt-3 justify-between ">
        <div className="ml-12">
        <div className="flex gap-96">
        <p className="text-gray-300 font-bold pr-5 pl-1">Hello Lisa!</p>
        <SearchBar className="w-64  "/>
        </div>
        </div>
        <div className="mr-4" >
            <div className="flex  gap-2 pl-2">
        <icons.notification className="fill-gray-300 "         />
        <icons.setting className="fill-gray-300 "/>
        <icons.userprofile className="fill-customBlue pb-1 stroke-gray-300 "/>
        </div>
        </div>
       
    </div> </>)

}
export default Navbar;

