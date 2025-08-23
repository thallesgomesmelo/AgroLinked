import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "../pages/Product/Product";
import TalkUs from "../pages/TalkUs/TalkUs";
import MainLayout from "../layouts/MainLayout";
import Beneficios from "../pages/Beneficios/Beneficios";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path="/produto" element={<Product />} />
                    <Route path="/beneficios" element={<Beneficios />} />
                    <Route path="/talkus" element={<TalkUs />} />
                </Routes>
            </MainLayout>
        </BrowserRouter>
    );
}
