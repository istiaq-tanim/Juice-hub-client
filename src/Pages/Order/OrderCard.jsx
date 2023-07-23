import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { UserContext } from '../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../../Hooks/usecart';
import { useAdmin } from '../../Hooks/useAdmin';

const OrderCard = ({ item }) => {
    const { name, description, price, image, ratings, _id ,available } = item
    const [,refetch]=useCart()
    const [isAdmin]=useAdmin()
    const { user } = useContext(UserContext)
    const navigate=useNavigate()
    const location=useLocation()
    
    const addCart = (item) => {
        const orderItem={name, description, price, image ,menuId : _id ,email : user?.email}
        console.log(item)
        if (user) {
            fetch("https://juice-hub-server.vercel.app/carts", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(orderItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Item Added Succesfully',
                            showConfirmButton: false,
                            timer: 1000
                        })
                    }
                })
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
                    navigate("/login",{state: { from: location }})
                }
            })
        }
    }
    return (
        <div className="card card-compact bg-green-200 shadow-lg" style={{ height: "500px" }}>
            <figure><img src={image} className="h-60 w-full object-fill" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-red-700">{name}</h2>
                <p>Description: {description}</p>
                <p>Price: ${price}</p>
                <p>Available: {available}</p>
                <div className='flex text-lg gap-2'>Ratings:<Rating
                    style={{ maxWidth: 100 }}
                    value={ratings}
                    readOnly
                /></div>
                <div className="card-actions justify-center">
                    <button disabled={isAdmin?.admin || !available } onClick={() => { addCart(item) }} className="btn btn-outline btn-error mt-5">Add To Cart</button>
                </div>
                {
                    !available && <div className="badge font-medium absolute top-5 p-3 right-5 badge-error">Out of Stock</div>
                }
            </div>
        </div>
    );
};

export default OrderCard;

