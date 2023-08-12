import { Link } from "react-router-dom";
import { useCart } from "../../../Hooks/usecart";
import UserCartRow from "./UserCartRow";


const UserCart = () => {
    const [cart] = useCart()
    let price = cart.reduce((sum, item) => { return sum + item.price }, 0)
    price=parseFloat(price.toFixed(2))

    return (
        <div className="w-full">
            <h3 className="text-center font-bold text-3xl">User Cart</h3>
            <div className="flex mt-10 justify-evenly items-center text-xl font-bold">
                <h3>Total Orders {cart.length}</h3>
                <h3>Total Price: ${price}</h3>
               <Link to="/dashboard/payment"><button className="btn btn-success">Pay</button></Link>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="text-center">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        
                       {
                        cart.map((item,index) => <UserCartRow key={item._id} index={index} item={item}></UserCartRow>)
                       }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserCart;