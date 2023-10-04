import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LoginPage/Login";
import Register from "../Pages/RegisterPage/register";
import NewsDetails from "../Pages/MidilPage/NewsDetails";
import PriveteRoute from "./PriveteRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayOut></MainLayOut>,
        children:[
            {
                path: '/',
                element:<Home></Home>,
                loader: () => fetch('/news.json')
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path:'/singleNew1/:id',
                element:<PriveteRoute><NewsDetails></NewsDetails></PriveteRoute>
            }
        ]
    }
])
export default router;