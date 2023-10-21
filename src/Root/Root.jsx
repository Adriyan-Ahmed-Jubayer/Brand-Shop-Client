import Navigation from '../Shared/NavigationBar/Navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';


const Root = () => {

    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system');
    const element = document.documentElement
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const options = [
        {
            icon: "sunny",
            text: 'light'
        },
        {
            icon: "moon",
            text: "dark"
        },
        {
            icon: 'desktop-outline',
            text: 'system'
        }
    ];

    const onWindowMatch = () => {
       if (localStorage.theme === 'dark' || (!("theme" in localStorage) && darkQuery.matches)) {
        element.classList.add('dark');
       } else {
        element.classList.remove('dark')
       }
    }
    onWindowMatch();
    useEffect(() => {
       switch (theme) {
        case 'dark':
            element.classList.add('dark');
            localStorage.setItem('theme', 'dark')
            break;
        case 'light':
            element.classList.remove('dark');
            localStorage.setItem('theme', 'light')
            break
        default:
            localStorage.removeItem('theme');
            onWindowMatch();
            break;
       }
    }, [theme]);

    darkQuery.addEventListener('change', (e) => {
        if (!("theme" in localStorage)) {
            if(e.matches) {
                element.classList.add('dark');
            } else {
                element.classList.remove('dark')
            }
        } 
    })
    return (
        <main className=' dark:text-gray-100 dark:bg-slate-900 duration-100 '>
            <div className='fixed top-5 content-center duration-100 text-center lg:text-right lg:right-5 w-full'>
                {
                    options.map(opt => (
                <button key={opt.text} className={` w-10 h-10 leading-9 md:text-xl dark:bg-slate-800 bg-gray-100 ${theme === opt.text && "text-sky-600"}`} onClick={() => setTheme(opt.text)}>
                    <ion-icon name={opt.icon}></ion-icon>
                </button>
                        
                    ))
                }
            </div>
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
        </main>
    );
};

export default Root;