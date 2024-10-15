import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/orders",
        element: <h1>Order page</h1>,
      },
      {
        path: "/about",
        element: <h1>about page</h1>,
      },
    ],
  },
]);

export default router;
