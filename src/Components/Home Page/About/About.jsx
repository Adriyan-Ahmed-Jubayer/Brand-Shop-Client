const About = () => {
    return (
        <>
            <section className=" my-12">
                <h1 className="text-center my-4 md:my-7 lg:my-9 font-bold text-xl md:text-3xl lg:text-5xl">About US</h1>
                <div className="text-center  py-5 md:py-9 lg:py-14">
                    <h1 className="text-xl md:text-3xl lg:text-5xl font-semibold"><span className="text-purple-500">Our Journey :</span> Tech Enthusiasts Unite</h1>
                    <div className="flex flex-col-reverse md:flex-row items-center">
                        <div className="flex-1 text-left text-xs md:text-sm lg:text-lg">
                            <p className=" md:ml-5 lg:ml-8 font-medium lg:leading-loose py-12 px-14 lg:py-14 lg:px-20 bg-purple-500  rounded-tr-full rounded-bl-full rounded-tl-full"> At HighTech , we are a passionate community of technology and electronics enthusiasts, dedicated to sharing our knowledge, discoveries, and insights with the world. Our "About Us" section is your window into the hearts and minds of the people behind this digital haven.

                                Discover the faces and stories that fuel our commitment to innovation and exploration. From our humble beginnings to our vision for the future, get to know the individuals who make up our vibrant team. Learn about our shared mission to bring you the latest in tech trends, gadget reviews, how-to guides, and much more.

                                Whether you're a fellow tech aficionado or simply curious about the minds that power the screens you interact with, this is the place where you can connect with us on a personal level. Welcome to our digital family, and explore the journey that led us to where we are today.
                            </p>
                        </div>
                        <div className="flex-1">
                            <img className="mx-auto" src="https://i.ibb.co/WvPbW4T/pngegg.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;