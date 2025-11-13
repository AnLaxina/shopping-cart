import './App.css';
import {Link, Outlet} from "react-router-dom";

function App() {

    return (
        <>
            <header>
                <h1>Shopping Cart App</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                    </ul>
                </nav>
            </header>
            <main><Outlet/></main>
            <footer>2025 AnLaxina</footer>
        </>
    )
}

export default App;
