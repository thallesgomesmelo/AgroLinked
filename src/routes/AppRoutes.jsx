import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "../pages/Product/Product";
import MainLayout from "../layouts/MainLayout";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path="/product" element={<Product />} />
                </Routes>
            </MainLayout>
        </BrowserRouter>
    );
}