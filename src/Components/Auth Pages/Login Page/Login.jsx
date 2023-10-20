import { useContext } from "react";
import { AuthContext } from "../../../Providers/Auth/AuthProvider";
import { BsGoogle } from "react-icons/bs"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
    const Location = useLocation();
    const track = useNavigate();
    const navigate = () => {
        console.log(Location.state);
        track(Location?.state ? Location.state : "/")
    }
    const { LoginAccount, GoogleLogin } = useContext(AuthContext);
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pass = form.password.value;
        LoginAccount(email, pass)
            .then(res => {
                if (res) {
                    toast.success('Login successful! You now have access. 🎉😊', {
                        position: "top-center"
                    })
                    navigate()
                }
            })
            .catch(err => {
                if (err.message == 'Firebase: Error (auth/network-request-failed).') {
                    toast.error('Your Network Connection is Too Slow!')
                }
                else {
                    toast.error(err.message, {
                        position: "top-center"
                    })

                }
            })
    }

    const handleGGLLogin = () => {
        GoogleLogin()
            .then(res => {
                if (res) {
                    toast.success('Login successful! You now have access. 🎉😊', {
                        position: "top-center"
                    })
                    navigate()
                }
            })
            .catch(err => {
                toast.error(err.message)
            })
    }
    return (
        <>
            <section className=" flex justify-center items-center">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 card-body">
                    <form onSubmit={handleLogin} className="">
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
                            <button className="text-xs md:text-sm lg:text-base bg-purple-500 hover:bg-purple-600 p-3 md:px-5 lg:py-4 lg:px-9 rounded-md  text-white font-semibold cursor-pointer">LOGIN</button>
                        </div>
                    </form>
                    <div className="text-black text-center">
                        <p>Already have an account <Link to="/register" className="text-purple-600  font-bold hover:border-purple-500 hover:border-b-2">REGISTER</Link> </p>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="bg-violet-500 h-2 w-full"></div>
                        <h1>OR</h1>
                        <div className="bg-violet-500 h-2 w-full"></div>
                    </div>
                    <div className="text-center mt-8">
                        <button onClick={handleGGLLogin} className="text-purple py-2 px-4 md:py-4 md:px-8 rounded-sm font-bold border-purple-500 border-2 w-full flex items-center justify-center gap-2 hover:text-purple-600"><BsGoogle></BsGoogle>Login With Google</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;