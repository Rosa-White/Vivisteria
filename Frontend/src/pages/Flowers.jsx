import { useEffect, useState } from "react";

const Flowers = ({
  addToCart,
  removeFromCart,
  cartItems = [],
  initialFlowers = [],
}) => {

  const [fetchedFlowers, setFetchedFlowers] = useState([]);
  const [quantities, setQuantities] = useState({});
  const flowers = initialFlowers.length > 0 ? initialFlowers : fetchedFlowers;

  useEffect(() => {
    if (initialFlowers.length > 0) {
      return;
    }

    fetch(`${import.meta.env.VITE_API_URL}/products`)
      .then((res) => res.json())
      .then((data) => setFetchedFlowers(data))
      .catch((err) => console.log(err));
  }, [initialFlowers]);

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
                loading="eager"
                decoding="async"
                fetchPriority="high"
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

                {/* ADD / REMOVE CART */}
                <button
                  onClick={() => {
                    if (isInCart(flower._id)) {
                      removeFromCart(flower._id);
                      return;
                    }

                    addToCart({
                      ...flower,
                      quantity: getQty(flower._id),
                    });
                  }}
                  className={`w-full text-white py-4 rounded-2xl mt-6 ${
                    isInCart(flower._id)
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-pink-500"
                  }`}
                >
                  {isInCart(flower._id) ? "Remove From Cart" : "Add To Cart"}
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
