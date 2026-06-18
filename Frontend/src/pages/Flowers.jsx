import { useEffect, useState } from "react";

const Flowers = ({ addToCart }) => {

  const [flowers, setFlowers] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/products`)
      .then((res) => res.json())
      .then((data) => setFlowers(data))
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
    <div className="min-h-screen bg-pink-50 p-6">

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <h1 className="text-5xl font-bold text-pink-600 mb-10">
          Flower Collection
        </h1>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {flowers.map((flower) => (

            <div
              key={flower._id}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >

              {/* IMAGE */}
              <img
                src={flower.image}
                alt={flower.name}
                className="w-full h-72 object-cover"
              />

              <div className="p-6">

                {/* ================= NAME + QUANTITY OPPOSITE ================= */}
                <div className="flex justify-between items-center">

                  <h2 className="text-2xl font-semibold">
                    {flower.name}
                  </h2>

                  <div className="flex items-center gap-2">

                    <button
                      onClick={() =>
                        decreaseQty(flower._id)
                      }
                      className="bg-pink-200 px-2 rounded text-xl font-bold"
                    >
                      -
                    </button>

                    <span className="text-lg font-semibold">
                      {getQty(flower._id)}
                    </span>

                    <button
                      onClick={() =>
                        increaseQty(flower._id)
                      }
                      className="bg-pink-200 px-2 rounded text-xl font-bold"
                    >
                      +
                    </button>

                  </div>

                </div>

                {/* PRICE */}
                <p className="text-pink-500 text-2xl font-bold mt-3">
                  ₹{flower.price}
                </p>

                {/* ADD TO CART */}
                <button
                  onClick={() =>
                    addToCart({
                      ...flower,
                      quantity: getQty(flower._id),
                    })
                  }
                  className="w-full bg-pink-500 text-white py-4 rounded-2xl mt-6"
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

export default Flowers;