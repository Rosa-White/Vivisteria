import { Link } from "react-router-dom";

const Error = () => {

  return (

    <div className="min-h-screen bg-pink-50 flex items-center justify-center px-6">

      <div className="bg-white shadow-2xl rounded-3xl p-12 text-center max-w-xl w-full">

        <h1 className="text-7xl font-bold text-pink-500">
          404
        </h1>

        <h2 className="text-3xl font-semibold mt-6">
          Page Not Found 
        </h2>

        <p className="text-gray-500 mt-4 text-lg">
          The page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 bg-pink-500 hover:bg-pink-600 transition-all duration-300 text-white px-8 py-4 rounded-2xl text-lg font-semibold"
        >
          Back To Home
        </Link>

      </div>

    </div>

  );
};

export default Error;