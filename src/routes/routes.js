import { createBrowserRouter } from "react-router-dom";
import AddUser from "../components/AddUser/AddUser";
import Home from "../components/Home/Home";

export const router = createBrowserRouter([
  { path: "/", element: <Home></Home> },
  { path: "/users/add", element: <AddUser></AddUser> },
]);
