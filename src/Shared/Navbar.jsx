
import { FcSearch } from "react-icons/fc";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
      return (
            <div className="navbar bg-gradient-to-r from-teal-200 to-teal-500">
                  <div className="flex-1">
                        <label htmlFor="my-drawer-2" className="drawer-button lg:hidden cursor-pointer">
                              <GiHamburgerMenu />
                        </label>

                  </div>
                  <div className="flex-none gap-5">
                        <div className="bg-white flex px-1 py-1 rounded-full border border-blue-500 overflow-hidden max-w-md mx-auto font-[sans-serif]">
                              <input type='email' placeholder='Search Something...' className="w-full outline-none bg-white pl-4 text-sm" />
                              <button type='button'
                                    className="transition-all text-white text-sm rounded-full px-5 py-2.5">
                                    <FcSearch size={22} />
                              </button>
                        </div>

                        <div className="dropdown dropdown-hover dropdown-end">
                              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                          <img
                                                alt="Tailwind CSS Navbar component"
                                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                              </div>
                              <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    <li>
                                          <a className="justify-between">
                                                Profile
                                                <span className="badge">New</span>
                                          </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li><a>Logout</a></li>
                              </ul>
                        </div>
                  </div>
            </div>

      );
};

export default Navbar;