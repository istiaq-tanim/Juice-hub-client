import { useForm } from "react-hook-form";
import { Rating, StickerStar } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { UserContext } from "../../../Provider/AuthProvider";
const myStyles = {
    itemShapes: StickerStar,
    activeFillColor: '#ffb700',
    inactiveFillColor: '#fbf1a9'
}

const Review = () => {
    const { register, handleSubmit , reset } = useForm();
    const [rating, setRating] = useState(0);
    const {user}=useContext(UserContext)
    const onSubmit = data => {
        const {favorite,review,suggestion}=data
        const reviewData={
           favorite,
           review,
           suggestion,
           rating,
           image:user.photoURL,
           name:user.displayName,
           email:user.email
        }
        fetch("https://juice-hub-server.vercel.app/review", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    reset()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Thank you for your Review',
                        showConfirmButton: false,
                        timer: 1000
                    })
                }
            })
    }
    return (
        <div className="w-2/3 mx-auto">
            <h3 className="text-3xl text-center font-bold">Give A Review</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-[#ded8d8] mt-10">
                <h3 className="text-center py-5 text-2xl">Rate Us</h3>

                <div className='flex justify-center align-middle items-center text-lg gap-2'>Ratings:<Rating
                    style={{ maxWidth: 200 }}
                    value={rating}
                    onChange={setRating}
                    itemStyles={myStyles}
                    isRequired
                /></div>
                <div className="form-control w-full px-5 pt-5">
                    <label className="label">
                        <span className="label-text font-medium text-lg">Which Juice you like Most?</span>
                    </label>
                    <input type="text" placeholder="Type here" {...register("favorite", { required: true })} className="input input-bordered w-full" />
                </div>

                <div className="form-control w-full px-5">
                    <label className="label">
                        <span className="label-text font-medium text-lg">Do you Have Any Suggestion for us?</span>
                    </label>
                    <input type="text" placeholder="Type here" {...register("suggestion", { required: true })} className="input input-bordered w-full" />
                </div>

                <div className="form-control px-5 pb-5">
                    <label className="label">
                        <span className="label-text font-medium text-lg">Kindly express your care in a short way.</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24" {...register("review", { required: true })} placeholder="Description"></textarea>
                </div>

                <input className='m-5 btn bg-red-300' type="submit" value="Send Review" />

            </form>
        </div>
    );
};

export default Review;