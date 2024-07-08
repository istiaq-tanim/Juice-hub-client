import {
  createBrowserRouter,
} from "react-router-dom";
import DashBoard from "../Layout/DashBoard";
import Main from "../Layout/Main";
import Contact from "../Pages/Contact/Contact";
import AddItems from "../Pages/DashBoard/AddItems/AddItems";
import AdminHome from "../Pages/DashBoard/AdminHome/AdminHome";
import ManageItems from "../Pages/DashBoard/ManageItems/ManageItems";
import History from "../Pages/DashBoard/Payment/PayemntHistory/History";
import Payment from "../Pages/DashBoard/Payment/Payment";
import UserDashboard from "../Pages/DashBoard/UerDashboard/UserDashboard";
import UpdateProfile from "../Pages/DashBoard/UpdateProfile/UpdateProfile";
import AllUsers from "../Pages/DashBoard/UserCart/AllUsers/AllUsers";
import CartItem from "../Pages/DashBoard/UserCart/Cart/CartItem";
import UserHome from "../Pages/DashBoard/UserHome/UserHome";
import Home from "../Pages/Home/Home/Home";
import Order from "../Pages/Order/Order";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Login from "../Register/Login";
import SignUp from "../Register/SignUp";
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "contact",
        element: <Contact></Contact>
      },
      {
        path: "order",
        element: <Order></Order>
      },
      {
        path: "details/:id",
        element: <ProductDetails></ProductDetails>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <SignUp></SignUp>
      },
      {
        path: "userCart",
        element: <CartItem></CartItem>
      }
    ]
  },
  {
    path: "dashboard",
    element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children: [
      {
        path: "payment",
        element: <Payment></Payment>
      },
      {
        path: "allUsers",
        element: <AllUsers></AllUsers>
      },
      {
        path: "addItems",
        element: <AddItems></AddItems>
      },
      {
        path: "manageItems",
        element: <ManageItems></ManageItems>
      },
      {
        path: "paymentHistory",
        element: <History></History>
      },
      {
        path: "userHome",
        element: <UserHome></UserHome>
      },
      {
        path: "userDashboard",
        element: <UserDashboard></UserDashboard>
      },
      {
        path: "userProfile",
        element: <UserHome></UserHome>
      },
      {
        path: "updateProfile",
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: "adminHome",
        element: <AdminHome></AdminHome>
      }
    ]
  }
]);

export default router