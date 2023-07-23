import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from "./Checkout";
import { useCart } from "../../../Hooks/usecart";
const stripePromise = loadStripe('pk_test_51NEZAfHvJD5yKaqmIeZeI2ANjB3ytM1VaDRcQTZODy0wIljEZFjXx9knVp6LbdB0AIcAG33w2nZEq6pgvQPxriZU00jtXGYq3a');
const Payment = () => {
    const [cart]=useCart()
    const totalPrice=cart.reduce((sum,item)=>{return sum+item.price},0)
    const price=parseFloat(totalPrice.toFixed(2))
    return (
        <div className="w-[90%] mx-auto text-center">
            <h3 className="text-2xl">Payment is Here</h3>
            <Elements stripe={stripePromise}>
                <Checkout cart={cart} price={price} />
            </Elements>
        </div>
    );
};

export default Payment;