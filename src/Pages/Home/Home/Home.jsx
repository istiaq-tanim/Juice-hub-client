import About from "../About/About";
import BestSeller from "../BestSeller/BestSeller";
import Brands from "../Brands/Brands";
import Hero from "../Hero/Hero";
import Testimonial from "../Testimonial/Testimonial";
import UpdateBanner from "../UpdateBanner/UpdateBanner";

const Home = () => {
    return (
        <div>

            <UpdateBanner></UpdateBanner>
            <BestSeller></BestSeller>
            <About></About>
            <Hero></Hero>
            <Brands></Brands>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;