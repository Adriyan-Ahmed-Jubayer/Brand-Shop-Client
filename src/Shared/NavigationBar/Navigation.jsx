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
                                    <Link>Home</Link>
                                </li>
                                <li>
                                    <Link>Add Product </Link>
                                </li>
                                <li>
                                    <Link>My Cart</Link>
                                </li>
                            </ul>
                        </div>
                        <Link className="btn btn-ghost normal-case text-xl">
                            <img className="h-[30px] md:h-[40px] lg:h-[50px] " src="https://i.ibb.co/Qp4FjBw/logo2.png" alt="" />
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex items-center">
                        <ul className="menu menu-horizontal px-1 flex items-center font-medium text-xs md:text-sm lg:text-base">
                            <li>
                                <Link>Home</Link>
                            </li>
                            <li>
                                <Link>Add Product </Link>
                            </li>
                            <li>
                                <Link>My Cart</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-end ">
                        <Link>
                            <button className="text-xs md:text-sm lg:text-base bg-[#B68C5A] py-3 px-3 rounded-md  text-white font-semibold cursor-pointer">LOGIN</button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Navigation;