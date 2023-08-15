import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Dashboard from "../layouts/Dashboard";
import AdminLogin from "../pages/AdminPage/adminLogin/AdminLogin";
import AdminSignup from "../pages/AdminPage/adminSignup/AdminSignup";
import JobCreation from "../pages/AdminPage/JobCreation/JobCreation";
import AdminHome from "../pages/AdminPage/AdminHome/AdminHome";
import Profile from "../pages/Profile/Profile";
import Blog from "../pages/Blog/Blog";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"login",
          element:<Login></Login>
        },
        {
          path:"signup",
          element:<SignUp></SignUp>
        },
        {
          path:"about",
          element:<About></About>
        },
        {
          path:"contact",
          element:<Contact></Contact>
        },
        {
          path:"profile",
          element:<Profile></Profile>
        },
        {
          path:"blog",
          element:<Blog></Blog>
        }
      ]
    },
    {
      path: "dashboard",
      element: <Dashboard></Dashboard>,
      children:[
        {
            path:"adminLogin",
            element:<AdminLogin></AdminLogin>
        },
        {
            path:"adminSignup",
            element:<AdminSignup></AdminSignup>
        },
        {
          path:"adminHome",
          element:<AdminHome></AdminHome>
        },
        {
          path:"createJob",
          element:<JobCreation></JobCreation>
        },

      ]
    },
  ]);

  export default router;
