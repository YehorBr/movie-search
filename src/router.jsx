import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";

export const routing = createBrowserRouter([
    {
        path: "/",
        element:<Layout/>,
        children:[{
            path:"",
        },]
    }
])