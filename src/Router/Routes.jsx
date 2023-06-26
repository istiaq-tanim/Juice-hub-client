import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Login from "../Register/Login";
import SignUp from "../Register/SignUp";
import Order from "../Pages/Order/Order";

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
            element:<Order></Order>
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
  ]);

  export default router