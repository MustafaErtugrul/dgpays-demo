import { Navigate } from "react-router-dom";
import CounterSample from "../contextSample/CounterSample";
import FavoritesPage from "../contextSample/FavoritesPage";
import ProductPage from "../contextSample/ProductPage";
import NoMatch from "../stateSample/NoMatch";
import AboutPage from "./AboutPage";
import AdminHomePage from "./AdminHomePage";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";
import ProductDetail from "./ProductDetail";
import { RequireAuth } from "./RequireAuth";
import UserDetail from "./UserDetail";
import UsersPage from "./UsersPage";

export const routeConfig = 
[
    {
        path:'/',
        element:<HomePage/>
    },
    {
        path:'/about',
        element:<AboutPage/>
    },
    {
        path:'/contact',
        element:<ContactPage/>
    },
    {
        path:'/users',
        element:<UsersPage/>
    },
    {
        path:'/users/:id',
        element:<UserDetail/>
    },
    {
        path:'/products',
        element:<ProductPage />
    },
    {
        path:'/products/:id/:name',
        element:<ProductDetail/>
    },
    {
        path:'/favorites',
        element:<FavoritesPage />
    },
    {
        path:'/counter',
        element:<CounterSample />
    },
    // {
    //     path:'/products',
    //     element:<Navigate to='/' replace />
    // },
    {
        path:'/admin',
        element:<RequireAuth><AdminHomePage /></RequireAuth>
    },  
    {
        path:'*',
        element: <NoMatch/>
    },

]