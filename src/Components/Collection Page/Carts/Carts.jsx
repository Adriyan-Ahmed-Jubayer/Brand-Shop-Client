import { useLoaderData, useParams } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useEffect, useState } from "react";

const Carts = () => {
    const {uid} = useParams();
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(`http://localhost:4849/collections/${uid}`)
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [products])
    return (
        <>
            <section>
                <div className="">
                    {
                        products.length > 0 ? <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto gap-8">
                            {
                                products.map(product => <Cart key={product._id} product={product} ></Cart>)
                            }
                        </div> : <h1 className="flex flex-col items-center justify-center min-h-screen text-xl md:text-3xl lg:text-5xl font-semibold "> You have not added any products yet ! </h1>
                    }
                </div>
            </section>
        </>
    );
};

export default Carts;