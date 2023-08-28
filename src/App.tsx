import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './styles/global.scss'

import Layout from "./Layout";
const Home = lazy(() => import("./pages/Home"));
const Users = lazy(() => import("./pages/Users"));
const Products = lazy(() => import("./pages/Products"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const User = lazy(() => import("./pages/User"));
const Product = lazy(() => import("./pages/Product"));




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path: "/",
        element: <Suspense><Home/></Suspense>
      },
      {
        path: "users",
        element: <Suspense><Users/></Suspense>
      },
      {
        path: "users/:id",
        element: <Suspense><User/></Suspense>
      },
      {
        path: "products",
        element: <Suspense><Products/></Suspense>
      },
      {
        path: "products/:id",
        element: <Suspense><Product/></Suspense>
      },
    ]
  },
  {
    path: "login",
    element: <Suspense><Login/></Suspense>
  },
  {
    path: "register",
    element: <Suspense><Register/></Suspense>
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;


