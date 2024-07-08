import React, { useContext, useEffect, useState } from 'react';
import card from "../../../assets/atm-card.png";
import { UserContext } from '../../../Provider/AuthProvider';
import MonthlyBarChart from '../UserHome/MontlyBarChart';
import useFetch from './../../../Hooks/useFetch';

const DashboardStats = () => {
      const [tooltips, setTooltips] = React.useState({});
      const { user } = useContext(UserContext)

      const fetchData = useFetch(`https://juice-hub-server.vercel.app/userHome/?email=${user.email}`)
      const { reviewCount, cartsCount, paymentCounts, shop } = fetchData
      const [transactions, setTransactions] = useState([]);

      useEffect(() => {
            const fetchTransactions = async () => {
                  try {
                        const response = await fetch(`https://juice-hub-server.vercel.app/payments/last-year?email=${user?.email}`);
                        const data = await response.json();

                        const monthNames = {
                              1: "January", 2: "February", 3: "March", 4: "April",
                              5: "May", 6: "June", 7: "July", 8: "August",
                              9: "September", 10: "October", 11: "November", 12: "December"
                        };

                        const formattedData = data.map(transaction => ({
                              ...transaction,
                              monthYear: `${monthNames[transaction._id.month]} ${transaction._id.year}`
                        }));

                        setTransactions(formattedData);
                  } catch (error) {
                        console.error('Error fetching transactions:', error);
                  }
            };

            fetchTransactions();
      }, [user?.email]);

      const handleMouseOver = (key) => {
            setTooltips((prev) => ({ ...prev, [key]: true }));
      };

      const handleMouseLeave = (key) => {
            setTooltips((prev) => ({ ...prev, [key]: false }));
      };

      return (
            <>
                  <div className="flex flex-row flex-wrap">
                        <div className="w-full max-w-full flex-shrink px-4 pt-5">
                              <p className="mb-5 mt-3 text-xl font-bold text-center">User Stats</p>
                        </div>
                        <div className="mb-10 w-full max-w-full flex-shrink px-4 sm:w-1/2 lg:w-1/4">
                              <div className="h-full rounded-xl bg-white shadow-2xl">
                                    <div className="relative px-6 pt-6 text-sm font-semibold">
                                          Pending Order
                                          <div
                                                onMouseOver={() => handleMouseOver('totalOrders')}
                                                onMouseLeave={() => handleMouseLeave('totalOrders')}
                                                className="text-green-500 ltr:float-right rtl:float-left"
                                          >
                                                {tooltips.totalOrders && (
                                                      <div className="absolute bottom-full top-auto mb-3" style={{ display: 'block' }}>
                                                            <div className="z-40 -mb-1 w-32 rounded-lg bg-black p-2 text-center text-sm leading-tight text-white shadow-lg">
                                                                  Overall
                                                            </div>
                                                            <div className="absolute bottom-0 -mb-2 w-1 -rotate-45 transform bg-black p-1 ltr:ml-6 rtl:mr-6"></div>
                                                      </div>
                                                )}
                                          </div>
                                    </div>
                                    <div className="flex flex-row justify-between px-6 py-4">
                                          <div className="relative h-14 w-14 self-center rounded-full bg-rose-500 text-center text-pink-50">
                                                <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      fill="currentColor"
                                                      className="bi bi-cart3 absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 transform"
                                                      viewBox="0 0 16 16"
                                                >
                                                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                                                </svg>
                                          </div>
                                          <h2 className="self-center text-3xl font-bold">{cartsCount}</h2>
                                    </div>

                              </div>
                        </div>
                        <div className="mb-10 w-full max-w-full flex-shrink px-4 sm:w-1/2 lg:w-1/4">
                              <div className="h-full rounded-xl bg-white shadow-2xl">
                                    <div className="relative px-6 pt-6 text-sm font-semibold">
                                          Total Shop
                                          <div
                                                onMouseOver={() => handleMouseOver('totalSales')}
                                                onMouseLeave={() => handleMouseLeave('totalSales')}
                                                className="text-green-500 ltr:float-right rtl:float-left"
                                          >

                                                {tooltips.totalSales && (
                                                      <div className="absolute bottom-full top-auto mb-3" style={{ display: 'block' }}>
                                                            <div className="z-40 -mb-1 w-32 rounded-lg bg-black p-2 text-center text-sm leading-tight text-white shadow-lg">
                                                                  Overall
                                                            </div>
                                                            <div className="absolute bottom-0 -mb-2 w-1 -rotate-45 transform bg-black p-1 ltr:ml-6 rtl:mr-6"></div>
                                                      </div>
                                                )}
                                          </div>
                                    </div>
                                    <div className="flex flex-row justify-between px-6 py-4">
                                          <div className="relative h-14 w-14 self-center rounded-full bg-yellow-500 text-center text-yellow-50">
                                                <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      fill="currentColor"
                                                      className="bi bi-credit-card absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 transform"
                                                      viewBox="0 0 16 16"
                                                >
                                                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"></path>
                                                      <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"></path>
                                                </svg>
                                          </div>
                                          <h2 className="self-center text-3xl font-bold">
                                                <span>$</span>{shop}
                                          </h2>
                                    </div>

                              </div>
                        </div>
                        <div className="mb-10 w-full max-w-full flex-shrink px-4 sm:w-1/2 lg:w-1/4">
                              <div className="h-full rounded-xl bg-white shadow-2xl">
                                    <div className="relative px-6 pt-6 text-sm font-semibold">
                                          Given Review
                                          <div
                                                onMouseOver={() => handleMouseOver('newCustomers')}
                                                onMouseLeave={() => handleMouseLeave('newCustomers')}
                                                className="text-pink-500 ltr:float-right rtl:float-left"
                                          >
                                                {tooltips.newCustomers && (
                                                      <div className="absolute bottom-full top-auto mb-3" style={{ display: 'block' }}>
                                                            <div className="z-40 -mb-1 w-32 rounded-lg bg-black p-2 text-center text-sm leading-tight text-white shadow-lg">
                                                                  Overall
                                                            </div>
                                                            <div className="absolute bottom-0 -mb-2 w-1 -rotate-45 transform bg-black p-1 ltr:ml-6 rtl:mr-6"></div>
                                                      </div>
                                                )}
                                          </div>
                                    </div>
                                    <div className="flex flex-row justify-between px-6 py-4">
                                          <div className="relative h-14 w-14 self-center rounded-full bg-green-500 text-center text-green-50">
                                                <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      fill="currentColor"
                                                      className="bi bi-person absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 transform"
                                                      viewBox="0 0 16 16"
                                                >
                                                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
                                                </svg>
                                          </div>
                                          <h2 className="self-center text-3xl font-bold">{reviewCount}</h2>
                                    </div>

                              </div>
                        </div>
                        <div className="mb-10 w-full max-w-full flex-shrink px-4 sm:w-1/2 lg:w-1/4">
                              <div className="h-full rounded-xl bg-white shadow-2xl">
                                    <div className="relative px-6 pt-6 text-sm font-semibold">
                                          Paid Payment<span className="mt-1 h-2 w-2 animate-pulse rounded-full bg-green-500 ltr:float-right rtl:float-left"></span>
                                    </div>
                                    <div className="flex flex-row justify-between px-6 py-6">
                                          <div className="relative h-14 w-14 self-center rounded-full bg-indigo-500 text-center text-indigo-50">
                                                <img src={card} alt="" />
                                          </div>
                                          <h2 className="self-center text-3xl font-bold">{paymentCounts}</h2>
                                    </div>

                              </div>
                        </div>
                  </div>

                  <div className='max-w-3xl mx-auto py-10'>
                        {transactions?.length > 0 && <MonthlyBarChart data={transactions} />}
                  </div>
            </>

      );
};

export default DashboardStats;

