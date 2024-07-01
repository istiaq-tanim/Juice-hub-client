import About from "../About/About";
import Banner from "../Banner/Banner";
import BestSeller from "../BestSeller/BestSeller";
import Brands from "../Brands/Brands";
import Hero from "../Hero/Hero";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <BestSeller></BestSeller>
            <About></About>
            <Hero></Hero>
            <Brands></Brands>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;