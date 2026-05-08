import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Flowers from "./pages/Flowers";
import Accessories from "./pages/Accessories";
import MedicinalPlants from "./pages/MedicinalPlants";
import CartPayment from "./pages/CartPayment";
import Login from "./pages/Login";

export default function App() {

  const [cartItems, setCartItems] = useState([]);

  /* =========================
     ADD TO CART
  ========================= */
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) => item._id === product._id
      );

      if (existing) {
        return prev.map((item) =>
          item._id === product._id
            ? {
                ...item,
                quantity: item.quantity + (product.quantity || 1),
              }
            : item
        );
      } else {
        return [
          ...prev,
          { ...product, quantity: product.quantity || 1 },
        ];
      }
    });
  };

  /* =========================
     REMOVE ITEM
  ========================= */
  const removeFromCart = (id) => {
    setCartItems((prev) =>
      prev.filter((item) => item._id !== id)
    );
  };

  /* =========================
     QUANTITY INCREASE
  ========================= */
  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  /* =========================
     QUANTITY DECREASE
  ========================= */
  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === id
          ? {
              ...item,
              quantity:
                item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }
          : item
      )
    );
  };

  return (
    <div className="flex flex-col min-h-screen">

      {/* HEADER */}
      <Header cartCount={cartItems.length} />

      {/* ROUTES */}
      <main className="flex-1">

        <Routes>

          <Route path="/" element={<Home />} />

          <Route
            path="/flowers"
            element={
              <Flowers
                addToCart={addToCart}
                cartCount={cartItems.length}
              />
            }
          />

          <Route
            path="/accessories"
            element={
              <Accessories
                addToCart={addToCart}
                cartCount={cartItems.length}
              />
            }
          />

          <Route
            path="/medicinal-plants"
            element={
              <MedicinalPlants
                addToCart={addToCart}
                cartCount={cartItems.length}
              />
            }
          />

          <Route
            path="/cart"
            element={
              <CartPayment
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                increaseQty={increaseQty}
                decreaseQty={decreaseQty}
                setCartItems={setCartItems}
              />
            }
          />

          <Route path="/login" element={<Login />} />

        </Routes>

      </main>

      <Footer />

    </div>
  );
}