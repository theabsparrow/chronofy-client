import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import ErrorPage from "../page/errorPage/ErrorPage";
import HomePage from "../page/home/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);
