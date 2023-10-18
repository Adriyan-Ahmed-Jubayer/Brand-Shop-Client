import { useContext } from "react";
import { AuthContext } from "../../../Providers/Auth/AuthProvider";
import { BsGoogle } from "react-icons/bs"

const Login = () => {
    return (
        <>
            <section className=" flex justify-center items-center">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 card-body">
                    <form className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="flex items-center gap-1">
                        <div className="bg-violet-500 h-2 w-full"></div>
                        <h1>OR</h1>
                        <div  className="bg-violet-500 h-2 w-full"></div>
                    </div>
                    <div className="text-center mt-8">
                        <button className="text-purple py-2 px-4 md:py-4 md:px-8 rounded-sm font-bold border-purple-600 border-2 w-full flex items-center justify-center gap-2 hover:text-purple-600"><BsGoogle></BsGoogle>Login With Google</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;