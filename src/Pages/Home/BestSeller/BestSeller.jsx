import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Swiper, SwiperSlide } from 'swiper/react';


const BestSeller = () => {
    const [popular, setPopular] = useState([])
    useEffect(() => {

        fetch("http://localhost:5000/popular")
            .then(res => res.json())
            .then(data => {
                setPopular(data)
            })

    }, [])
    return (
        <div className="max-w-[1240px] lg:w-full p-5 mx-auto">
            <div>
                <h3 className='text-center text-3xl text-[#ABCA37]'>Our Best Selling Product</h3>
                <Swiper
                    spaceBetween={10}
                    breakpoints={{
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                    }}
                    navigation={{
                        nextEl: ".btn-next-slide",
                        prevEl: ".btn-prev-slide",
                    }}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {
                        popular.map(item =>
                            <SwiperSlide key={item._id}>
                                <div className="w-72  bg-white shadow-xl rounded-xl duration-500 hover:scale-105 hover:shadow-2xl mt-10 flex flex-col h-full">

                                    <img src={item?.image}
                                        alt="Product" className="h-48 w-72 object-cover rounded-t-xl" />
                                    <div className="px-4 py-3 w-72 flex-grow">
                                        <p className="text-lg font-bold text-black truncate block capitalize">{item?.name}</p>
                                        <p className="text-lg font-semibold text-black cursor-auto">Price: ${item?.price}</p>
                                        <p className="text-lg  text-black cursor-auto text-justify">{item?.description.slice(0, 80)}...</p>
                                        <p className="text-lg font-semibold text-black cursor-auto">Sell Number:{item?.sellNumber}</p>

                                    </div>

                                    <div className="mt-auto mb-5 flex justify-center">
                                        <button className="bg-transparent text-slate-500 border border-slate-700 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                                            <span className="bg-slate-700 shadow-slate-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                                            View details
                                        </button>
                                    </div>

                                </div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
                <div className="flex justify-center items-center gap-5 mt-10">
                    <div className="btn-next-slide">
                        <FaArrowLeft size={20} className="text-red-300" />
                    </div>
                    <div className="btn-prev-slide">
                        <FaArrowRight size={20} className="text-red-300" />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BestSeller;