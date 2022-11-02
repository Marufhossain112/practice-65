import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Show = () => {
  const users = useLoaderData();
  const [displayUser, setdisplayUser] = useState(users);
  // console.log(users);
  const handleDelete = (user) => {
    const agreement = window.confirm(`Are you sure to delete ${user.name}`);
    if (agreement) {
      fetch(`http://localhost:5000/users/${user._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = displayUser.filter((usr) => usr._id !== user._id);
            setdisplayUser(remaining);
            console.log(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h2>Users : {displayUser.length}</h2>
      <div>
        {displayUser.map((usr) => (
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
