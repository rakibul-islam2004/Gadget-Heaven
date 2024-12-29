import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../../pages/Home";
import Statistics from "../../pages/Statistics";
import Dashboard from "../../pages/Dashboard";
import ProductDetails from "../../pages/ProductDetails";
import History from "../../pages/History";
import NotFound from "../../pages/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => fetch("/products.json").then((res) => res.json()),
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/history",
        element: <History />,
      },
      {
        path: "/productDetails/:productId",
        element: <ProductDetails />,
      },
    ],
  },
  {
    path:"*",
    element:<NotFound />
  }
]);

export default routes;
