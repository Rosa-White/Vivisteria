import { useEffect, useState } from "react";

const Accessories = ({ addToCart }) => {

  const [items, setItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");

  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/accessories`)
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.log(err));
  }, []);

  
  const clean = (val) =>
    val?.toLowerCase().trim();

  
  const filteredItems =
    activeCategory === "all"
      ? items
      : items.filter(
          (item) =>
            clean(item.category) === clean(activeCategory)
        );

  /*QUANTITY HANDLERS*/

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
          Accessories
        </h1>

        {/* FILTER BUTTONS */}
        <div className="flex gap-4 mb-8 flex-wrap">

          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-xl ${
              activeCategory === "all"
                ? "bg-pink-500 text-white"
                : "bg-white"
            }`}
          >
            All
          </button>

          <button
            onClick={() => setActiveCategory("Pots")}
            className={`px-4 py-2 rounded-xl ${
              activeCategory === "Pots"
                ? "bg-pink-500 text-white"
                : "bg-white"
            }`}
          >
            Flower Pots
          </button>

          <button
            onClick={() => setActiveCategory("Seeds")}
            className={`px-4 py-2 rounded-xl ${
              activeCategory === "Seeds"
                ? "bg-pink-500 text-white"
                : "bg-white"
            }`}
          >
            Seeds
          </button>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredItems.map((item) => (

            <div
              key={item._id}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >

              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-72 object-cover"
              />

              <div className="p-6">

                {/* NAME + QUANTITY SIDE */}
                <div className="flex justify-between items-center">

                  <h2 className="text-2xl font-semibold">
                    {item.name}
                  </h2>

                  <div className="flex items-center gap-2">

                    <button
                      onClick={() =>
                        decreaseQty(item._id)
                      }
                      className="bg-pink-200 px-2 rounded text-xl font-bold"
                    >
                      -
                    </button>

                    <span className="text-lg font-semibold">
                      {getQty(item._id)}
                    </span>

                    <button
                      onClick={() =>
                        increaseQty(item._id)
                      }
                      className="bg-pink-200 px-2 rounded text-xl font-bold"
                    >
                      +
                    </button>

                  </div>

                </div>

                {/* PRICE */}
                <p className="text-pink-500 text-2xl font-bold mt-3">
                  ₹{item.price}
                </p>

                {/* ADD TO CART */}
                <button
                  onClick={() =>
                    addToCart({
                      ...item,
                      quantity: getQty(item._id),
                    })
                  }
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white py-4 rounded-2xl mt-6"
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

export default Accessories;