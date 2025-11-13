import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import routes from "./route.jsx";

import "./styles/reset.css";
import "./styles/typography.css";
import "./styles/colours.css";
import "./styles/spacing.css";
import "./styles/main.css";

const router = createBrowserRouter(routes);
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
