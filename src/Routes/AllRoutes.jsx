import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Product from "../pages/Product";
import Women from "../pages/Women";
import Men from "../pages/Men";
import Kids from "../pages/Kids";
import ProductAddToCart from "../pages/WomenCards";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/products" element={<Product />}></Route>
        <Route path="/women" element={<Women />}></Route>
        <Route path="/men" element={<Men />}></Route>
        <Route path="/kids" element={<Kids />}></Route>
        <Route path="/womencards" element={<ProductAddToCart />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
