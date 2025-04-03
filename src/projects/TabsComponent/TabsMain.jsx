import React, { useState } from "react";
import Profile from "./Profile";
import Interest from "./Interest";
import Location from "./Location";

function TabsMain() {
  const [currentTab, setCurrenttab] = useState(0);
  const [data, setData] = useState({
    name: "Mrudula",
    age: "16",
    email: "mrudula420@gmail.com",
    interests: ["Coding", "Music"],
    address: "Bidar",
    state: "KA",
    pinCode: "585401",
  });

  const [errors, setErrors] = useState({});

  const tabs = [
    {
      name: "Profile",
      Component: Profile,
      validator: () => {
        const { name, age, email } = data;
        const errors = {};
        let hasError = false;
        if (!name || name.length < 2) {
          errors["name"] = "Name is required";
          hasError = true;
        }
        if (!age || age <= 18) {
          errors["age"] = "Age must be greater than 18";
          hasError = true;
        }

        if (!email || !email.includes("@")) {
          errors["email"] = "Email is not valid";
          hasError = true;
        }
        setErrors(errors);
        return !hasError;
      },
    },
    {
      name: "Interests",
      Component: Interest,
      validator: () => {
        const { interests } = data;
        const errors = {};
        let hasError = false;
        if (!interests || interests.length < 1) {
          errors["interests"] = "Interests are required";
          hasError = true;
        }
        setErrors(errors);
        return !hasError;
      },
    },
    {
      name: "Location",
      Component: Location,
      validator: () => {
        const { address, state, pinCode } = data;
        const errors = {};
        let hasError = false;
        if (!address || address.length < 2) {
          errors["address"] = "Address is required";
          hasError = true;
        }
        if (!state || state.length < 2) {
          errors["state"] = "State is required";
          hasError = true;
        }

        if (!pinCode || pinCode.length !== 6) {
          errors["pinCode"] = "Pincode is not valid";
          hasError = true;
        }
        setErrors(errors);
        return !hasError;
      },
    },
  ];
  const handleSubmit = () => {
    if (tabs[currentTab].validator()) {
      console.log("submitted:: ", data);
    }
  };

  const handleNext = () => {
    if (tabs[currentTab].validator()) {
      setCurrenttab((prev) => prev + 1);
    }
  };
  const handlePrev = () => {
    if (tabs[currentTab].validator()) {
      setCurrenttab((prev) => prev - 1);
    }
  };

  const ActiveComponent = tabs[currentTab].Component;
  return (
    <div>
      {tabs.map((tab, idx) => (
        <button
          style={{ backgroundColor: currentTab === idx ? "#888" : "initial" }}
          onClick={() => setCurrenttab(idx)}
        >
          {tab.name}
        </button>
      ))}
      <div
        className="body"
        style={{ padding: "10px", border: "1px solid #888" }}
      >
        <ActiveComponent data={data} setData={setData} errors={errors} />
      </div>
      <div style={{ border: "1px solid #888", padding: "10px" }}>
        {currentTab > 0 && <button onClick={handlePrev}>Prev</button>}
        {currentTab < tabs.length - 1 && (
          <button onClick={handleNext}>Next</button>
        )}
        {currentTab === tabs.length - 1 && (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
}

export default TabsMain;
// function handleProfile() {
//     setCurrenttab(1);
//   }
//   function handleInterest() {
//     setCurrenttab(2);
//   }
//   function handleLocation() {
//     setCurrenttab(3);
//   }
{
  /* <div>
        <button onClick={() => setCurrenttab(1)}>Profile</button>
        <button onClick={() => setCurrenttab(2)}>Interest</button>
        <button onClick={() => setCurrenttab(3)}>Location</button>
      </div>
      <div>
        {currentTab === 1 && <Profile onSubmit={handleProfile} />}
        {currentTab === 2 && <Interest onSubmit={handleInterest} />}
        {currentTab === 3 && <Location onSubmit={handleLocation} />}
      </div> */
}
