// All this does is make routes for `main.jsx`
import App from "./App.jsx";
import Home from "./components/Home/Home.jsx";

const routes = [
    {
        path: "/",
        element: <App/>,
        children: [
            {index: true, element: <Home/>}
        ]
    }
]

export default routes;