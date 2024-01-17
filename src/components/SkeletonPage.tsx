import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Submenu from "./Submenu";
import { Outlet } from 'react-router-dom';

const SkeletonPage: React.FC<{type:number}>=({type})=>{
    return(<><div className='fixed' >
      
    <Navbar />
 
    <div className='flex'>
    <Sidebar/>
    <div >
        
    <Submenu type={type}/>
   
    <Outlet/>
    </div>
    </div>
    </div></>)
}
export default SkeletonPage;