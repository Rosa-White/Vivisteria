import { Link } from "react-router-dom";

const Home = () => {

  return (

    <div className="min-h-screen bg-pink-50">



      {/*HERO SECTION*/}

      <div className="relative h-screen">

        <img
          src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1600&auto=format&fit=crop"
          alt="Flowers"
          className="w-full h-full object-cover"
        />


        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">

          <div className="text-center text-white px-6">

            <h1 className="text-6xl md:text-7xl font-bold">
              Vivisteria 
            </h1>

            <p className="mt-6 text-xl md:text-2xl">
              Fresh Flowers, Beautiful Accessories
              & Medicinal Plants
            </p>

            <Link
              to="/flowers"
              className="inline-block mt-10 bg-pink-500 hover:bg-pink-600 transition-all duration-300 px-8 py-4 rounded-2xl text-xl font-semibold"
            >
              Shop Now 
            </Link>

          </div>

        </div>

      </div>





      {/*CATEGORIES*/}

      <div className="max-w-7xl mx-auto px-6 py-20">

        <h1 className="text-5xl font-bold text-center text-pink-600 mb-16">

          Explore Our Collection 

        </h1>



        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">



          {/* FLOWERS */}

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=1200&auto=format&fit=crop"
              alt="Flowers"
              className="w-full h-72 object-cover"
            />

            <div className="p-6 text-center">

              <h2 className="text-3xl font-bold text-pink-500">
                Flowers 
              </h2>

              <p className="mt-4 text-gray-500">
                Beautiful bouquets and floral gifts
                for every occasion.
              </p>

              <Link
                to="/flowers"
                className="inline-block mt-6 bg-pink-500 hover:bg-pink-600 transition-all duration-300 text-white px-6 py-3 rounded-2xl"
              >
                Shop Flowers
              </Link>

            </div>

          </div>




          {/* ACCESSORIES */}

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=1200&auto=format&fit=crop"
              alt="Accessories"
              className="w-full h-72 object-cover"
            />

            <div className="p-6 text-center">

              <h2 className="text-3xl font-bold text-pink-500">
                Accessories 
              </h2>

              <p className="mt-4 text-gray-500">
                Pots and seeds for Garden.
              </p>

              <Link
                to="/accessories"
                className="inline-block mt-6 bg-pink-500 hover:bg-pink-600 transition-all duration-300 text-white px-6 py-3 rounded-2xl"
              >
                Shop Accessories
              </Link>

            </div>

          </div>





          {/* MEDICINAL PLANTS */}

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop"
              alt="Medicinal Plants"
              className="w-full h-72 object-cover"
            />

            <div className="p-6 text-center">

              <h2 className="text-3xl font-bold text-pink-500">
                Medicinal Plants 
              </h2>

              <p className="mt-4 text-gray-500">
                Natural medicinal plants grown
                with care and freshness.
              </p>

              <Link
                to="/medicinal-plants"
                className="inline-block mt-6 bg-pink-500 hover:bg-pink-600 transition-all duration-300 text-white px-6 py-3 rounded-2xl"
              >
                Shop Plants
              </Link>

            </div>

          </div>

        </div>

      </div>






      {/*CUSTOMER SERVICE*/}

      <div className="bg-white py-20 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <h1 className="text-5xl font-bold text-pink-600 mb-10">

            Customer Service 

          </h1>



          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">



            {/* CONTACT */}

            <div className="bg-pink-50 p-8 rounded-3xl shadow-lg">

              <h2 className="text-2xl font-bold mb-4">
                Contact Us
              </h2>

              <p className="text-gray-600">
                📞 +91 98765 43210
              </p>

              <p className="text-gray-600 mt-2">
                📧 support@vivisteria.com
              </p>

            </div>




            {/* DELIVERY */}

            <div className="bg-pink-50 p-8 rounded-3xl shadow-lg">

              <h2 className="text-2xl font-bold mb-4">
                Delivery
              </h2>

              <p className="text-gray-600">
                🚚 Delivery within 24 hours - 3 days
              </p>

              <p className="text-gray-600 mt-2">
                🌸 Fresh packaging guaranteed
              </p>

            </div>





            {/* SUPPORT */}

            <div className="bg-pink-50 p-8 rounded-3xl shadow-lg">

              <h2 className="text-2xl font-bold mb-4">
                Support
              </h2>

              <p className="text-gray-600">
                Available Monday - Saturday
              </p>

              <p className="text-gray-600 mt-2">
                ⏰ 9 AM - 7 PM
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Home;