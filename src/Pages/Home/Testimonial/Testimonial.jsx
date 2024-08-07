import '@smastrom/react-rating/style.css';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { Rating, ThinStar } from '@smastrom/react-rating';
import { useEffect, useState } from 'react';
import { EffectCoverflow, Pagination } from 'swiper';


const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: '#ffb700',
    inactiveFillColor: '#fbf1a9'
}
const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([])
    useEffect(() => {
        fetch("https://juice-hub-server.vercel.app/review")
            .then(res => res.json())
            .then(data => {
                setTestimonials(data)
            })
    }, [])

    return (
        <div>
            <h3 className='text-center text-3xl text-[#ABCA37]'>Our Happy Customer</h3>
            <>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    {
                        testimonials.map(testimonial =>
                            <SwiperSlide key={testimonial._id}>
                                <div className="flex flex-col items-center mx-24 my-16">
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={testimonial?.rating}
                                        itemStyles={myStyles}
                                        readOnly
                                    />
                                    <div className="avatar">
                                        <div className="w-24 mt-5 rounded-full">
                                            <img src={testimonial?.photo} />
                                        </div>
                                    </div>
                                    <p className="py-8 px-5 text-center">{testimonial?.description}</p>
                                    <h3 className="text-xl text-orange-400 uppercase">{testimonial?.name}</h3>
                                </div>
                            </SwiperSlide>
                        )
                    }


                </Swiper>
            </>
        </div>
    );
};

export default Testimonial;