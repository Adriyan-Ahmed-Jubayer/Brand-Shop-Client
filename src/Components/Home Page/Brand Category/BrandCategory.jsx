import { useEffect, useState } from "react";

const BrandCategory = () => {
    const [Brands, setBrands] = useState([]);
    useEffect(() => {
        fetch('Brands.json')
            .then(res => res.json())
            .then(data => setBrands(data));
    }, [])
    return (
        <>
            <section className="container mx-auto space-y-5 my-12">
                <div>
                    <h1 className="text-center text-xl md:text-3xl lg:text-5xl font-bold">Our Popular Brands</h1>
                </div>
                <div className="flex items-center justify-center gap-4 md:gap-8 lg:gap-14 lg:justify-between flex-wrap">
                    {
                        Brands.map(brand =>
                            <div key={brand.slug} className="text-center border-purple-500 border rounded-lg p-5">
                                <img className="h-[40px] md:h-[100px] lg:h-[180px] w-[100px] md:w-[200px] lg:w-[400px] rounded-lg " src={brand.image} alt="" />
                                <h1>{brand.name}</h1>
                            </div>)
                    }
                </div>
            </section>
        </>
    );
};

export default BrandCategory;