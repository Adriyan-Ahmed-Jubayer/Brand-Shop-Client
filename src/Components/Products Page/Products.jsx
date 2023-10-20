import { useLoaderData } from "react-router-dom";
import Product from "../../Shared/Product/Product";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const Products = () => {
    const Items = useLoaderData();
    return (
        <>
            {
                Items.length > 0 ? <section>
                    <div>
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                        >
                            <SwiperSlide>
                                <img className="w-full md:h-[350px] lg:h-[800px] " src="https://static.vecteezy.com/system/resources/thumbnails/002/478/302/small/sale-electronics-banner-background-free-vector.jpg" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="lg:h-[800px] md:h-[350px] w-full" src="https://i.ibb.co/981YYwd/offer-2-edited.jpg" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img className=" md:h-[350px] w-4/6 lg:h-[800px] mx-auto " src="https://img.freepik.com/free-vector/end-season-sale-template_1017-19824.jpg" alt="" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 container mx-auto my-12">
                        {
                            Items?.map(item => <Product key={item._id} item={item} ></Product>)
                        }
                    </div>
                </section> : <div>
                    <h1 className="text-xl md:text-3xl lg:text-5xl text-center min-h-screen flex items-center justify-center ">We do not have any products of this brand</h1>
                </div>

            }
        </>
    );
};

export default Products;