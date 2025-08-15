import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "../pages/Product/Product";
import TalkUs from "../pages/TalkUs/TalkUs";
import MainLayout from "../layouts/MainLayout";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/product" element={<Product />} />
          <Route path="/talkus" element={<TalkUs />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
