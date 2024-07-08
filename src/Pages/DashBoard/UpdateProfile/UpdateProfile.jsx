import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useAddUserMutation } from "../../../features/user/userApi";
import { UserContext } from "../../../Provider/AuthProvider";

const UpdateProfile = () => {
      const { register, handleSubmit, reset } = useForm();
      const { user } = useContext(UserContext)
      const email = user?.email

      const [addUser, { isSuccess }] = useAddUserMutation()
      const url = "https://api.imgbb.com/1/upload?key=99024dcf7d799d929c9d0ce7538940ec"
      const onSubmit = data => {
            const formData = new FormData()
            console.log(data.image[0])
            formData.append("image", data.image[0])

            fetch(url, {
                  method: "POST",
                  body: formData
            }).then(res => res.json())
                  .then(imgRes => {

                        if (imgRes.success) {
                              const savedImg = imgRes.data.display_url
                              const { name, about, phone, city, street, country, occupation } = data
                              const user = { name, about, phone, country, occupation, city, street, photo: savedImg, email, role: "user" }
                              addUser({ email, user })
                        }
                  })

      };

      useEffect(() => {
            if (isSuccess) {
                  toast.success('Profile Update Successfully');
                  reset()
            }
      }, [isSuccess, reset]);
      return (
            <div className="max-w-[680px] sm:w-full">
                  < form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                        < div className="space-y-12 w-full" >
                              <div className="border-gray-900/10 pb-6">
                                    <h2 className="text-2xl pt-5 text-center font-semibold leading-7 text-gray-900">Update Profile</h2>
                                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                          <div className="col-span-full">
                                                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">About</label>
                                                <div className="mt-2">
                                                      <textarea
                                                            {...register("about", { required: true })}
                                                            id="about" name="about" rows="3" className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                                                </div>
                                                <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
                                          </div>


                                          <div className="form-control col-span-full">
                                                <label className="label">
                                                      <span className="label-text font-medium text-lg">Update Profile Picture</span>
                                                </label>
                                                <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full" />
                                          </div>
                                    </div>
                              </div>

                              <div className=" border-gray-900/10 pb-12">
                                    <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                                    <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

                                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                          <div className="sm:col-span-4">
                                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
                                                <div className="mt-2">
                                                      <input
                                                            {...register("name", { required: true })}
                                                            type="text" name="name" id="name" className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                </div>
                                          </div>


                                          <div className="sm:col-span-4">
                                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
                                                <div className="mt-2">
                                                      <input
                                                            {...register("phone", { required: true })}
                                                            id="phone" name="phone" type="text" autoComplete="email" className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                </div>
                                          </div>
                                          <div className="sm:col-span-4">
                                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Occupation</label>
                                                <div className="mt-2">
                                                      <input
                                                            {...register("occupation", { required: true })}
                                                            id="occupation" name="occupation" type="text" autoComplete="occupation" className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                </div>
                                          </div>

                                          <div className="sm:col-span-4">
                                                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">Country</label>
                                                <div className="mt-2">
                                                      <select
                                                            defaultValue={"Bangladesh"}
                                                            {...register("country", { required: true })}
                                                            id="country" name="country" autoComplete="country-name"
                                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                                            <option>Bangladesh</option>
                                                            <option>United States</option>
                                                            <option>Canada</option>
                                                            <option>Mexico</option>
                                                      </select>
                                                </div>
                                          </div>

                                          <div className="col-span-full">
                                                <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">Street address</label>
                                                <div className="mt-2">
                                                      <input
                                                            {...register("street", { required: true })}
                                                            type="text" name="street" id="street" className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                </div>
                                          </div>

                                          <div className="sm:col-span-4 sm:col-start-1">
                                                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">City</label>
                                                <div className="mt-2">
                                                      <input
                                                            {...register("city", { required: true })}
                                                            type="text" name="city" id="city" autoComplete="address-level2" className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                </div>
                                          </div>


                                    </div>
                              </div>


                        </ div>

                        <div className="my-4 flex items-center justify-end gap-x-6 w-full">
                              <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                        </div>
                  </form >

            </div >
      );
};

export default UpdateProfile;