import { Routes, Route } from "react-router-dom";
import Categories from "src/components/categories/Categories";
import EditCategory from "src/components/categories/EditCategory";
import OrderDetails from "src/components/orders/OrderDetails";
import Orders from "src/components/orders/Orders";
import EditProduct from "src/components/products/EditProduct";
import Products from "src/components/products/Products";

interface RouteItem {
    path: string;
    component: any;
}

const routes: RouteItem[] = [
    {
        path: "/products",
        component: <Products />,
    },
    {
        path: "/categories/edit",
        component: <EditCategory />,
    },
    {
        path: "/categories",
        component: <Categories />,
    },
    {
        path: "/products/edit",
        component: <EditProduct />,
    },
    {
        path: "/orders",
        component: <Orders />,
    },
    {
        path: '/orders/:orderID',
        component: <OrderDetails />,
    }
];

const RenderRoutes = () => {
    return (
        <Routes>
            {routes?.map((route: RouteItem, i) => (
                <Route key={i} path={route.path} element={route.component} />
            ))}
        </Routes>
    );
};

export default RenderRoutes;
