import { useEffect, useState } from "react";

import { EffectCoverflow, FreeMode, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';


const BestSeller = () => {
    const [popular, setPopular] = useState([])
    useEffect(() => {

        fetch("https://juice-hub-server.vercel.app/popular")
            .then(res => res.json())
            .then(data => {
                setPopular(data)
            })

    }, [])
    return (
        <div>
            <h3 className='text-center text-3xl text-[#ABCA37] mt-20'>Our Best Selling Product</h3>
            <>
                <Swiper
                    slidesPerView={3}
                    effect={'coverflow'}
                    spaceBetween={20}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    modules={[FreeMode, Pagination, EffectCoverflow]}
                    className="mySwiper"
                >
                    {
                        popular.map(item =>
                            <SwiperSlide key={item._id}>
                                <div className="flex flex-col items-center lg:mx-24 lg:my-16">
                                    <div className="avatar">
                                        <div className="w-full mt-5">
                                            <img src={item.image} />
                                        </div>
                                    </div>
                                    <h3 className="lg:text-2xl text-red-500 py-5 text-center uppercase">{item.name}</h3>
                                    <p className="text-red-500 text-center">Total Items Sold: {item.sellNumber}</p>
                                </div>
                            </SwiperSlide>
                        )
                    }


                </Swiper>
            </>
        </div>
    );
};

export default BestSeller;