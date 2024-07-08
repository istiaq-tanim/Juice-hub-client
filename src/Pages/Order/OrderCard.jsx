import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Link } from 'react-router-dom';


const OrderCard = ({ item }) => {
    const { name, description, price, image, ratings, _id, available } = item
    return (
        <div className="card card-compact bg-white shadow-2xl mt-3 mb-10" style={{ height: "500px" }}>
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
                <Link to={`/details/${_id}`} className="card-actions justify-center pt-2">
                    <button className="bg-transparent text-slate-500 border border-slate-700 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                        <span className="bg-slate-700 shadow-slate-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                        View details
                    </button>

                </Link>
                {
                    !available && <div className="badge font-medium absolute top-5 p-3 right-5 badge-error">Out of Stock</div>
                }
            </div>
        </div>
    );
};

export default OrderCard;

