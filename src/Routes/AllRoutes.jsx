import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Login from "../pages/Login";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
