import { FaCartPlus, FaFileAlt, FaHome, FaRegThumbsUp, FaShoppingBag, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from "react-router-dom";
import { useAdmin } from "../Hooks/useAdmin";
import { useCart } from "../Hooks/usecart";
import Navbar from '../Shared/Navbar';
const DashBoard = () => {
    const [isAdmin] = useAdmin()
    const [cart] = useCart()
    return (
        <>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center">
                    <Navbar className="w-full"></Navbar>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-gradient-to-r from-teal-200 to-teal-500">

                        {
                            isAdmin?.admin ?
                                <>
                                    <li className="text-lg"><NavLink to="/dashboard/adminHome"><FaHome></FaHome>Admin Home</NavLink></li>

                                    <li className="text-lg"><NavLink to="/dashboard/addItems"><FaUtensils></FaUtensils>Add Items</NavLink></li>
                                    <li className="text-lg"><NavLink to="/dashboard/manageItems"><FaFileAlt></FaFileAlt>Manage Items</NavLink></li>
                                    <li className="text-lg"><NavLink to="/dashboard/allUsers"><FaUsers></FaUsers>All Users</NavLink></li>
                                    <div className="divider"></div>
                                </> :
                                <>
                                    <li className="text-lg"><NavLink to="/dashboard/userHome"><FaHome></FaHome>User Home</NavLink></li>
                                    <li className="text-lg"><NavLink to="/dashboard/userCart"><FaCartPlus></FaCartPlus>My Cart
                                        <span className="badge inl badge-accent">+{cart?.length || 0}</span></NavLink></li>
                                    <li className="text-lg"><NavLink to="/dashboard/paymentHistory"><FaWallet></FaWallet>Payment History</NavLink></li>
                                    <li className="text-lg"><NavLink to="/dashboard/review"><FaRegThumbsUp></FaRegThumbsUp>Review</NavLink></li>
                                    <div className="divider"></div>
                                </>
                        }
                        <li className="text-lg"><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
                        <li className="text-lg"><NavLink to="/order"><FaShoppingBag></FaShoppingBag>Order Juice</NavLink></li>
                    </ul>

                </div>
            </div>
        </>
    );
};

export default DashBoard;