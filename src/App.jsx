import './App.css';
import {Outlet} from "react-router-dom";

function App() {

    return (
        <>
            <header>Shopping Cart</header>
            <main><Outlet/></main>
            <footer>2025 AnLaxina</footer>
        </>
    )
}

export default App;
