import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white">

      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* About */}
        <div>
          {/* LOGO */}
            <img
              src="/logo.png"
              className="h-30 w-50 object-contain"
            />
          <p className="text-sm text-gray-200">
            Your one-stop shop for beautiful flowers, accessories, and medicinal plants.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:ml-15">
          <h2 className="text-xl font-bold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">

            <li><Link to="/" className="hover:underline">Flowers</Link></li>
            <li><Link to="/accessories" className="hover:underline">Accessories</Link></li>
            <li><Link to="/medicinal-plants" className="hover:underline">Medicinal Plants</Link></li>
            <li><Link to="/cart" className="hover:underline">Cart</Link></li>

          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-bold mb-3">Contact</h2>
          <p className="text-sm">Email: support@vivisteria.com</p>
          <p className="text-sm">Phone: +91 953006 XXXXX</p>
        </div>

      </div>

      {/* bottom line */}
      <div className="text-center text-xs text-gray-300 border-t border-white py-4">
        © {new Date().getFullYear()} Vivisteria. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
