import React from "react";
import { useLoaderData } from "react-router-dom";
import AddUser from "../AddUser/AddUser";

const Home = () => {
  return (
    <div>
      <AddUser></AddUser>
    </div>
  );
};

export default Home;
