import { useEffect, useState } from "react";

const MedicinalPlants = ({
  addToCart,
  removeFromCart,
  cartItems = [],
  initialPlants = [],
}) => {

  const [fetchedPlants, setFetchedPlants] = useState([]);
  const plants = initialPlants.length > 0 ? initialPlants : fetchedPlants;

  //  quantity state per plant
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    if (initialPlants.length > 0) {
      return;
    }

    fetch(`${import.meta.env.VITE_API_URL}/medicinal-plants`)
      .then((res) => res.json())
      .then((data) => setFetchedPlants(data))
      .catch((err) => console.log(err));
  }, [initialPlants]);

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
  const isInCart = (id) => cartItems.some((item) => item._id === id);

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
                loading="eager"
                decoding="async"
                fetchPriority="high"
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

                {/* ADD / REMOVE CART */}
                <button
                  onClick={() => {
                    if (isInCart(plant._id)) {
                      removeFromCart(plant._id);
                      return;
                    }

                    addToCart({
                      ...plant,
                      quantity: getQty(plant._id),
                    });
                  }}
                  className={`w-full text-white py-4 rounded-2xl mt-6 ${
                    isInCart(plant._id)
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-green-600"
                  }`}
                >
                  {isInCart(plant._id) ? "Remove From Cart" : "Add To Cart"}
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
