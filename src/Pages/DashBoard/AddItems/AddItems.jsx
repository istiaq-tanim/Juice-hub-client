import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const url = "https://api.imgbb.com/1/upload?key=99024dcf7d799d929c9d0ce7538940ec"
    const onSubmit = data => {
        const formData = new FormData()
        formData.append("image", data.image[0])

        fetch(url, {
            method: "POST",
            body: formData
        }).then(res => res.json())
            .then(imgRes => {
                
                if (imgRes.success) {
                    const savedImg = imgRes.data.display_url
                    const { name, price, category, description, available, ratings } = data
                    const addItem = { name, price: parseFloat(price), ratings: parseFloat(ratings), category, description, available: parseFloat(available), image: savedImg , sellNumber:0 }
                    fetch("https://juice-hub-server.vercel.app/juiceItems", {
                        method: "POST",
                        headers: { "content-type": "application/json" },
                        body: JSON.stringify(addItem)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {

                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'Item Added Successfully',
                                    showConfirmButton: false,
                                    timer: 1000
                                })
                            }
                        })
                }
            })

    };

    return (
        <div className="w-4/5 px-10">
            <h3 className="text-center text-3xl font-bold">Add a New Item</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="bg-[#ded8d8] mt-10">
                <div className="form-control w-full px-5 pt-5">
                    <label className="label">
                        <span className="label-text font-medium text-lg">Juice Name</span>
                    </label>
                    <input type="text" placeholder="Type here" {...register("name", { required: true })} className="input input-bordered w-full" />
                </div>

                <div className="flex">
                    <div className="form-control w-full px-5">
                        <label className="label">
                            <span className="label-text font-medium text-lg">Pick One</span>
                        </label>
                        <select defaultValue={"Select One"} className="select select-bordered" {...register("category", { required: true })} >
                            <option disabled>Select one</option>
                            <option>Citrus</option>
                            <option>Berry</option>
                            <option>Tropical</option>
                            <option>Fruit</option>
                            <option>Shake</option>

                        </select>
                    </div>
                    <div className="form-control w-full px-5">
                        <label className="label">
                            <span className="label-text font-medium text-lg">Price</span>
                        </label>
                        <input type="text" placeholder="Type here" {...register("price", { required: true })} className="input input-bordered w-full" />
                    </div>

                </div>

                <div className="flex">

                    <div className="form-control w-full px-5">
                        <label className="label">
                            <span className="label-text font-medium text-lg">Ratings</span>
                        </label>
                        <input type="text" placeholder="Type here" {...register("ratings", { required: true })} className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full px-5">
                        <label className="label">
                            <span className="label-text font-medium text-lg">Available Item</span>
                        </label>
                        <input type="text" placeholder="Type here" {...register("available", { required: true })} className="input input-bordered w-full" />
                    </div>
                </div>

                <div className="form-control px-5">
                    <label className="label">
                        <span className="label-text font-medium text-lg">Description</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24" {...register("description", { required: true })} placeholder="Description"></textarea>
                </div>

                <div className="form-control w-full px-5">
                    <label className="label">
                        <span className="label-text font-medium text-lg">Pick a file</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full" />
                </div>
                <input className='m-5 btn bg-red-300' type="submit" value="Add Juice" />
            </form>
        </div>
    );
};

export default AddItems;