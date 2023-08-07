import { Swiper, SwiperSlide } from 'swiper/react';
import '@smastrom/react-rating/style.css'


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper';
import { useEffect} from 'react';
import { Rating, ThinStar } from '@smastrom/react-rating'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTestimonials } from '../../../features/Testimonilas/testimonialSlice';

const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: '#ffb700',
    inactiveFillColor: '#fbf1a9'
}
const Testimonial = () => {
    const {testimonials}=useSelector(state=>state.testimonials)
    console.log(testimonials)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchTestimonials())
    },[dispatch])

    return (
        <div>
            <h3 className='text-center font-bold text-3xl text-green-300'>Our Happy Customer</h3>
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
                                            <img src={testimonial?.image} />
                                        </div>
                                    </div>
                                    <p className="py-8 text-center">{testimonial?.review}</p>
                                    <h3 className="text-2xl text-orange-400 uppercase">{testimonial?.name}</h3>
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