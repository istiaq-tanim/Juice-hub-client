import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";


const Banner = () => {
    return (
        <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // pagination={{
        //   clickable: true,
        // }}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://i.ibb.co/q1b9pkm/glass-cup-fresh-pomegranate-juice-wooden-board.jpg" className="h-[600px] w-full bg-cover"/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/DgT2MCT/delicious-mojito-rum-cola-blood-orange-vodka-cocktails-served-with-fruit.jpg" className="h-[600px] bg-cover w-full"/></SwiperSlide>
        <SwiperSlide><img className="h-[600px] w-full" src="https://i.ibb.co/wdJKyvZ/selection-milkshake-glasses-with-fruits-chocolate.jpg" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/bWJNpm3/cold-watermelon-smoothie-dark-background.jpg" className="h-[600px] bg-cover  w-full" /></SwiperSlide>
        <SwiperSlide><img className="h-[600px] bg-cover  w-full" src="https://i.ibb.co/QPk8jZc/riccardo-andolfo-C6-Ze-OGbvej-M-unsplash.jpg"/></SwiperSlide>
        
      </Swiper>
    </>
    );
};

export default Banner;