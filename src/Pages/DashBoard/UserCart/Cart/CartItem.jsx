import { useContext } from "react";
import { useGetCartQuery } from "../../../../features/cart/cartApi";
import { UserContext } from "../../../../Provider/AuthProvider";
import BillDetails from "./BillDetails";
import SingleCart from "./SingleCart";

const CartItem = () => {
      const { user } = useContext(UserContext)
      const { data: cartItems, isLoading, isError } = useGetCartQuery(user?.email)
      let content

      if (isLoading) {
            content = <div>Loading...</div>
      }
      if (isError) {
            content = <div className="md:col-span-2 space-y-4">
                  <p className="text-lg font-semibold text-red-500">There is an Error Occurred</p>
            </div>
      }
      if (cartItems?.length <= 0) {
            content = <div className="md:col-span-2 space-y-4">
                  <p className="text-lg font-semibold">There is No Product in the Cart</p>
            </div>
      }

      if (cartItems?.length > 0) {
            content = <div className="md:col-span-2 space-y-4">
                  {
                        cartItems.map(item => <SingleCart key={item._id} item={item}></SingleCart>)
                  }
            </div>
      }
      return (
            <>
                  <div className="font-sans max-w-5xl max-md:max-w-xl mx-auto bg-white py-32">
                        <h1 className="text-3xl font-bold text-gray-800 text-center">Shopping Cart</h1>


                        <div className="grid md:grid-cols-3 gap-8 mt-16">
                              {content}

                              <BillDetails></BillDetails>
                        </div>
                  </div>

            </>
      );
};

export default CartItem;
