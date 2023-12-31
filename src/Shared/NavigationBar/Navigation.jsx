import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { BallTriangle } from 'react-loader-spinner'
import { AuthContext } from "../../Providers/Auth/AuthProvider";
import { toast } from "react-toastify";

const Navigation = () => {
    const { User, LogOutAccount } = useContext(AuthContext);
    const handleLogOut = () => {
        LogOutAccount()
            .then(res => {
                toast.success('Log Out Successful')
            })
    }
    return (
        <>
            <section className="container mx-auto py-5">
                <div className="navbar py-1">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className=" btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu dark:text-black menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <NavLink className={({ isActive }) => isActive ? '' : ''} to='/'>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive }) => isActive ? '' : ''} to='/add-product'>Add Product </NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive }) => isActive ? '' : ''} to={`/collection/${User?.uid}`}>My Cart</NavLink>
                                </li>
                            </ul>
                        </div>
                        <Link className=" btn-ghost text-xl flex items-center gap-1 md:gap-2.5 lg:gap-4 ">
                            <img className="h-[30px] md:h-[40px] lg:h-[50px] " src="https://i.ibb.co/BVV1mcq/pngegg-1.png" alt="Logo" />
                            <h1 className="text-base md:text-lg lg:text-xl font-bold"><span className="text-blue-600">High</span><span className="text-red-500">Tech</span></h1>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex items-center">
                        <ul className="menu menu-horizontal px-1 flex items-center font-medium text-xs md:text-sm lg:text-base">
                            <li>
                                <NavLink className={({ isActive }) => isActive ? 'bg-base-200 dark:bg-slate-600' : ''} to='/'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? 'bg-base-200 dark:bg-slate-600' : ''} to='/add-product'>Add Product </NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? 'bg-base-200 dark:bg-slate-600' : ''} to={`/collection/${User?.uid}`}>My Cart</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-end flex-wrap ">
                        {
                            User ? <>
                                <div className="flex flex-col-reverse md:flex-row md:gap-2 items-center pr-1 md:pr-2 lg:pr-4 border-blue-600 border-r-4">
                                    <div>
                                        <h1 className="text-xs md:text-base lg:text-lg font-bold">{User.displayName}</h1>
                                    </div>
                                    <div className="dropdown dropdown-end">
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-8 md:w-10 rounded-full">
                                                <img src={User.photoURL} />
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <button onClick={handleLogOut} className="text-xs md:text-sm ml-2 lg:text-base bg-purple-500 hover:bg-purple-600 p-3 md:px-5 lg:py-4 lg:px-9 rounded-md  text-white font-semibold cursor-pointer">
                                    LOGOUT
                                </button>
                            </> : <Link to="/login">
                                <button className="text-xs md:text-sm lg:text-base bg-purple-500 hover:bg-purple-600 p-3 md:px-5 lg:py-4 lg:px-9 rounded-md  text-white font-semibold cursor-pointer">LOGIN</button>
                            </Link>
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Navigation;