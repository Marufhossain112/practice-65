import { createBrowserRouter } from "react-router-dom";
import AddUser from "../components/AddUser/AddUser";
import Home from "../components/Home/Home";
import Show from "../components/Show/Show";
import Update from "../components/Update/Update";

export const router = createBrowserRouter([
  { path: "/", element: <Home></Home> },
  {
    path: "/users",
    element: <Show></Show>,
    loader: () => fetch("http://localhost:5000/users"),
  },
  {
    path: "/update/:id",
    element: <Update></Update>,
    loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`),
  },
  { path: "/users/add", element: <AddUser></AddUser> },
]);
