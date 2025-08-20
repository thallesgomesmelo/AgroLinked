import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "../pages/Product/Product";
import TalkUs from "../pages/TalkUs/TalkUs";
import MainLayout from "../layouts/MainLayout";
import AboutUs from "../pages/AboutUs/AboutUs";
import Start from "../pages/start/start";

function NotFound() {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="page-hero-content">
          <h1>Página não encontrada</h1>
          <p>A rota acessada não existe.</p>
        </div>
      </div>
    </section>
  );
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Start />} />
          <Route path="start" element={<Start />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="product" element={<Product />} />
          <Route path="talkus" element={<TalkUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
