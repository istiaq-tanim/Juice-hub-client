import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { UserContext } from "../../../Provider/AuthProvider";
const Checkout = ({ price, cart }) => {
    const stripe = useStripe()
    const elements = useElements()
    const { user } = useContext(UserContext)
    const [error, setError] = useState("")
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {

        if (price > 0) {
            fetch("http://localhost:5000/create-payment-intent", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ price })

            })
                .then((res) => res.json())
                .then((data) => setClientSecret(data.clientSecret));
        }


    }, [price])
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        })

        if (error) {
            setError(error.message)
        }
        else {
            setError("")
            console.log('PaymentMethod', paymentMethod);
        }

        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || "unknown",
                        email: user?.email || "anonymous"
                    },
                },
            },
        );
        if (confirmError) {
            console.log(confirmError);
        }
        console.log('payment intent', paymentIntent)
        setProcessing(false)

        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            const payment = {
                email: user?.email,
                name: user?.displayName,
                transactionId: paymentIntent.id,
                price,
                quantity: cart.length,
                date: new Date(),
                menuItems: cart.map(item => item.menuId),
                itemsName: cart.map(item => item.name),
                cartItems: cart.map(item => item._id),
            }

            fetch("http://localhost:5000/payment",
                {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify(payment)
                })
                .then(res => res.json())
                .then(data => {
                    if (data.insertResult.insertedId) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Payment Successful',
                            showConfirmButton: false,
                            timer: 1000
                        })
                    }
                })
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className="btn btn-info btn-sm mt-5" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {
                error && <p className="text-red-500 ml-10 mt-2">{error}</p>
            }
            {transactionId && <p className="text-green-500 mt-2">Transaction Successful with transactionId: {transactionId}</p>}
        </>
    );
};

export default Checkout;