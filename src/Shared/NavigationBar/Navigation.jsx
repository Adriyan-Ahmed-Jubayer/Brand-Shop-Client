import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <section className="container mx-auto">
                <div className="navbar my-1 md:my-7">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li>
                                    <Link to='add-product'>Add Product </Link>
                                </li>
                                <li>
                                    <Link to='/my-cart'>My Cart</Link>
                                </li>
                            </ul>
                        </div>
                        <Link className="btn btn-ghost normal-case text-xl flex items-center gap-1 md:gap-2.5 lg:gap-4 ">
                            <img className="h-[30px] md:h-[40px] lg:h-[50px] " src="https://i.ibb.co/BVV1mcq/pngegg-1.png" alt="Logo" />
                            <h1 className="text-base md:text-lg lg:text-xl font-bold"><span className="text-blue-600">High</span><span className="text-red-500">Tech</span></h1>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex items-center">
                        <ul className="menu menu-horizontal px-1 flex items-center font-medium text-xs md:text-sm lg:text-base">
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/add-product'>Add Product </Link>
                            </li>
                            <li>
                                <Link to='/my-cart'>My Cart</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-end ">
                        <Link to="/login">
                            <button className="text-xs md:text-sm lg:text-base bg-red-500 p-3 md:px-5 lg:py-4 lg:px-9 rounded-md  text-white font-semibold cursor-pointer">LOGIN</button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Navigation;