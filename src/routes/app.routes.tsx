import {
    Outlet,
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";

import { Home, Tracking, Contact, Services, Faq } from "./routes";
import DefaultLayout from "../layouts/DefaultLayout";

export const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Outlet />}>
            <Route path="/" element={<DefaultLayout />}>
                <Route index element={<Home />} />
                <Route path="/tracking" element={<Tracking />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
                <Route path="/faq" element={<Faq />} />
            </Route>
        </Route>
    )
)