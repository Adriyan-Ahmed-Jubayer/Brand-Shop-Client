import { Link, useLoaderData } from "react-router-dom";
import { AiTwotoneStar } from 'react-icons/ai';
import { useContext } from "react";
import { AuthContext } from "../../../Providers/Auth/AuthProvider";
import { toast } from "react-toastify";

const Details = () => {
    const product = useLoaderData();
    const {_id, name, image, brand, price, type, rating, shortDescription } = product;
    const { User } = useContext(AuthContext);

    const handleAdd = () => {

        const uid = User.uid;
        const item = { ...product, uid }
        delete item._id;

        fetch('http://localhost:4849/collections', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success('The product Successfully added in your Cart List !🤩❤️ ')
                }
            })
    }

    const handleBuy = () => {
        toast.success('You have successfully purchased the product !🤩❤️ ')
    }
    return (
        <>
            <section className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center ">
                    <div className="flex-1">
                        <img className="w-full rounded-xl" src={image} alt="" />
                    </div>
                    <div className="flex-1 md:p-3 lg:p-12 space-y-4">
                        <div className=" space-y-4 ">
                            <h1 className="text-xl md:text-3xl lg:text-5xl"><span className="font-semibold">Product Name:</span> {name}</h1>
                            <h1 className="text-lg md:text-2xl lg:text-4xl"><span className="font-semibold">Brand Name:</span> {brand}</h1>
                            <hr />
                        </div>
                        <div className="space-y-4">
                            <div className="flex lg:justify-between flex-wrap md:justify-center gap-3 text-sm md:text-base lg:text-lg">
                                <p className="flex"><span className="flex items-center font-semibold">Ratings<AiTwotoneStar className="text-yellow-500"></AiTwotoneStar></span> <span className="font-semibold">:</span> {rating}/5 </p>
                                <h3 className=""> <span className="font-semibold">Price :</span> ${price} </h3>
                                <h3 className=""> <span className="font-semibold">Type :</span> {type} </h3>
                            </div>
                            <div className="flex justify-between md:gap-5 text-sm md:text-base lg:text-lg">
                                <button onClick={handleAdd} className="text-xs md:text-sm lg:text-base border-purple-500 border-2 hover:bg-purple-600 p-3 md:px-5 lg:py-4 lg:px-9 rounded-md  hover:text-white font-semibold cursor-pointer">Add to Cart</button>
                                <button onClick={handleBuy} className="text-xs md:text-sm lg:text-base bg-purple-500 hover:bg-purple-600 p-3 md:px-5 lg:py-4 lg:px-9 rounded-md  text-white font-semibold cursor-pointer">Buy Now</button>
                                <Link to={`/update/${_id}`}>
                                    <button className="text-xs md:text-sm lg:text-base border-purple-500 border-2 text-black hover:bg-purple-600 p-3 md:px-5 lg:py-4 lg:px-9 rounded-md  hover:text-white font-semibold cursor-pointer">Update</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <article className="px-10 py-8 md:py-10 my-10 md:my-0 md:mb-8 bg-purple-500 rounded-tr-full rounded-tl-full rounded-bl-full md:mx-10 ">
                    <p className="text-[11px] text-white md:text-[16px] lg:text-[18px] leading-7 md:leading-8"> {shortDescription}</p>
                </article>
            </section>
        </>
    );
};

export default Details;