import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Swal from "sweetalert2";
import Loader from "../../components/Loader";
import Rating from "../../components/Ratings";
import { useAddCartMutation } from "../../features/cart/cartApi";
import { useGetProductQuery } from "../../features/proudcts/productsApi";
import { useAdmin } from "../../Hooks/useAdmin";
import { UserContext } from "../../Provider/AuthProvider";
import Review from "./Review";


const ProductDetails = () => {
      const [tabIndex, setTabIndex] = useState(0);
      const { id } = useParams()
      const { data: product, isLoading } = useGetProductQuery(id);
      const [isAdmin] = useAdmin()
      console.log(isAdmin)

      const { user } = useContext(UserContext)
      const navigate = useNavigate()
      const location = useLocation()
      const [addCart, { isSuccess, error }] = useAddCartMutation()

      useEffect(() => {
            if (isSuccess) {
                  toast.success('Item added to Cart');
                  navigate("/userCart");
            }
      }, [isSuccess, navigate]);

      if (isLoading) {
            return <Loader></Loader>
      }

      if (error) {
            return <span>Error: {error.message}</span>
      }

      const { name, description, price, image, _id, } = product.response

      const handleCart = () => {
            const orderItem = { name, description, price, image, menuId: _id, email: user?.email }
            if (user) {
                  addCart(orderItem)
            }
            else {
                  Swal.fire({
                        title: 'Please Login First',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Go to Login Page'
                  }).then((result) => {
                        if (result.isConfirmed) {
                              navigate("/login", { state: { from: location } })
                        }
                  })
            }
      }


      return (
            <>
                  <div className="font-sans py-32 px-10 tracking-wide max-lg:max-w-3xl mx-auto">
                        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
                              <div className="space-y-4 text-center lg:sticky top-8">
                                    <div className="bg-gray-100 flex items-center sm:h-[380px] rounded-lg">
                                          <img src={product?.response?.image} alt="Product" className="w-full max-h-full object-full" />
                                    </div>
                              </div>

                              <div className="max-w-2xl">
                                    <div>
                                          <h2 className="text-2xl font-extrabold text-gray-800">{product?.response?.name}</h2>
                                          <p className="text-lg text-gray-600 mt-2">{product?.category}</p>
                                    </div>

                                    <div className="flex space-x-1 mt-4">
                                          <Rating value={product?.response?.ratings}></Rating>
                                    </div>

                                    <div className="mt-4">
                                          <h3 className="text-gray-800 text-4xl font-bold">${product?.response?.price}</h3>
                                    </div>

                                    <div className="flex flex-wrap gap-4 mt-8">
                                          <button onClick={handleCart} disabled={isAdmin?.admin}
                                                className="relative rounded px-5 py-2.5 overflow-hidden group bg-yellow-400 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-yellow-400 transition-all ease-out duration-300">
                                                <span
                                                      className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                                <span className="relative text-base font-semibold">Add To Cart</span>
                                          </button>
                                    </div>

                                    <div className="mt-10">
                                          <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                                                <TabList>
                                                      <Tab>Description</Tab>
                                                      <Tab>Review</Tab>
                                                </TabList>
                                                <TabPanel>
                                                      <div className="mt-8">
                                                            <h3 className="text-lg font-bold text-gray-800">Product Description</h3>
                                                            <p className="text-sm text-justify text-gray-600 mt-4">{product?.response?.description}</p>
                                                      </div>

                                                      <div className="mt-6">
                                                            <p className="my-3 text-lg font-bold text-gray-800">What we serve</p>
                                                            <div className="grid grid-cols-3 gap-5">
                                                                  <img className="col-span-2 object-cover" src={image} alt="" />
                                                                  <div>
                                                                        <p className="text-lg font-bold">Nutritional Information per 100g</p>
                                                                        <ul className="space-y-1 list-disc mt-2 pl-4 text-sm text-gray-600 ">
                                                                              {
                                                                                    product?.response?.nutrition.map(item => <li key={item}>{item}</li>)
                                                                              }


                                                                        </ul>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </TabPanel>
                                                <TabPanel>
                                                      <Review product={product?.response}></Review>
                                                </TabPanel>
                                          </Tabs>
                                    </div>
                              </div>
                        </div>
                  </div>



            </>
      );
};

export default ProductDetails;