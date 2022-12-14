import React, { useState } from "react";

const AddUser = () => {
  const [user, setUser] = useState({});
  const handleForm = (event) => {
    event.preventDefault();
    // setUser(user);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Data successfully submitted.");
          event.target.reset();
        }
      });
  };
  const handleBlur = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };
  return (
    <form onSubmit={handleForm}>
      <input
        onBlur={handleBlur}
        type="text"
        name="name"
        placeholder="name"
        required
      />{" "}
      <br />
      <input
        onBlur={handleBlur}
        type="address"
        name="address"
        placeholder="address"
        required
      />{" "}
      <br />
      <input
        onBlur={handleBlur}
        type="email"
        name="email"
        placeholder="email"
        required
      />{" "}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddUser;
