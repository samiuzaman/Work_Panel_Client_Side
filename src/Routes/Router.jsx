import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        {/* Dashboard Route */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<div>Dashboard Home</div>} />
          <Route path="/dashboard/Payment" element={<div>Payment Page</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
