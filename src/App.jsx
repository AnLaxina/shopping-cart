import './App.css';
import {Outlet} from "react-router-dom";

function App() {

    return (
        <>
            <header><h1>Shopping Cart App</h1></header>
            <main><Outlet/></main>
            <footer>2025 AnLaxina</footer>
        </>
    )
}

export default App;
