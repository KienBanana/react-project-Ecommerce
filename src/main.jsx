import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Home/homeTotal";
import About from "./About/aboutTotal";
import Contact from "./Contact/contactTotal";
import Detail from "./Detail/detailTotal";
import Cart from "./Cart/cartTotal";
import Layout from "./Components/Layout";
import LayoutAdmin from "./Admin/LayoutAdmin/LayoutAdmin";
import ProductAdmin from "./Admin/productAdmin/ProductAdmin";
import DashBord from "./Admin/dashBoard/DashBord";
import CategoryAdmin from "./Admin/categoryAdmin/CategoryAdmin";
import RegisterFormik from "./sign-up/SingUp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="detail" element={<Detail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="sign-up" element={<RegisterFormik />} />
        </Route>
        <Route path="admin/" element={<LayoutAdmin />}>
          <Route index element={<DashBord />} />
          <Route path="product" element={<ProductAdmin />} />
          <Route path="category" element={<CategoryAdmin />} />
          <Route path="contact" element={<Contact />} />
          <Route path="detail" element={<Detail />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
