import { Link } from "react-router-dom";
import { BsGoogle } from "react-icons/bs"
import { useContext } from "react";
import { AuthContext } from "../../../Providers/Auth/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
    const { CreateAccount, GoogleLogin, updatingProfile } = useContext(AuthContext)
    const SpCrtrRgx = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\|\-]/;
    const CpLetterRgx = /^(?=.*[A-Z]).+$/;
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const pass = form.password.value;
        const photo = form.photo.value;
        if (pass.length < 6) {
            toast.error('The password is less than 6 characters', {
                position: 'top-center'
            })
            return;
        }
        if (!CpLetterRgx.test(pass)) {
            toast.error("The password don't have a capital letter", {
                position: 'top-center'
            })
            return;
        }

        if (!SpCrtrRgx.test(pass)) {
            toast.error("The password don't have a special character", {
                position: 'top-center'
            })
            return;
        }

        CreateAccount(email, pass)
            .then(res => {
                updatingProfile(res, name, photo)
                console.log(res.user);
            })
            .catch(err => {
                if (err.message == "Firebase: Error (auth/email-already-in-use).") {
                    toast.error("The Email already in use")
                }
                else {
                    toast.error(err.message);
                }
            })
    }

    const handleGGLLoigin = () => {
        GoogleLogin()
            .then(res => {
                if (res) {
                    toast.success('Login successful! You now have access. 🎉😊', {
                        position: "top-center"
                    })
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
                    <form onSubmit={handleRegister} className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" name="name" required />
                        </div>
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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" placeholder="Image url" className="input input-bordered" name="photo" required />
                        </div>
                        <div className="form-control mt-6">
                        <button className="text-xs md:text-sm lg:text-base bg-purple-500 hover:bg-purple-600 p-3 md:px-5 lg:py-4 lg:px-9 rounded-md h text-white font-semibold cursor-pointer">REGISTER</button>
                        </div>
                    </form>
                    <div className="text-black text-center">
                        <p>Already have an account <Link to="/login" className="text-purple-600  font-bold hover:border-purple-600 hover:border-b-2">LOGIN</Link> </p>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="bg-violet-500 h-2 w-full"></div>
                        <h1>OR</h1>
                        <div className="bg-violet-500 h-2 w-full"></div>
                    </div>
                    <div className="text-center mt-8">
                        <button onClick={handleGGLLoigin} className="text-purple py-2 px-4 md:py-4 md:px-8 rounded-sm font-bold border-purple-500 border-2 w-full flex items-center justify-center gap-2 hover:text-purple-500"><BsGoogle></BsGoogle>Login With Google</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Register;