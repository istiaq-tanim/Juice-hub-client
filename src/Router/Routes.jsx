import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Login from "../Register/Login";
import SignUp from "../Register/SignUp";
import Order from "../Pages/Order/Order";
import DashBoard from "../Layout/DashBoard";
import UserCart from "../Pages/DashBoard/UserCart/UserCart";
import Review from "../Pages/DashBoard/Review/Review";
import PrivateRoute from './PrivateRoute';
import AllUsers from "../Pages/DashBoard/UserCart/AllUsers/AllUsers";
import AddItems from "../Pages/DashBoard/AddItems/AddItems";
import ManageItems from "../Pages/DashBoard/ManageItems/ManageItems";
import Payment from "../Pages/DashBoard/Payment/Payment";
import History from "../Pages/DashBoard/Payment/PayemntHistory/History";
import UserHome from "../Pages/DashBoard/UserHome/UserHome";
import AdminHome from "../Pages/DashBoard/AdminHome/AdminHome";

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
            path:"contact",
            element:<Contact></Contact>
        },
        {
            path:"order",
            element:<PrivateRoute><Order></Order></PrivateRoute>
        },
        {
          path: "login",
          element: <Login></Login>
        },
        {
          path:"register",
          element:<SignUp></SignUp>
        }
      ]
    },
    {
      path:"dashboard",
      element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children:[
        {
          path:"userCart",
          element:<UserCart></UserCart>
        },
        {
           path:"payment",
           element:<Payment></Payment>
        },
        {
          path:"review",
          element:<Review></Review>
        },
        {
          path:"allUsers",
          element:<AllUsers></AllUsers>
        },
        {
          path:"addItems",
          element:<AddItems></AddItems>
        },
        {
          path:"manageItems",
          element:<ManageItems></ManageItems>
        },
        {
          path:"paymentHistory",
          element:<History></History>
        },
        {
          path:"userHome",
          element:<UserHome></UserHome>
        },
        {
          path:"adminHome",
          element:<AdminHome></AdminHome>
        }
      ]
    }
  ]);

  export default router