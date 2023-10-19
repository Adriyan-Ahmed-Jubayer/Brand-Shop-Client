import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from 'react-toastify';
import { BallTriangle } from 'react-loader-spinner'
import { AuthContext } from "../../../Providers/Auth/AuthProvider";


const Protection = ({children}) => {
    const { User, isLoading } = useContext(AuthContext);

    const location = useLocation();

    if (isLoading) {
        return (<div className="flex justify-center items-center min-h-screen">
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#0000ff"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle=""
                visible={true}
            />
        </div>)
    }
    if (!User) {
        toast.warn('You need to login to access the route', {
            position: "top-center"
        })
        return <Navigate to="/login" state={location.pathname}></Navigate>
    }
    if (User) {
        return children;
    }
};

export default Protection;