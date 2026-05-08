import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MedicinalPlants = ({ addToCart, cartCount }) => {

  const [plants, setPlants] = useState([]);

  //  quantity state per plant
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/medicinal-plants")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((err) => console.log(err));
  }, []);

  /* =========================
     QUANTITY HANDLERS
  ========================= */

  const increaseQty = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const decreaseQty = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };

  const getQty = (id) => quantities[id] || 1;

  return (
    <div className="min-h-screen bg-green-50 p-6">

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="mb-10">
          <h1 className="text-5xl font-bold text-green-700">
            Medicinal Plants
          </h1>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {plants.map((plant) => (

            <div
              key={plant._id}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >

              <img
                src={plant.image}
                alt={plant.name}
                className="w-full h-72 object-cover"
              />

              <div className="p-6">

                {/* ================= NAME + QUANTITY SIDE BY SIDE ================= */}
                <div className="flex justify-between items-center">

                  <h2 className="text-2xl font-semibold">
                    {plant.name}
                  </h2>

                  {/* QUANTITY CONTROLS (RIGHT SIDE) */}
                  <div className="flex items-center gap-2">

                    <button
                      onClick={() =>
                        decreaseQty(plant._id)
                      }
                      className="bg-green-200 px-2 rounded text-xl font-bold"
                    >
                      -
                    </button>

                    <span className="text-lg font-semibold">
                      {getQty(plant._id)}
                    </span>

                    <button
                      onClick={() =>
                        increaseQty(plant._id)
                      }
                      className="bg-green-200 px-2 rounded text-xl font-bold"
                    >
                      +
                    </button>

                  </div>

                </div>

                <p className="text-green-600 text-2xl font-bold mt-3">
                  ₹{plant.price}
                </p>

                {/* ADD TO CART */}
                <button
                  onClick={() =>
                    addToCart({
                      ...plant,
                      quantity: getQty(plant._id),
                    })
                  }
                  className="w-full bg-green-600 text-white py-4 rounded-2xl mt-6"
                >
                  Add To Cart 
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default MedicinalPlants;