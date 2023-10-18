import Navigation from '../Shared/NavigationBar/Navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';


const Root = () => {
    return (
        <>
            <header>
                <Navigation></Navigation>
            </header>
            <main className='min-h-screen'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
            <ToastContainer></ToastContainer>
        </>
    );
};

export default Root;