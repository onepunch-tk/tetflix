import {createBrowserRouter} from "react-router-dom";
import Root from "./Root";
import Home from "./screens/Home";
import Tv from "./screens/Tv";
import Search from "./screens/Search";
import Header from "./components/Header";

const BASE_URL = document.URL;
(() => console.log("Base URL : ", BASE_URL))();
export const router = createBrowserRouter([
    {
        path: "/",
        element: (<Root/>),

        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "tv",
                element: <Tv/>
            },
            {
                path: "search",
                element: <Search/>
            }
        ]
    }
]);