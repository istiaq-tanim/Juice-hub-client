import image1 from "../../../assets/Group_11-ezgif.com-webp-to-jpg-converter.jpg";
import image2 from "../../../assets/Mockup_1-ezgif.com-webp-to-jpg-converter.jpg";
import image3 from "../../../assets/Mockup_3-ezgif.com-webp-to-jpg-converter.jpg";
const Hero = () => {
    return (
        <div className="lg:grid grid-cols-4 lg:pl-24 px-5 gap-12 mt-5">
            <div>
                <h1 className="text-3xl w-72 mb-5">Sip The Savings: Enjoy Up To 30% Off On Revitalizing Smoothies</h1>
                <p className="text-justify font-lg font-serif">Indulge in a refreshing journey of flavor and wellness with our revitalizing smoothies, now available at an irresistible discount of up to 30% off. Treat yourself to a delightful blend of nutritious ingredients expertly crafted to energize your day.</p>
                <button className="bg-transparent my-5 text-slate-500 border border-slate-700 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                    <span className="bg-slate-700 shadow-slate-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Shop Now
                </button>
            </div>
            <div className="col-span-3 flex flex-col lg:flex-row gap-10 mt-5 justify-center items-center">
                <img src={image1} className="lg:w-80 w-96 object-cover " alt="" />
                <img src={image2} className="lg:w-80 w-96 object-cover " alt="" />
                <img src={image3} className="lg:w-80 w-96 object-cover " alt="" />

            </div>
        </div>
    );
};

export default Hero