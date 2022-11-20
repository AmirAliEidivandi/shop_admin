import { Routes, Route } from "react-router-dom";

interface RouteItem {
    path: string;
    component: any;
}

const routes: RouteItem[] = [];

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
