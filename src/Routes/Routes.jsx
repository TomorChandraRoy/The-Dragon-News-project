import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LoginPage/Login";

const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayOut></MainLayOut>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    }
])
export default router;