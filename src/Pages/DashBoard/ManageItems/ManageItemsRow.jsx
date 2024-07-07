import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaPen, FaTrash } from "react-icons/fa";
import Modal from 'react-modal';
import Swal from "sweetalert2";
import "./Modal.css";
Modal.setAppElement('#root');

const ManageItemsRow = ({ index, item, refetch }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const { name, price, image, id, ratings, description, available, category } = data
        const editItem = {

            name,
            price: parseFloat(price),
            id,
            image,
            ratings: parseFloat(ratings),
            description,
            available: parseInt(available),
            category
        }
        fetch("http://localhost:5000/juiceItems", {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(editItem)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount === 1) {
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Item Edited Successfully',
                        showConfirmButton: false,
                        timer: 1000
                    })
                }
            })
    }

    const showModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/juiceItems/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount === 1) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })


    }
    const { name, price, image, _id, ratings, description, available, category } = item
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td><img className="w-16 h-16 mx-auto rounded-full" src={image} /></td>
            <td>$ {price}</td>
            <td ><button onClick={() => { handleDelete(_id) }}><FaTrash className='mx-auto text-lg'></FaTrash></button></td>
            <td>
                <div>
                    <button className="btn" onClick={showModal}><FaPen></FaPen></button>
                    <Modal
                        isOpen={isModalOpen}
                        onRequestClose={closeModal}
                        contentLabel="Modal"
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className="bg-[#ded8d8] mt-10">
                            <div className="form-control w-full px-5 pt-5">
                                <label className="label">
                                    <span className="label-text font-medium text-lg">Juice Name</span>
                                </label>
                                <input type="text" placeholder="Type here" defaultValue={name}   {...register("name", { required: true })} className="input input-bordered w-full" />
                            </div>

                            <div className="flex">
                                <div className="form-control w-full px-5">
                                    <label className="label">
                                        <span className="label-text font-medium text-lg">Pick One</span>
                                    </label>
                                    <select defaultValue={category} className="select select-bordered" {...register("category", { required: true })} >
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
                                    <input type="text" defaultValue={price} placeholder="Type here" {...register("price", { required: true })} className="input input-bordered w-full" />
                                </div>
                                <div className="form-control hidden w-full px-5">
                                    <label className="label">
                                        <span className="label-text font-medium text-lg">Id</span>
                                    </label>
                                    <input type="text" defaultValue={_id} placeholder="Type here" {...register("id", { required: true })} className="input input-bordered w-full" />
                                </div>

                            </div>

                            <div className="flex">

                                <div className="form-control w-full px-5">
                                    <label className="label">
                                        <span className="label-text font-medium text-lg">Ratings</span>
                                    </label>
                                    <input type="text" placeholder="Type here" defaultValue={ratings} {...register("ratings", { required: true })} className="input input-bordered w-full" />
                                </div>
                                <div className="form-control w-full px-5">
                                    <label className="label">
                                        <span className="label-text font-medium text-lg">Available Item</span>
                                    </label>
                                    <input type="text" defaultValue={available} placeholder="Type here" {...register("available", { required: true })} className="input input-bordered w-full" />
                                </div>
                            </div>

                            <div className="form-control px-5">
                                <label className="label">
                                    <span className="label-text font-medium text-lg">Description</span>
                                </label>
                                <textarea className="textarea textarea-bordered h-24" defaultValue={description} {...register("description", { required: true })} placeholder="Description"></textarea>
                            </div>
                            <input className='m-5 btn bg-red-300' type="submit" value="Update Juice" />
                        </form>
                        <div className="modal-action">
                            <button className="btn" onClick={closeModal}>Close</button>
                        </div>
                    </Modal>
                </div>
            </td>
        </tr>
    );
};

export default ManageItemsRow;