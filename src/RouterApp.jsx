import { createBrowserRouter, Link, RouterProvider } from "react-router-dom"
import Pricing from "./pages/Pricing"
const router =createBrowserRouter([{
path:"/pricing",
element: <Pricing/>
}])

export function RouterApp(){
    return <RouterProvider router={router}/>
    }