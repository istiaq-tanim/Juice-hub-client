import {
  Bars3BottomRightIcon,
  XMarkIcon
} from '@heroicons/react/24/solid';
import { useContext, useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { useAdmin } from '../Hooks/useAdmin';
import { UserContext } from '../Provider/AuthProvider';
import { useGetCartQuery } from '../features/cart/cartApi';
import { useGetUserQuery } from '../features/user/userApi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, logOut } = useContext(UserContext)
  const { data: cartItems } = useGetCartQuery(user?.email)

  const email = user?.email

  const { data: profile } = useGetUserQuery(email);


  const [isAdmin] = useAdmin()
  const handleLogout = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error.message))
  }
  return (
    <div className='bg-zinc-800 opacity-80 fixed px-12 z-10 py-5 rounded-lg w-[100%]'>
      <div className='relative flex items-center justify-between text-white'>
        {/* Logo Section */}
        <Link to='/' className='inline-flex items-center'>
          <img className='bg-red-600 rounded-full' src="https://i.ibb.co/pj0JM85/7uptheme-logo.png" />
          <span className='ml-2 text-xl font-bold tracking-wide text-white'>
            Juice Hub
          </span>
        </Link>

        {/* Nav Items Section */}
        <ul className='items-center hidden space-x-8 lg:flex uppercase'>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? "text-red-400" : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/contact'
              className={({ isActive }) => (isActive ? "text-red-400" : '')}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/order'
              className={({ isActive }) => (isActive ? "text-red-400" : '')}
            >
              Products
            </NavLink>
          </li>
          <li>
            {
              isAdmin?.admin ? <NavLink
                to='/dashboard/adminHome'
                className={({ isActive }) => (isActive ? "text-red-400" : '')}
              >
                DashBoard
              </NavLink> :
                <NavLink
                  to='/dashboard/userHome'
                  className={({ isActive }) => (isActive ? "text-red-400" : '')}
                >
                  DashBoard
                </NavLink>
            }
          </li>
          <li>
            {
              isAdmin?.admin ||
              <p className='flex relative'>

                <NavLink to="/userCart"> <FaCartPlus className='text-xl'></FaCartPlus>
                  <span className='absolute -top-4 left-5'>{cartItems?.length || ""}</span></NavLink>

              </p>
            }

          </li>
          {user ?
            <>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar tooltip-success tooltip" data-tip={profile?.name}>
                <div className="w-10 rounded-full" >
                  <img src={profile?.photo} />
                </div>
              </label>

              <button onClick={handleLogout} className=' btn btn-info py-0 px-2 font-displayRob'>Sign out</button>
            </> :
            <li className='font-secondary font-semibold font-displayRob'>
              <NavLink
                to='/login'
                className={({ isActive }) => (isActive ? "text-red-400" : '')}
              >
                Login
              </NavLink>
            </li>
          }


        </ul>
        {/* Mobile Navbar Section */}
        <div className='lg:hidden'>
          {/* Dropdown Open Button */}
          <button
            aria-label='Open Menu'
            title='Open Menu'
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3BottomRightIcon className='w-5 text-gray-600' />
          </button>
          {isMenuOpen && (
            <div className='absolute top-0 left-0 w-full z-10'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                {/* Logo & Button section */}
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link to='/' className='inline-flex items-center'>
                      <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                        nextPage
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className='w-5 text-gray-600' />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className='space-y-4'>
                    <li>
                      <Link to='/' className='default'>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/contact'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/about'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        About Us
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header