import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Link } from 'react-router-dom';


const OrderCard = ({ item }) => {
    const { name, description, price, image, ratings, _id, available } = item
    return (
        <div className="card card-compact bg-green-200 shadow-lg" style={{ height: "500px" }}>
            <figure><img src={image} className="h-60 w-full object-fill" alt="Fruits" /></figure>
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
                <Link to={`/details/${_id}`} className="card-actions justify-center">
                    <button className="btn btn-outline btn-error mt-5">View Details</button>
                </Link>
                {
                    !available && <div className="badge font-medium absolute top-5 p-3 right-5 badge-error">Out of Stock</div>
                }
            </div>
        </div>
    );
};

export default OrderCard;

