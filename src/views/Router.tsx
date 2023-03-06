import {createBrowserRouter, createHashRouter} from "react-router-dom";
import Root from "./Root";
import Home from "./screens/Home";
import Tv from "./screens/Tv";
import Search from "./screens/Search";

const BASE_URL = document.URL;
(() => console.log("Base URL : ", BASE_URL))();
export const router = createHashRouter([
    {
        path: "/",
        element: (<Root/>),

        children: [
            {
                path: "",
                element: <Home/>,
                children:[
                    {
                        path:"movies/:movieId",
                        element:<Home/>
                    }
                ]
            },
            {
                path: "tv",
                element: <Tv/>,
            },
            {
                path: "search",
                element: <Search/>
            }
        ]
    }
]);