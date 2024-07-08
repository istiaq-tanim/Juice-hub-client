import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { UserContext } from "../Provider/AuthProvider";
import SocialLogin from "./SocialLogin";

const SignUp = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { createUser, updateUserProfile } = useContext(UserContext)
    const navigate = useNavigate()
    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        const savedUser = { email: data.email, name: data.name, photo: data.photo, role: "user" }
                        fetch("http://localhost:5000/users", {
                            method: "POST",
                            headers: { "content-type": "application/json" },
                            body: JSON.stringify(savedUser)

                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset()
                                    Swal.fire({
                                        position: 'center',
                                        icon: 'success',
                                        title: 'User created Successfully',
                                        showConfirmButton: false,
                                        timer: 1000
                                    })
                                    navigate("/login")
                                }
                            })

                    })
                    .catch(error => console.log(error.message))
            })
            .catch(error => console.log(error.message))

    };
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex w-full gap-20">
                    <div className="card flex-shrink-0 w-full h-auto max-w-sm shadow-2xl bg-base-100 my-32">
                        <h1 className="text-3xl text-center font-bold mt-3">Register Now!</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' {...register("name")} placeholder="User Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-500">Email is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' {...register("password", { required: true, minLength: 6 })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-500">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-500">Password is too Short</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name='photo' {...register("photo")} placeholder="photo" className="input input-bordered" />
                            </div>


                            <div className="form-control mt-2">
                                <button className="btn btn-info text-white">Sign Up</button>
                            </div>

                        </form>
                        <SocialLogin></SocialLogin>
                        <p className='text-center'>Already Have an Account?<Link to="/login"><button className="btn btn-active px-1 py-0 btn-link">Please Login</button></Link></p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignUp;