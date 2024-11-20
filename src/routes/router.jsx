import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "./MainLayouts";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Register from "../pages/Register";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Login from "../pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      
    ],
  },
]);
