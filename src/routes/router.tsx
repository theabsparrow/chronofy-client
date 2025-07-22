import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import ErrorPage from "../page/errorPage/ErrorPage";
import HomePage from "../page/home/HomePage";
import Archived from "../page/archived/Archived";
import AddEvent from "../page/addEvent/AddEvent";
import SingleEvent from "../page/singleEvent/SingleEvent";

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
      {
        path: "archived",
        element: <Archived />,
      },
      {
        path: "add-event",
        element: <AddEvent />,
      },
      {
        path: "event/:id",
        element: <SingleEvent />,
      },
    ],
  },
]);
