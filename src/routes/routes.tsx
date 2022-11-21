import { Routes, Route } from "react-router-dom";
import EditCategory from "../components/products/EditCategory";
import Products from "../components/products/Products";

interface RouteItem {
    path: string;
    component: any;
}

const routes: RouteItem[] = [
    {
        path: "/products",
        component: Products,
    },
    {
        path: "/categories/edit",
        component: EditCategory,
    },
];

const RenderRoutes = () => {
    return (
        <Routes>
            {routes.map((route: RouteItem, i) => (
                <Route key={i} path={route.path} element={route.component} />
            ))}
        </Routes>
    );
};

export default RenderRoutes;
