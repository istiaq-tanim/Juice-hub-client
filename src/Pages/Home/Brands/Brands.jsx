import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import image5 from "../../../../public/10.jpg";
import image3 from "../../../../public/4.jpg";
import image2 from "../../../../public/5.jpg";
import image1 from "../../../../public/6.jpg";
import image4 from "../../../../public/7.jpg";
import image6 from "../../../../public/8.jpg";
import image7 from "../../../../public/9.jpg";


const Brands = () => {
      return (
            <div className='my-20 max-w-[1240px] mx-auto'>
                  <h3 className='text-center text-3xl text-[#ABCA37] my-10'>Our Top Brands</h3>
                  <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        autoplay={{
                              delay: 1000,
                              disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                  >
                        <SwiperSlide>
                              <div className='bg-[#eeeded] h-24 flex justify-center items-center'>
                                    <img src={image1} alt="" />
                              </div>
                        </SwiperSlide>
                        <SwiperSlide>
                              <div className='bg-[#eeeded] h-24 flex justify-center items-center'>
                                    <img src={image2} alt="" />
                              </div>
                        </SwiperSlide>
                        <SwiperSlide>
                              <div className='bg-[#eeeded] h-24 flex justify-center items-center'>
                                    <img src={image3} alt="" />
                              </div>
                        </SwiperSlide>
                        <SwiperSlide>
                              <div className='bg-[#eeeded] h-24 flex justify-center items-center'>
                                    <img src={image4} alt="" />
                              </div>
                        </SwiperSlide>
                        <SwiperSlide>
                              <div className='bg-[#eeeded] h-24 flex justify-center items-center'>
                                    <img src={image5} alt="" />
                              </div>
                        </SwiperSlide>
                        <SwiperSlide>
                              <div className='bg-[#eeeded] h-24 flex justify-center items-center'>
                                    <img src={image6} alt="" />
                              </div>
                        </SwiperSlide>
                        <SwiperSlide>
                              <div className='bg-[#eeeded] h-24 flex justify-center items-center'>
                                    <img src={image7} alt="" />
                              </div>
                        </SwiperSlide>

                  </Swiper>
            </div>
      );
};

export default Brands;