import ProductPage from "../contextSample/ProductPage";
import CustomerPage from "../contextSample/CustomerPage";
import NoMatch from "../stateSample/NoMatch";
import HomePage from "./HomePage";
import ProductDetail from "./ProductDetail";
import CustomerDetail from "./CustomerDetail";
import { RequireAuth } from "./RequireAuth";

export const routeConfig = 
[
    {
        path:'/',
        element:<HomePage/>
    },
    {
        path:'/products',
        element:<ProductPage />
    },
    {
        path:'/customers',
        element:<CustomerPage />
    },
    {
        path:'/customers/:id',
        element:<CustomerDetail/>
    },
    {
        path:'/products/:id/:name',
        element:<ProductDetail/>
    },
    {
        path:'*',
        element: <NoMatch/>
    },

]