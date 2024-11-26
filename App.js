import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./src/components/Header";
import Home from "./src/components/Home";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Footer from "./src/components/Footer";
import Services from "./src/components/Services";
import Countries from "./src/components/Countries";
import Counseling from './src/components/Counseling';
import ServicesOption from './src/components/ServicesOption';
import Australia from './src/components/Australia';
// import Breadcrumb from './src/components/BreadCrumb';
import { RouterProvider, createBrowserRouter, Outlet, useLocation } from 'react-router-dom';
import Error from "./src/components/Error";
import Counseling from './src/components/Counseling';

const App = () => {
  const location = useLocation();
  // const pathnames = location.pathname.split('/').filter((x) => x);
  return (
    <div>
        <Header/>
        {/* <Breadcrumb pathnames={pathnames} /> */}
        <Outlet/>
        <Footer/>
    </div>
  )
}

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/services",
        element:<Services/>
      },
      {
        path:"/countries",
        element:<Countries/>
      },
      {
        path:"/counseling",
        element:<Counseling/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/australia",
        element:<Australia/>
      },
      {
        path:"/services/:serId",
        element:<ServicesOption/>
      }
    ],
    errorElement:<Error/>
  },
])

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);