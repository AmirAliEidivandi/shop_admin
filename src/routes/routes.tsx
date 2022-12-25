import { Routes, Route } from "react-router-dom";
import Categories from "src/components/categories/Categories";
import EditCategory from "src/components/categories/EditCategory";
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
