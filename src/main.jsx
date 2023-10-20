import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Register from "./Components/Auth Pages/Register Page/Register";
import Login from "./Components/Auth Pages/Login Page/Login";
import AuthProvider from "./Providers/Auth/AuthProvider";
import Error from "./Components/Error Page/Error/Error";
import Home from "./Components/Home Page/Home/Home";
import ReactDOM from 'react-dom/client'
import Root from "./Root/Root";
import React from 'react'
import './index.css'
import Add from "./Components/AP Page/ADD/Add";
import Protection from "./Components/Protection Page/Protection/Protection";
import Products from "./Components/Products Page/Products";
import Details from "./Components/Details Page/Details/Details";
import Carts from "./Components/Collection Page/Carts/Carts";
import Update from "./Components/Update Page/Update/Update";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: '/add-product',
        element: <Protection><Add></Add></Protection>,
      },
      {
        path: '/products/:brand',
        element: <Products></Products> ,
        loader: ({params}) => fetch(`http://localhost:4849/products/${params.brand}`)
      },
      {
        path: '/products/:brand/:id',
        element: <Protection><Details></Details></Protection>,
        loader:  ({params}) => fetch(`http://localhost:4849/products/${params.brand}/${params.id}`)
      },
      {
        path: '/collection/:uid',
        element: <Protection><Carts></Carts></Protection>,
      },
      {
        path: '/update/:id',
        element: <Protection><Update></Update></Protection>,
        loader: ({params}) => fetch(`http://localhost:4849/products/brand/${params.id}`)
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
