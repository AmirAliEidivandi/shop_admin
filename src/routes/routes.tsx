import { Routes, Route } from "react-router-dom";
import Categories from "src/components/categories/Categories";
import EditCategory from "src/components/categories/EditCategory";
import Coupons from "src/components/coupons/Coupons";
import NewCoupon from "src/components/coupons/NewCoupon";
import OrderDetails from "src/components/orders/OrderDetails";
import Orders from "src/components/orders/Orders";
import Payments from "src/components/payments/Payments";
import EditProduct from "src/components/products/EditProduct";
import Products from "src/components/products/Products";
import Shipments from "src/components/shipments/Shipments";

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
        path: "/orders/:orderID",
        component: <OrderDetails />,
    },
    {
        path: "/payments",
        component: <Payments />,
    },
    {
        path: "/coupons",
        component: <Coupons />,
    },
    {
        path: "/coupons/new",
        component: <NewCoupon />,
    },
    {
        path: "/shipments",
        component: <Shipments />
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
