import {
    Outlet,
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";

import { Home } from "./routes";
import DefaultLayout from "../layouts/DefaultLayout";

export const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Outlet />}>
            <Route path="/" element={<DefaultLayout />}>
                <Route index element={<Home />} />
            </Route>
        </Route>
    )
)