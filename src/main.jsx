import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Layout from "./Components/Layout";
import LayoutAdmin from "./Admin/LayoutAdmin/LayoutAdmin";
import ProductAdmin from "./Admin/productAdmin/ProductAdmin";
import DashBord from "./Admin/DashBord";
import CategoryAdmin from "./Admin/CategoryAdmin";
import RegisterFormik from "./sign-up/SingUp";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Detail from "./Detail/Detail";
import Cart from "./Cart/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="detail/:id" element={<Detail />} />
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
