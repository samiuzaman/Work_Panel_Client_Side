import { Link, NavLink } from "react-router";
import Logo from "../../src/assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#fff5ed] py-4">
      <div className="w-11/12 lg:w-5/6 mx-auto pb-3 pt-6 flex flex-col lg:flex-row gap-6 justify-between text-center lg:text-left">
        <NavLink to="/">
          <div className="flex justify-center gap-3">
            <img src={Logo} className="w-10 h-10" />
            <h4 className="text-2xl text-[#f7aa25] font-semibold">
              Work <span className="text-[#16a4eb]">Panel</span>
            </h4>
          </div>
        </NavLink>
        <div className="space-y-2">
          <h3 className="text-center font-semibold text-xl">Contact Info</h3>
          <p>
            <span className="font-semibold"> Email:</span> info@workpanel.com
          </p>
          <p>
            <span className="font-semibold">Mobile:</span> +8801234567890
          </p>
          <p>
            <span className="font-semibold">Address:</span> 546 Kenny, Kenai,
            Alaska, US
          </p>
        </div>
        <div className="text-center space-y-2">
          <h4 className="text-center font-semibold text-xl">Social Links</h4>
          <div className="flex flex-col justify-center gap-1">
            <Link
              to="https://www.facebook.com/"
              className="text-gray-800 hover:underline cursor-pointer"
            >
              Facebook
            </Link>
            <Link
              to="https://www.instagram.com/"
              className="text-gray-800 hover:underline cursor-pointer"
            >
              Youtube
            </Link>
            <Link
              to="https://www.instagram.com/"
              className="text-gray-800 hover:underline cursor-pointer"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
      <div>
        <p className="text-gray-700 text-center border-t border-gray-300 py-4 mt-3">
          &copy; All Rights Reserved by
          <span className="font-medium">Work Panel LTD</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
