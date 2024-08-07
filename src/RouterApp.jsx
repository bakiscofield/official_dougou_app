import { createBrowserRouter, Link, RouterProvider } from "react-router-dom"
import Pricing from "./pages/Pricing"
import App from "./App"
import Contact from "./pages/Contact"
import About from "./pages/About"
const router = createBrowserRouter([{
    path: "/pricing",
    element: <Pricing />
},

{
    path: "/",
    element: <App />
},



{
    path: "/contact",
    element: <Contact />
},

{
    path: "/about",
    element: <About />
},


])

export default function RouterApp() {
    return <RouterProvider router={router} />
}