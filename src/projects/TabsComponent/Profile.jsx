import React, { useState } from "react";

export const ErrorMessage = ({ message }) => {
  return message ? (
    <div style={{ color: "#f00", fontSize: "10px" }}>{message}</div>
  ) : null;
};

function Profile({ data, setData, errors }) {
  const { name, age, email } = data;
  function handleChange(e) {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <div>
      <div>
        <label>
          Name:
          <input name="name" value={name} onChange={handleChange} />
        </label>
        <ErrorMessage message={errors["name"]} />
      </div>
      <div>
        <label>
          Age:
          <input name="age" value={age} onChange={handleChange} />
        </label>
        <ErrorMessage message={errors["age"]} />
      </div>
      <div>
        <label>
          Email:
          <input name="email" value={email} onChange={handleChange} />
        </label>
        <ErrorMessage message={errors["email"]} />
      </div>
    </div>
  );
}

export default Profile;
