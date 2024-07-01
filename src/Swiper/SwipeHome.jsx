import { useContext, useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwipeContext } from "../Provider/SwipeProvider";

const places = [
      {
            id: 1,
            name: "Strawberry",
            image: "https://i.ibb.co/bgptVb6/strawberry-cocktail.jpg",
            backgroundImage:
                  "https://i.ibb.co/98vDDpg/jacek-dylag-k-H3-Sr9-K8-EBA-unsplash.jpg",
            info: "Strawberries are small, red, heart-shaped fruits known for their sweet taste, distinct aroma, and high nutritional value. Belonging to the genus Fragaria in the Rosaceae family, strawberries are rich in vitamin C, antioxidants, and dietary fiber. ",
      },
      {
            id: 2,
            name: "Mango",
            image: "https://i.ibb.co/LZzkGTy/julia-zyablova-Kl-VIYm-GVRQ8-unsplash.jpg",
            backgroundImage:
                  "https://i.ibb.co/DfHNKz6/sanjoy-saha-Co-Rop-Uy-D-Uo-unsplash.jpg",
            info: "Mangoes are tropical fruits renowned for their luscious taste, vibrant colors, and rich cultural significance. Belonging to the Anacardiaceae family, mangoes vary in shape, size, and color, with a sweet and juicy flesh surrounding a large, flat pit. These fruits are packed with essential nutrients like vitamin C, vitamin A, and dietary fiber, contributing to their potential health benefits, including immune support and digestive aid.",
      },
      {
            id: 3,
            name: "Grape",
            image: "https://i.ibb.co/zrRq13q/side-view-two-cherry-glasses-juice-with-cherries-tray.jpg",
            backgroundImage:
                  "https://i.ibb.co/HGqxTbv/al-elmes-QTg-Oj-DCi-JEo-unsplash.jpg",
            info: "Grapes are small, round or oval-shaped fruits, commonly found in clusters, and are celebrated for their sweet and tangy flavor. Belonging to the Vitaceae family, grapes come in various colors, including green, red, and purple, each offering a unique taste.",
      },
      {
            id: 4,
            name: "Kiwi",
            image: "https://i.ibb.co/ZKYPnKN/elena-leya-ro-Ben-ASe-Jt8-unsplash.jpg",
            backgroundImage:
                  "https://i.ibb.co/HdnP598/fruits-kiwi-mesh-bag-wooden-background-top-view-rustic-style.jpg",
            info: "Kiwi, also known as kiwifruit or Actinidia deliciosa, is a small, fuzzy-skinned fruit with vibrant green flesh and tiny black seeds. Originally from China but now cultivated in various countries, kiwi is renowned for its unique tangy-sweet flavor and high nutritional value. It is rich in vitamin C, vitamin K, vitamin E, and dietary fiber, offering potential health benefits such as immune support and digestive aid.",
      },
      {
            id: 5,
            name: "blue Berry",
            image: "https://i.ibb.co/86HHkpq/arrangement-with-forest-fruits-smoothie.jpg",
            backgroundImage:
                  "https://i.ibb.co/0FB4frC/hand-holding-fresh-plums-dark.jpg",
            info: "Blueberries  are small, round, deep blue or purple berries known for their sweet flavor and numerous health benefits. They belong to the Vaccinium genus and are part of the Ericaceae family. Packed with antioxidants, particularly anthocyanins, blueberries are considered a superfood and are celebrated for their potential to support brain health, cardiovascular health, and overall well-being. ",
      },
];


const SwipeHome = () => {
      const [currentPlace, setCurrentPlace] = useState(0);
      const { setPlace } = useContext(SwipeContext);

      useEffect(() => {
            console.log(places[currentPlace])
            setPlace(places[currentPlace]);
      }, [currentPlace, setPlace]);
      return (
            <div>
                  <Swiper
                        modules={[Navigation, Pagination]}
                        navigation={true}
                        pagination={{ clickable: true }}
                        loop={true}
                        className="mySwiper px-2"
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={(swiper) => {
                              setCurrentPlace(swiper.realIndex);
                              setPlace(places[swiper.realIndex]);
                        }}
                  >
                        {places.map((place) => (
                              <SwiperSlide key={place.id}>
                                    <img className="rounded-3xl h-full" src={place.image} alt={place.name} />
                              </SwiperSlide>
                        ))}
                  </Swiper>
                  <div className="pl-2 lg:pl-0">
                        <h2 className="text-xl">{places[currentPlace].name}</h2>
                        <p className="text-justify">{places[currentPlace].info}</p>
                  </div>
            </div>
      );
};

export default SwipeHome;
