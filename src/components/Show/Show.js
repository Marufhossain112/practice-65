import React from "react";
import { useLoaderData } from "react-router-dom";

const Show = () => {
  const users = useLoaderData();
    // console.log(users);
  const handleDelete = (user) => {
    const agreement = window.confirm(`Are you sure to delete ${user.name}`);
    if (agreement) {
      fetch(`http://localhost:5000/users/${user._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json()) 
        .then((data) => {
          
          console.log(data)
        });
    }
  };

  return (
    <div>
      <h2>Users : {users.length}</h2>
      <div>
        {users.map((usr) => (
          <p key={usr._id}>
            {" "}
            {usr.name} {usr.email} {usr.address}
            {<button onClick={() => handleDelete(usr)}>X</button>}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Show;
