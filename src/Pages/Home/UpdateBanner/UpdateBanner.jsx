import {
      HiOutlineArrowNarrowLeft,
      HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation } from "swiper";
import img1 from "../../../assets/banner-1.jpg";
import img2 from "../../../assets/banner-2.jpg";
import img3 from "../../../assets/banner-3.jpg";
const UpdateBanner = () => {
      return (
            <div className="relative -top-20">
                  <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        navigation={{
                              nextEl: ".btn-next",
                              prevEl: ".btn-prev",
                        }}
                        autoplay={{
                              delay: 2500,
                              disableOnInteraction: false,
                        }}
                        modules={[Autoplay, Navigation]}
                        className="mySwiper group overflow-hidden relative w-full h-full lg:h-[650px]"
                  >
                        <SwiperSlide>
                              <img src={img1} alt="banner" className="object-cover" />
                              <div className="absolute flex items-center justify-center w-full h-full left-0 top-0">
                                    <div className="w-10/12 max-w-7xl text-[#fff] mx-auto space-y-3 lg:pl-0 pl-2">
                                          <h1 className="text-3xl lg:text-5xl font-serif">
                                                Juice Up Your Day
                                          </h1>
                                          <p className="semibold text-xl">
                                                Energize Your Day, Naturally
                                          </p>
                                          <button className="bg-transparent text-slate-200 border border-slate-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                                                <span className="bg-slate-200 shadow-slate-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                                                Explore More
                                          </button>
                                    </div>
                              </div>
                        </SwiperSlide>
                        <SwiperSlide>
                              <img alt="banner" className="object-cover" src={img3} />
                              <div className="absolute flex items-center justify-center w-full h-full left-0 top-0 ">
                                    <div className="w-10/12 max-w-7xl text-[#fff] mx-auto space-y-3 lg:pl-0 pl-2">
                                          <h1 className="text-3xl lg:text-5xl font-serif">
                                                Healthy, Tasty, Refreshing
                                          </h1>
                                          <p className="semibold text-xl">
                                                Sip the Goodness of Nature
                                          </p>
                                          <button className="bg-transparent text-slate-200 border border-slate-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                                                <span className="bg-slate-200 shadow-slate-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                                                Explore More
                                          </button>
                                    </div>
                              </div>
                        </SwiperSlide>
                        <SwiperSlide>
                              <img className="object-cover" src={img2} alt="banner" />
                              <div className="absolute flex items-center justify-center w-full h-full left-0 top-0">
                                    <div className="w-10/12 max-w-7xl text-[#fff] mx-auto space-y-3 lg:pl-0 pl-2">
                                          <h1 className="text-3xl lg:text-5xl font-serif">
                                                Natures Best in Every Drop
                                          </h1>
                                          <p className="semibold text-xl">
                                                Experience the True Essence of Freshness
                                          </p>
                                          <button className="bg-transparent text-slate-200 border border-slate-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                                                <span className="bg-slate-200 shadow-slate-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                                                Explore More
                                          </button>
                                    </div>
                              </div>
                        </SwiperSlide>

                        <div className="btn-next z-10 top-[50%] duration-500 absolute group-hover:left-0 -left-[25rem] w-[40px] h-[40px] bg-[#1d96b4] grid place-items-center text-white">
                              <HiOutlineArrowNarrowLeft></HiOutlineArrowNarrowLeft>
                        </div>
                        <div className="btn-prev z-10 top-[50%] duration-500 absolute group-hover:right-0 -right-[25rem] w-[40px] h-[40px] bg-[#1d96b4] grid place-items-center text-white">
                              <HiOutlineArrowNarrowRight></HiOutlineArrowNarrowRight>
                        </div>
                  </Swiper>
            </div>
      );
};

export default UpdateBanner;