import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./Pages/Home/Home.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import MainLayout from "./MainLayout/MainLayout.jsx";
import Router from "./Routes/router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router></Router>
  </StrictMode>
);
