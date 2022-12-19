import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Women from "../pages/Women";
import Mens from "../pages/Men";
import Kids from "../pages/Kids";
import ProductAddToCart from "../pages/WomenCards";
import MensProductAddToCart from "../pages/MenCards";
import KidsProductAddToCart from "../pages/KidsCard";
import PageNotFound from "../pages/PageNotFound";
import WomenSinglePage from "../pages/WomenSinglePage";
import MenSinglePage from "../pages/MenSinglePage";
import KidsSinglePage from "../pages/KidsSinglePage";
import Search from "../pages/Search";
import Signuppage from "../pages/Signup";
import AllContextProvider from "../AuthContext/AuthContext";
import BackdropExample from "../pages/Payment";
import Checkout from "../pages/CheckoutPage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signuppage />}></Route>
        <Route path="/women" element={<Women />}></Route>
        <Route path="/mens" element={<Mens />}></Route>
        <Route path="/kids" element={<Kids />}></Route>
        <Route path="/womencards" element={<ProductAddToCart />}></Route>
        <Route path="/mencards" element={<MensProductAddToCart />}></Route>
        <Route path="/kidcards" element={<KidsProductAddToCart />}></Route>
        <Route path="/womenproduct/:id" element={<WomenSinglePage />}></Route>
        <Route path="/menproduct/:id" element={<MenSinglePage />}></Route>
        <Route path="/kidsproduct/:id" element={<KidsSinglePage />}></Route>
        <Route path="/authcontext" element={<AllContextProvider />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/payment" element={<BackdropExample />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
