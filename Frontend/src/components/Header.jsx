import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Header = ({ cartCount }) => {
  return (
    <header className="w-full text-white bg-black shadow-md flex flex-col md:flex-row md:items-center md:justify-between gap-3 px-4 md:px-6 py-3 md:py-0 md:h-16">

      {/* LOGO */}
      <div className="flex items-center justify-center md:justify-start">
        <img
          src="/logo.png"
          className="h-14 md:h-15 w-32 md:w-35 object-contain"
        />
      </div>

      {/* NAV LINKS */}
      <nav>
        <ul className="flex flex-wrap justify-center gap-3 md:gap-6 text-sm md:text-base font-medium">

          <li><Link to="/" className="hover:text-blue-100">Home</Link></li>
          <li><Link to="/flowers" className="hover:text-blue-100">Flowers</Link></li>
          <li><Link to="/accessories" className="hover:text-blue-100">Accessories</Link></li>
          <li><Link to="/medicinal-plants" className="hover:text-blue-100">Medicinal Plants</Link></li>

        </ul>
      </nav>

      {/* LOGIN ICON */}
      <div className="flex items-center justify-center gap-6">
        <Link to="/cart" className="hover:text-blue-100">🛒Cart ({cartCount})</Link>
        <Link to="/login">
          <FaUserCircle className="text-2xl text-white hover:text-blue-100 cursor-pointer" />
        </Link>
      </div>

    </header>
  );
};

export default Header;
