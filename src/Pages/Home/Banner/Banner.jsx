
import { useContext } from "react";
import { SwipeContext } from "../../../Provider/SwipeProvider";
import SwipeHome from "../../../Swiper/SwipeHome";


const Banner = () => {
  const { place } = useContext(SwipeContext);
  return (
    <div
      className="relative bg-cover object-contain bg-no-repeat w-full h-screen pt-32"
      style={{
        backgroundImage: `url("${place?.backgroundImage || "/public/images/Rectangle 1.png"
          }")`,
        height: "100vh",
      }}
    >
      <div className="absolute inset-0 bg-black/50">

        <div className="grid grid-cols-1 gap-5 md:grid-cols-10 my-20">
          <div className="ml-12 hidden lg:block text-white col-span-4 space-y-4 mt-5  order-2 md:order-1">
            <h3 className="text-6xl font-bold">{place?.name}</h3>
            <p className="text-justify">{place?.info}</p>
          </div>
          <div className="text-white mt-5 mr-2 md:col-span-6 order-1 md:order-2">
            <SwipeHome></SwipeHome>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;