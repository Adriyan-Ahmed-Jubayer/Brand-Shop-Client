import { Link } from "react-router-dom";
import Footer from "../../../Shared/Footer/Footer";
import Navigation from "../../../Shared/NavigationBar/Navigation";

const Error = () => {
    return (
        <>
            <header>
                <Navigation></Navigation>
            </header>
            <main>
                <section className="min-h-screen">
                    <div className="text-center">
                        <h1 className="text-6xl md:text-9xl lg:text-[300px] font-black"> 404 </h1>
                        <h1 className="text-2xl md:text-[30px] md:leading-snug font-semibold">Oops! That page can’t be found.</h1>
                        <p className=" text-[10px] leading-5 md:text-base">It looks like nothing was found at this location. <br /> Maybe try one of the links below or a search?</p>
                        <Link to="/" className="">
                            <button className="text-[10px] md:text-sm lg:text-base font-bold bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 md:py-4 md:px-8 rounded-xl mt-5">
                                Back To Home
                            </button>
                        </Link>
                    </div>
                </section>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    );
};

export default Error;