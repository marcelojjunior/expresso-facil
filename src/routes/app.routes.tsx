import {
    Outlet,
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";

import { Home } from "./routes";

export const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Outlet />}>
            <Route index element={<Home />} />
        </Route>
    )
)