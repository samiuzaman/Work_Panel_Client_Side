import { useState } from "react";
import { NavLink } from "react-router";
import { Button } from "../components/ui/button";
import Logo from "../../src/assets/logo.png";
import { MdMenu, MdOutlineClose } from "react-icons/md";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  const handleCloseBtn = () => {
    setIsOpen(false);
  };
  const handleMenuBtn = () => {
    setIsOpen(true);
  };

  return (
    <div className="w-11/12 lg:h-5/6 xl:h-4/5 mx-auto border rounded-sm py-2 px-2 ">
      {/* Desktop view */}
      <div className={`hidden lg:flex justify-between items-center-safe`}>
        <NavLink to="/">
          <div className="flex gap-3">
            <img src={Logo} className="w-10 h-10" />
            <h4 className="text-2xl text-[#f7aa25] font-semibold">
              Work <span className="text-[#16a4eb]">Panel</span>
            </h4>
          </div>
        </NavLink>
        <div>
          <ul className="flex items-center gap-6 ">
            <NavLink to="/dashboard">
              <li className="cursor-pointer hover:text-[#16a4eb] ">
                Dashboard
              </li>
            </NavLink>
            <NavLink to="/contact">
              <li className="cursor-pointer hover:text-[#16a4eb] ">
                Contact us
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="bg-[#16a4eb] text-white">
            Log In
          </Button>
          <Button variant="outline" className="bg-green-500 text-white">
            Sign Up
          </Button>
        </div>
      </div>
      {/* Mobile View */}
      <div className="lg:hidden flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <NavLink to="/">
            <div className="flex gap-3">
              <img src={Logo} className="w-10 h-10" />
              <h4 className="text-2xl text-[#f7aa25] font-semibold">
                Work <span className="text-[#16a4eb]">Panel</span>
              </h4>
            </div>
          </NavLink>
          {isOpen ? (
            <MdOutlineClose
              onClick={handleCloseBtn}
              className="text-3xl border rounded-sm cursor-pointer"
            />
          ) : (
            <MdMenu
              onClick={handleMenuBtn}
              className="text-3xl border rounded-sm cursor-pointer"
            />
          )}
        </div>
        {isOpen && (
          <div>
            <div className="flex justify-center">
              <ul className="flex flex-col gap-2">
                <NavLink to="/dashboard">
                  <li className="cursor-pointer hover:text-[#16a4eb] border py-2 px-5 rounded-md">
                    Dashboard
                  </li>
                </NavLink>
                <NavLink to="/contact">
                  <li className="cursor-pointer hover:text-[#16a4eb] border py-2 px-5 rounded-md">
                    Contact us
                  </li>
                </NavLink>
              </ul>
            </div>
            <div className="flex flex-col w-32 mx-auto justify-center gap-3 my-3">
              <Button variant="outline" className="bg-[#16a4eb] text-white">
                Log In
              </Button>
              <Button variant="outline" className="bg-green-500 text-white">
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
