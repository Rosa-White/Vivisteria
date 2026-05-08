import { Link } from "react-router-dom";
import { useState } from "react";

const CartPayment = ({
  cartItems,
  removeFromCart,
  increaseQty,
  decreaseQty,
  setCartItems,
}) => {

  const [idNumber, setIdNumber] = useState("");

  /* =========================
     TOTAL PRICE
  ========================= */
  const total = cartItems.reduce(
    (acc, item) =>
      acc + item.price * (item.quantity || 1),
    0
  );

  /* =========================
     CATEGORY CHECKS
  ========================= */
  const hasFlowers = cartItems.some(
    (item) => item.category === "flower"
  );

  const hasBouquet = cartItems.some(
    (item) => item.category === "bouquet"
  );

  const hasMedicinalPlant = cartItems.some(
    (item) => item.category === "medicinal"
  );

  /* =========================
     DELIVERY
  ========================= */
  let deliveryFee = 0;

  if (cartItems.length > 0) {
    deliveryFee =
      total > 1000 || (hasFlowers && hasBouquet)
        ? 0
        : 50;
  }

  const finalTotal = total + deliveryFee;

  /* =========================
     PAYMENT
  ========================= */
  const handlePayment = async () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    if (hasMedicinalPlant && idNumber === "") {
      alert("Please enter ID number");
      return;
    }

    const orderData = {
      name: "User",
      email: "user@test.com",
      address: "User Address",
      items: cartItems,
      total: finalTotal,
      idNumber,
    };

    try {
      await fetch("https://vivisteria-production.up.railway.app/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      alert("Payment Successful 🛒");

      setCartItems([]);

    } catch (err) {
      console.log(err);
      alert("Error placing order");
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 p-6">

      <div className="max-w-7xl mx-auto">

        {/* HEADER (SAME AS YOUR ORIGINAL) */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-5xl font-bold text-pink-600">
            Cart & Payment
          </h1>

          <Link
            to="/flowers"
            className="bg-white px-6 py-3 rounded-2xl text-lg font-semibold shadow-md"
          >
            Back To Shop
          </Link>
        </div>

        {/* MAIN GRID (SAME STYLE) */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

          {/* ================= CART ================= */}
          <div className="p-8 border-r border-pink-100">

            <h1 className="text-4xl font-bold text-pink-600 mb-8">
              Shopping Cart
            </h1>

            {cartItems.length === 0 && (
              <div className="bg-pink-50 rounded-2xl p-8 text-center">
                <h2 className="text-2xl font-semibold">
                  Your cart is empty
                </h2>
              </div>
            )}

            <div className="space-y-6">

              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex gap-5 bg-pink-50 p-4 rounded-2xl"
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 object-cover rounded-2xl"
                  />

                  <div className="flex flex-col justify-center">

                    <h2 className="text-2xl font-semibold">
                      {item.name}
                    </h2>

                    <p className="text-sm text-gray-500 capitalize">
                      Category:{" "}
                      <span className="font-semibold">
                        {item.category}
                      </span>
                    </p>

                    {/* ================= QUANTITY ================= */}
                    <div className="flex items-center gap-3 mt-2">

                      <button
                        onClick={() =>
                          decreaseQty(item._id)
                        }
                        className="bg-pink-200 px-3 py-1 rounded-lg text-xl font-bold"
                      >
                        -
                      </button>

                      <span className="text-lg font-semibold">
                        {item.quantity || 1}
                      </span>

                      <button
                        onClick={() =>
                          increaseQty(item._id)
                        }
                        className="bg-pink-200 px-3 py-1 rounded-lg text-xl font-bold"
                      >
                        +
                      </button>

                    </div>

                    <p className="mt-2 text-pink-500 text-xl font-bold">
                      ₹
                      {item.price *
                        (item.quantity || 1)}
                    </p>

                    <button
                      onClick={() =>
                        removeFromCart(item._id)
                      }
                      className="mt-3 bg-red-500 text-white px-4 py-2 rounded-xl text-sm"
                    >
                      Remove
                    </button>

                  </div>

                </div>
              ))}

            </div>

            {/* TOTAL SECTION (SAME STYLE) */}
            <div className="mt-10 bg-pink-100 rounded-2xl p-6 space-y-4">

              <div className="flex justify-between text-xl font-semibold">
                <span>Subtotal</span>
                <span>₹{total}</span>
              </div>

              <div className="flex justify-between text-lg">
                <span>Delivery</span>
                <span>
                  {deliveryFee === 0
                    ? "FREE"
                    : `₹${deliveryFee}`}
                </span>
              </div>

              <div className="border-t pt-4 flex justify-between text-2xl font-bold">
                <span>Total</span>
                <span>₹{finalTotal}</span>
              </div>

            </div>

          </div>

          {/* ================= PAYMENT ================= */}
          <div className="p-8">

            <h1 className="text-4xl font-bold text-pink-600 mb-8">
              Payment Details
            </h1>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-pink-200 rounded-xl px-4 py-3"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border border-pink-200 rounded-xl px-4 py-3"
              />

              <textarea
                rows="4"
                placeholder="Address"
                className="w-full border border-pink-200 rounded-xl px-4 py-3"
              />

              <input
                type="text"
                placeholder="Card Number"
                className="w-full border border-pink-200 rounded-xl px-4 py-3"
              />

              {hasMedicinalPlant && (
                <div className="bg-green-100 p-5 rounded-2xl">
                  <h2 className="text-green-700 font-semibold mb-2">
                    ID Required
                  </h2>

                  <input
                    value={idNumber}
                    onChange={(e) =>
                      setIdNumber(e.target.value)
                    }
                    placeholder="Enter ID"
                    className="w-full border rounded-xl px-4 py-3"
                  />
                </div>
              )}

              <button
                type="button"
                onClick={handlePayment}
                className="w-full bg-pink-500 text-white py-4 rounded-2xl text-xl font-semibold"
              >
                Pay Now - ₹{finalTotal}
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
};

export default CartPayment;