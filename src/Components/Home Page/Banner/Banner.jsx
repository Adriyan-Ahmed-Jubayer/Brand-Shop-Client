
const Banner = () => {

    return (
        <>
            <section className=" relative bg-cover bg-no-repeat w-full container mx-auto text-white flex flex-col justify-center" style={{ backgroundImage: "url('https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjEwMTYtYy0wOF8xLWtzaDZtemEzLmpwZw.jpg')" }} >
                <div className="space-y-1 md:space-y-4 lg:space-y-5 w-4/5 md:w-11/12 lg:w-7/12 text-center mx-auto py-10 md:py-20 lg:py-60">
                    <h1 className=" text-2xl md:text-3xl lg:text-5xl lg:leading-snug ">ElectroBytes: Navigating the <span className="text-purple-500">Digital World</span></h1>
                    <p className="  text-[10px] leading-5 md:text-[14px] md:leading-8 lg:text-[16px] lg:leading-10 raleway">"Discover Your Perfect Gadget at <span className="text-blue-600">High</span><span className="text-red-500">Tech</span> - Elevate Your Tech Game with the Latest Gadgets and Accessories. Shop Now for Innovation and Style!"</p>
                    <form className="space-x-2 md:space-x-3 lg:space-x-4">
                        <input type="text" placeholder="Type here" className="text-xs md:text-sm lg:text-base py-2 px-3 md:py-3 md:px-5 rounded-md md:max-w-[280px] lg:max-w-md md:w-full " />
                        <button className="text-xs md:text-sm lg:text-base bg-purple-500 hover:bg-purple-600 py-2 px-3 md:py-3 md:px-5 rounded-md  text-white font-semibold cursor-pointer">Search</button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Banner;