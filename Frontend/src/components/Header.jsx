import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Header = ({ cartCount }) => {
  return (
    <header className="w-full h-16 text-white bg-black shadow-md flex items-center justify-between px-6 pl-0">

      {/* LOGO */}
      <div className="flex items-center">
        <img
          src="/logo.png"
          className="h-15 w-35 object-contain"
        />
      </div>

      {/* NAV LINKS */}
      <nav>
        <ul className="flex gap-6 font-medium">

          <li><Link to="/" className="hover:text-blue-100">Home</Link></li>
          <li><Link to="/flowers" className="hover:text-blue-100">Flowers</Link></li>
          <li><Link to="/accessories" className="hover:text-blue-100">Accessories</Link></li>
          <li><Link to="/medicinal-plants" className="hover:text-blue-100">Medicinal Plants</Link></li>

        </ul>
      </nav>

      {/* LOGIN ICON */}
      <div className="flex items-center gap-6">
        <Link to="/cart" className="hover:text-blue-100">🛒Cart ({cartCount})</Link>
        <Link to="/login">
          <FaUserCircle className="text-2xl text-white hover:text-blue-100 cursor-pointer" />
        </Link>
      </div>

    </header>
  );
};

export default Header;