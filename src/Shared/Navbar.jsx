
import { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import { useGetCartQuery } from "../features/cart/cartApi";
import { useGetUserQuery } from "../features/user/userApi";
import { useAdmin } from "../Hooks/useAdmin";
import { UserContext } from "../Provider/AuthProvider";
const Navbar = () => {
      const { user, logOut } = useContext(UserContext)
      const [isAdmin] = useAdmin()
      const email = user?.email
      const { data: cartItems } = useGetCartQuery(user?.email)

      const handleLogout = () => {
            logOut()
                  .then(() => { })
                  .catch(error => console.log(error.message))
      }

      const { data: profile } = useGetUserQuery(email);
      return (
            <div className="navbar bg-gradient-to-r from-teal-200 to-teal-500">
                  <div className="flex-1">
                        <label htmlFor="my-drawer-2" className="drawer-button lg:hidden cursor-pointer">
                              <GiHamburgerMenu />
                        </label>

                  </div>
                  <div className="flex-none ju gap-5">
                        <div className="bg-white flex px-1 py-1 rounded-full border border-blue-500 overflow-hidden max-w-md mx-auto font-[sans-serif]">
                              <input type='email' placeholder='Search Something...' className="w-full outline-none bg-white pl-2 text-sm" />
                              <button type='button'
                                    className="transition-all text-white text-sm rounded-full px-2 py-1.5">
                                    <FcSearch size={22} />
                              </button>
                        </div>
                        <div>
                              {
                                    isAdmin?.admin ||
                                    <p className='flex relative'>

                                          <NavLink to="/userCart"> <FaCartPlus className='text-white' size={22}></FaCartPlus>
                                                <span className='absolute text-white -top-4 left-5'>{cartItems?.length || ""}</span></NavLink>

                                    </p>
                              }

                        </div>

                        <div className="dropdown dropdown-hover dropdown-end">
                              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                          <img
                                                alt="Tailwind CSS Navbar component"
                                                src={profile?.photo} />
                                    </div>
                              </div>
                              <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    <li>
                                          <Link to="/dashboard/userHome" className="justify-between">
                                                Profile

                                          </Link>
                                    </li>
                                    <li><button onClick={handleLogout}>Logout</button></li>
                              </ul>
                        </div>
                  </div>
            </div>

      );
};

export default Navbar;