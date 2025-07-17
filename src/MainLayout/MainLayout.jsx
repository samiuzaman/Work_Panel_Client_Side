import { Outlet } from "react-router";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const MainLayout = () => {
  return (
    <div className="font-Poppins">
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default MainLayout;
