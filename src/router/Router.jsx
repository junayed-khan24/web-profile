import { createBrowserRouter } from "react-router";
import Home from "../Components/Home";
import Error from "../Components/Error";
import BlogDetails from "../Components/Blogs/BlogDetails";
import Layout from "../layout/Layout";
import Blogs from "../Components/Blogs/Blogs";


const router = createBrowserRouter ([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/blogs',
                Component: Blogs
            },
            {
                path: '/blogs/:id',
                Component: BlogDetails
            },
        ]

    },
    {
        path: '/*',
        element: <Error></Error>
    }
]);

export default router;