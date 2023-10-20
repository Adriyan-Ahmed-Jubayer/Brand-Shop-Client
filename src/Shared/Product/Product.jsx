import { Link } from "react-router-dom";

const Product = ({ item }) => {
    const { image, name, brand, type, _id, price, detailsButton } = item;
    return (
        <>
            <div className="p-4 border-purple-500 border-2 rounded-xl flex flex-col lg:flex-row items-center gap-2">
                <div className="flex-1">
                    <img className=" mx-auto h-[300px] " src={image} alt="" />
                </div>
                <div className="flex  lg:flex-col justify-between flex-1">
                    <div className="flex-1 lg:flex-none ">
                        <h1 className="text-lg font-semibold">Name: {name} </h1>
                        <h1 className="text-lg font-semibold" >Brand: {brand} </h1>
                    </div>
                    <div className="flex-1 lg:flex-none">
                        <h1 className="text-lg font-semibold">Type: {type} </h1>
                        <h1 className="text-lg font-semibold" >Price: ${price} </h1>
                    </div>
                </div>
                <div className="flex-1">
                    <Link to={`/products/${brand}/${_id}`}>
                        <button className="text-xs md:text-sm lg:text-base bg-purple-500 p-3 md:px-5 lg:py-4 lg:px-9 rounded-md  text-white font-semibold cursor-pointer">More Details</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Product;