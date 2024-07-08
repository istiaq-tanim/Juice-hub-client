import { Rating, StickerStar } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import toast from 'react-hot-toast';
import Modal from 'react-modal';
import { useAddReviewMutation } from '../../features/proudcts/productsApi';
import { useGetUserQuery } from '../../features/user/userApi';
import { UserContext } from '../../Provider/AuthProvider';
import "../DashBoard/ManageItems/Modal.css";
import ReviewCard from './ReviewCard';
Modal.setAppElement('#root');

const myStyles = {
      itemShapes: StickerStar,
      activeFillColor: '#ffb700',
      inactiveFillColor: '#fbf1a9'
}
const Review = ({ product }) => {
      const [isModalOpen, setIsModalOpen] = useState(false);
      const { register, handleSubmit, reset } = useForm();
      const [addReview, { isSuccess }] = useAddReviewMutation()

      const { user } = useContext(UserContext)
      const email = user?.email

      const { data: profile } = useGetUserQuery(email);
      const [rating, setRating] = useState(0);
      const productId = product?._id
      const onSubmit = data => {
            const { name, email, title, description } = data
            const review = {
                  name,
                  email,
                  title,
                  description,
                  rating,
                  photo: profile?.photo
            }
            addReview({ productId, review })

      }
      const showModal = () => {
            setIsModalOpen(true);
      };

      const closeModal = () => {
            setIsModalOpen(false);
            reset()
      };

      useEffect(() => {
            if (isSuccess) {
                  toast.success('Review Given Successfully');
                  closeModal()
                  reset()
            }
      }, [isSuccess, reset]);
      return (
            <>
                  <section className="relative">
                        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
                              <div className="w-full">
                                    <div className="flex justify-between items-center py-5">
                                          <h2 className="font-manrope font-bold text-4xl text-black mb-4 text-center">Our customer reviews
                                          </h2>

                                          <div>
                                                <div>
                                                      <button onClick={showModal}
                                                            className="relative rounded px-5 py-2.5 overflow-hidden group bg-yellow-400 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-yellow-400 transition-all ease-out duration-300">
                                                            <span
                                                                  className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                                            <span className="relative text-base font-semibold">Add Review</span>
                                                      </button>
                                                      <Modal
                                                            isOpen={isModalOpen}
                                                            onRequestClose={closeModal}
                                                            contentLabel="Modal"
                                                      >
                                                            <form onSubmit={handleSubmit(onSubmit)} className="pt-10">

                                                                  <h3 className='pb-5 font-semibold text-2xl'>Submit Your Review</h3>

                                                                  <div className="relative mb-4">
                                                                        <h3 className="text-lg py-2">Add Your Rating</h3>
                                                                        <div className='flex text-lg gap-2'><Rating
                                                                              style={{ maxWidth: 100 }}
                                                                              value={rating}
                                                                              onChange={setRating}
                                                                              itemStyles={myStyles}
                                                                              isRequired
                                                                        /></div>
                                                                  </div>
                                                                  <div className="flex gap-x-6 mb-4">
                                                                        <div className="w-full relative">
                                                                              <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">Name <svg width="7" height="7" className="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444" />
                                                                              </svg>
                                                                              </label>
                                                                              <input type="text" id="default-search"
                                                                                    defaultValue={profile?.name && profile?.name}
                                                                                    {...register("name", { required: true })}
                                                                                    className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none " placeholder="" required="" />
                                                                        </div>
                                                                        <div className="w-full relative">
                                                                              <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">Email <svg width="7" height="7" className="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444" />
                                                                              </svg>
                                                                              </label>
                                                                              <input type="text" id="default-search"
                                                                                    defaultValue={user && user.email}
                                                                                    {...register("email", { required: true })}
                                                                                    className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none " placeholder="" required="" />
                                                                        </div>
                                                                  </div>

                                                                  <div className="relative mb-4">
                                                                        <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">Title<svg width="7" height="7" className="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                              <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444" />
                                                                        </svg>
                                                                        </label>
                                                                        <input type="text" id="default-search"
                                                                              {...register("title", { required: true })}
                                                                              className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none " placeholder="" required="" />
                                                                  </div>

                                                                  <div className="relative mb-4">
                                                                        <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">Write Your Review<svg width="7" height="7" className="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                              <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444"></path>
                                                                        </svg>
                                                                        </label>
                                                                        <div className="flex">
                                                                              <div className="relative w-full">
                                                                                    <textarea
                                                                                          {...register("description", { required: true })}
                                                                                          className="block w-full h-40 px-4 py-2.5 text-base leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-2xl placeholder-gray-400 focus:outline-none resize-none" placeholder="Write a message..."></textarea>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                                  <button type="submit"
                                                                        className="relative rounded px-5 py-2.5 overflow-hidden group bg-yellow-400 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-yellow-400 transition-all ease-out duration-300">
                                                                        <span
                                                                              className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                                                        <span className="relative text-base font-semibold">Give Feedback</span>
                                                                  </button>
                                                            </form>

                                                            <div className="modal-action">
                                                                  <button className="btn" onClick={closeModal}>Close</button>
                                                            </div>
                                                      </Modal>
                                                </div>
                                          </div>
                                    </div>



                                    {
                                          product?.reviews?.length > 0 ?
                                                product?.reviews?.map(item => <ReviewCard key={item} item={item}></ReviewCard>) : <div className='text-lg'>
                                                      There is No Review, please give your valuable feedback!
                                                </div>

                                    }

                              </div>
                        </div>

                  </section >

            </ >
      );
};

export default Review;