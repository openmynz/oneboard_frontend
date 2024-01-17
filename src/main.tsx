import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import SkeletonPage from './components/SkeletonPage.tsx'
import Login from './components/Login.tsx'
import './index.css'
import '@radix-ui/themes/styles.css';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Profile from './components/home/Profile.tsx'
import Assets from './components/home/Assets.tsx'
import Goal from     './components/home/Goal.tsx'
import Calendar from './components/LeaveTracker/Calendar.js'
import EmployeeSpecific from './components/LeaveTracker/EmployeeSpecific.tsx'
import Issues from './components/LeaveTracker/Issues.tsx'
// import Root from './routes/root';
// import { Skeleton } from '@radix-ui/themes'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    
    path:"main",
    element:<SkeletonPage type={1}/>,
    children:[{index:true,element:(<Navigate to={'profile'}/>)},{path:"profile",element:<Profile/>},{path:"assets",element:<Assets/>},{path:"goal",element:<Goal/>}]
  },
  {
    path:"leave",
    element:<SkeletonPage type={2}/>,
    children:[{index:true,element:<Navigate to ={'calendar'}/>},{path:'calendar',element:<Calendar/>},{path:"employee-specific",element:<EmployeeSpecific/>},{path:"issues",element:<Issues/>}]
  }
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
