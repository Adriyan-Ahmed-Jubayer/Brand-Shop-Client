import { Link } from "react-router-dom";

const Add = () => {
    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brands = form.brands.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const type = form.type.value;
        const rating = form.rating.value;
        const description  = form.description.value;
        const product = {name, brands, price, photo, type,rating, description};

        fetch('http://localhost:4849/products', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => console.log(data))

    }
    return (
        <>
            <section className='mb-20'>
                <div className=" md:mx-10 lg:mx-[300px]">
                    <div className="bg-base-200 py-6 px-7 md:py-11 md:px-12 lg:py-[70px] lg:px-28 text-center rounded-[5px]">
                        <div className='space-y-3 md:space-y-6 lg:space-y-8'>
                            <h1 className="text-lg md:text-3xl lg:text-5xl    font-bold">Add Your Product</h1>
                            <p className='lg:px-16 text-[13px] md:text-[16px] lg:text-[18px] leading-6 md:leading-7 lg:leading-8 text-color'>you can add product </p>
                        </div>
                        <form onSubmit={handleAddProduct} className='grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-6'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-sm md:text-lg lg:text-xl  font-semibold ">Name</span>
                                </label>
                                <input type="text" placeholder="Enter product name" className="input input-bordered" name='name' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-sm md:text-lg lg:text-xl  font-semibold ">Brand Name</span>
                                </label>
                                <select name="brands" className="input input-bordered">
                                    <option value="Apple">Apple</option>
                                    <option value="Google">Google</option>
                                    <option value="Samsung">Samsung</option>
                                    <option value="Sony">Sony</option>
                                    <option value="Intel">Intel</option>
                                    <option value="Microsoft">Microsoft</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-sm md:text-lg lg:text-xl  font-semibold ">Price</span>
                                </label>
                                <input type="text" placeholder="Enter price" className="input input-bordered" name='price' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-sm md:text-lg lg:text-xl  font-semibold  ">Photo</span>
                                </label>
                                <input type="text" placeholder="Enter photo URL" className="input input-bordered" name='photo' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-sm md:text-lg lg:text-xl  font-semibold  ">Type</span>
                                </label>
                                <input type="text" placeholder="Enter product type" className="input input-bordered" name='type' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-sm md:text-lg lg:text-xl  font-semibold  ">Rating</span>
                                </label>
                                <input type="text" placeholder="Enter product rating" className="input input-bordered" name='rating' required />
                            </div>
                            <div className="form-control lg:col-span-2">
                                <label className="label">
                                    <span className="text-sm md:text-lg lg:text-xl  font-semibold  ">Short Description</span>
                                </label>
                                <input type="text" placeholder="Enter a short description" className="input input-bordered" name='description' required />
                            </div>
                            <button className='lg:col-span-2   mt-[10px] md:mt-[15px] lg:mt-[30px] text-base md:text-lg lg:text-xl py-2 md:py-3 lg:py-4 px-2 md:px-3 lg:px-4 rounded-[10px] bg-cyan-400 font-bold '>Add Coffee</button>
                        </form>
                    </div>
                    <div className="w-fit ">
                        <Link to='/' className=' w-fit '>
                            <button className='flex items-center justify-center gap-2 my-[10px] md:my-[30px] lg:my-[50px] text-base md:text-lg lg:text-xl py-2 md:py-3 lg:py-4 px-2 md:px-3 lg:px-4 rounded-md bg-cyan-400 font-bold '>Back to home</button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Add;