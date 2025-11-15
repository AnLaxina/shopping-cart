import "./App.css";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <header>
        <h1>Shopping Cart App</h1>
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
        <Outlet context={[cartCount, setCartCount]} />
      </main>
      <footer>2025 AnLaxina</footer>
    </>
  );
}

export default App;
