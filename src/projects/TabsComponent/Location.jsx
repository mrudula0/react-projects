import React from "react";
import { ErrorMessage } from "./Profile";

function Location({ data, setData, errors }) {
  const { address, state, pinCode } = data;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div>
      <div>
        <label>
          Address:
          <input name="address" value={address} onChange={handleChange} />
        </label>
        <ErrorMessage message={errors["address"]} />
      </div>
      <div>
        <label>
          State:
          <input name="state" value={state} onChange={handleChange} />
        </label>
        <ErrorMessage message={errors["state"]} />
      </div>
      <div>
        <label>
          Pin Code :
          <input name="pinCode" value={pinCode} onChange={handleChange} />
        </label>
        <ErrorMessage message={errors["pinCode"]} />
      </div>
    </div>
  );
}

export default Location;
