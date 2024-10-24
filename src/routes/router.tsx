import { Home } from "@/pages/home";
import { Post } from "@/pages/post";
import { createBrowserRouter } from "react-router-dom";

export const ROUTER = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/:slug",
        element: <Post />,
    },
]);