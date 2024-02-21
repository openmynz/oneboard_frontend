import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx',
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
// import Calendar from './components/Engineering/Calendar.js'
// import EmployeeSpecific from './components/Engineering/EmployeeSpecific.tsx'
import Manage from './components/Engineering/Manage.tsx'
import Dashboard from './components/finance/Dashboard.tsx'
import Issue from './components/finance/Issues.tsx'
import LeaveTracker from './components/finance/LeaveTracker.tsx'
import {
  QueryClient,
  QueryClientProvider,
  
} from '@tanstack/react-query'
import AddEmployeeTable from './components/hr/AddEmployeeTable.tsx'
const queryClient = new QueryClient()

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
    path:"engineering",
    element:<SkeletonPage type={2}/>,
    children:[{index:true,element:<Navigate to ={'manage'}/>},{path:"manage",element:<Manage/>}]
  },
  {
    path:"finance",
    element:<SkeletonPage type={3}/>,
    children:[{index:true,element:<Navigate to = {"dashboard"}/>},{path:"dashboard",element:<Dashboard/>},{path:"issues",element:<Issue/>}]
  },
  {
    path:"hr",
    element:<SkeletonPage type={4}/>,
    children:[{index:true,element:<Navigate to = {"leave-tracker"}/>},{path:"leave-tracker",element:<LeaveTracker/>},{path:"edit-employee",element:<AddEmployeeTable/>}]
  }
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>  <QueryClientProvider client={queryClient}>
  

    <RouterProvider router={router} />
    </QueryClientProvider>
    {/* <App /> */}
  </React.StrictMode>,
)
