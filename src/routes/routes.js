import { createBrowserRouter } from "react-router-dom";
import AddUser from "../components/AddUser/AddUser";
import Home from "../components/Home/Home";
import Show from "../components/Show/Show";

export const router = createBrowserRouter([
  { path: "/", element: <Home></Home> },
  {
    path: "/show",
    element: <Show></Show>,
    loader: () => {
      return fetch("http://localhost:5000/users");
    },
  },
  { path: "/users/add", element: <AddUser></AddUser> },
]);
