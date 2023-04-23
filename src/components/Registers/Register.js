import React, { useState } from "react";
import "./Register.css";

export default function Register() {
  const [name, setName] = useState("");

  const [age, setAge] = useState("");

  // eslint-disable-next-line
  const [data, setData] = useState([]);

  const formHandler = (e) => {
    e.preventDefault();
    data.push({ id: Math.random(), name, age });
    console.log(name, age);
    setName("");
    setAge("");
  };
  console.log(data, setData);
  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const ageHandler = (e) => {
    setAge(e.target.value);
  };

  return (
    <>
      <section className="register">
        <form onSubmit={formHandler}>
          <label>Your Name:</label>
          <input type="text" onChange={nameHandler} value={name} />
          <label>Your Age:</label>
          <input type="number" onChange={ageHandler} value={age} />
          <button className="btn" type="submit">
            Add User
          </button>
          {data
            ? data.map((item, idx) => {
                return (
                  <div key={idx}>
                    <p>{item.name}</p>
                    <p>{item.age}</p>
                  </div>
                );
              })
            : null}
        </form>
      </section>
    </>
  );
}
