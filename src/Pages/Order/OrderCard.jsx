const OrderCard = ({ item }) => {
    const { name, description, price, image, rating } = item
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={image} className="h-64 w-full bg-cover" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>{price}</p>
                <p>{rating}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;