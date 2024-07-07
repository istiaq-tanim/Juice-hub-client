import { useContext } from "react";
import { Link } from "react-router-dom";
import useCartCalculation from "../../../../Hooks/useCartCalculation";
import { UserContext } from "../../../../Provider/AuthProvider";


const BillDetails = () => {
      const { user } = useContext(UserContext)
      const { amount, quantity } = useCartCalculation()
      return (
            <div className="bg-gray-100 rounded-md p-4 h-max">
                  <h3 className="text-lg max-sm:text-base font-bold text-gray-800 border-b border-gray-300 pb-2">Order Summary</h3>

                  <form className="mt-6">
                        <div>
                              <h3 className="text-base text-gray-800  font-semibold mb-4">Enter Details</h3>
                              <div className="space-y-3">
                                    <div className="relative flex items-center">
                                          <input defaultValue={user?.displayName} type="text" placeholder="Full Name"
                                                className="px-4 py-2.5 bg-white text-gray-800 rounded-md w-full text-sm border-b focus:border-gray-800 outline-none" />
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4"
                                                viewBox="0 0 24 24">
                                                <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                                                <path
                                                      d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                                                      data-original="#000000"></path>
                                          </svg>
                                    </div>

                                    <div className="relative flex items-center">
                                          <input type="email" defaultValue={user?.email} placeholder="Email"
                                                className="px-4 py-2.5 bg-white text-gray-800 rounded-md w-full text-sm border-b focus:border-gray-800 outline-none" />
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4"
                                                viewBox="0 0 682.667 682.667">
                                                <defs>
                                                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                                            <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                                                      </clipPath>
                                                </defs>
                                                <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                                                      <path fill="none" strokeMiterlimit="10" strokeWidth="40"
                                                            d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                                                            data-original="#000000"></path>
                                                      <path
                                                            d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                                                            data-original="#000000"></path>
                                                </g>
                                          </svg>
                                    </div>


                              </div>
                        </div>
                  </form>

                  <ul className="text-gray-800 mt-6 space-y-3">
                        <li className="flex flex-wrap gap-4 text-sm">Subtotal <span className="ml-auto font-bold">${amount}</span></li>
                        <li className="flex flex-wrap gap-4 text-sm">Quantity <span className="ml-auto font-bold">{quantity}</span></li>
                        <hr className="border-gray-300" />
                        <li className="flex flex-wrap gap-4 text-sm font-bold">Total <span className="ml-auto">${amount}</span></li>
                  </ul>

                  <div className="mt-6 space-y-3">
                        <Link to="/dashboard/payment">
                              <button type="button" className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md">Checkout</button>
                        </Link>

                  </div>
            </div>
      );
};

export default BillDetails;