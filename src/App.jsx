import "./App.css";
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [cartCount, setCartCount] = useState(() => {
    const stored = localStorage.getItem("cartCount");
    return stored ?? 0;
  });

  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem("cartItems");
    // Since localStorage doesn't take Maps or any other objects, we need to parse/stringify it
    return stored ? new Map(JSON.parse(stored)) : new Map();
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify([...cartItems]));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("cartCount", cartCount);
  }, [cartCount]);

  return (
    <>
      <header>
        <h1>StuffMart</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/cart">
                Cart {cartCount !== 0 && " (" + cartCount + ")"}
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet context={[cartCount, setCartCount, cartItems, setCartItems]} />
      </main>
      <footer>
        <p>2025 AnLaxina</p>
      </footer>
    </>
  );
}

export default App;
