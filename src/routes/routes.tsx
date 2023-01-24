import { Routes, Route } from "react-router-dom";
import Categories from "@/components/categories/Categories";
import EditCategory from "@/components/categories/EditCategory";
import Comments from "@/components/comments/Comments";
import Coupons from "@/components/coupons/Coupons";
import NewCoupon from "@/components/coupons/NewCoupon";
import OrderDetails from "@/components/orders/OrderDetails";
import Orders from "@/components/orders/Orders";
import Payments from "@/components/payments/Payments";
import EditProduct from "@/components/products/EditProduct";
import Products from "@/components/products/Products";
import NewSetting from "@/components/settings/NewSetting";
import Settings from "@/components/settings/Settings";
import Shipments from "@/components/shipments/Shipments";
import Users from "@/components/users/Users";

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
        component: <Shipments />,
    },
    {
        path: "/settings",
        component: <Settings />,
    },
    {
        path: "/settings/new",
        component: <NewSetting />,
    },
    {
        path: "/users",
        component: <Users />,
    },
    {
        path: "/comments",
        component: <Comments />,
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
