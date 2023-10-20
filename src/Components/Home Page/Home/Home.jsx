import About from "../About/About";
import Banner from "../Banner/Banner";
import BrandCategory from "../Brand Category/BrandCategory";
import Faq from "./Faq/Faq";

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <BrandCategory></BrandCategory>
            <About></About>
            <Faq></Faq>
        </>
    );
};

export default Home;