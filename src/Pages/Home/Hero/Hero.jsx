const Hero = () => {
    return (
        <div className="my-20 relative ">
            <img className="h-[600px] bg-cover w-full backdrop-blur-md" src="https://i.ibb.co/LtYqxkv/jugoslocos-GHsf8ny3-LF0-unsplash-1.jpg" />
            <div className="absolute top-32 left-10 text-justify w-1/2 space-y-5 ">
            <h3  className="text-5xl font-bold text-white">For your better life,  we <br /> provide you with a better <br /> diet.</h3>
            <p className="text-xl font-semibold text-white">Experience the refreshing taste of natural and handcrafted juices at our juice shop, Discover a symphony of flavors, carefully extracted from the freshest.</p>
            <button className="bg-[#ABCA37] text-white px-4 py-2 rounded-lg hover:bg-[#FBC72B]">Read More</button>
            </div>
        </div>
    );
};

export default Hero;