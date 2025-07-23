import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Details from "../Pages/Details/Details";
import Services from "../Pages/Services/Services";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/details/:id" element={<Details />} />
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
