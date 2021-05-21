import React, { useState } from "react";
import ValidationManager from "./validators.js";

function Register() {
  const registerData = Object.freeze({
    email: "",
    password1: "",
    password2: "",
  });

  const validationData = {
    validEmail: false,
    validPassword: false,
    matchingPasswords: false,
  };

  let [userData, setUserData] = useState(registerData);
  let [validData, setValidData] = useState(validationData);

  const handleUpdateData = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value.trim(),
    });

    ValidationManager(
      e.target.name,
      e.target.value,
      validData,
      setValidData,
      userData
    );
  };

  const handlePostData = (e) => {
    e.preventDefault();
    console.log(userData);
  };

  return (
    <div>
      <form>
        <input
          onChange={handleUpdateData}
          type="text"
          name="email"
          placeholder="Email"
        />
        <input
          onChange={handleUpdateData}
          type="password"
          name="password1"
          placeholder="Password"
        />
        <input
          onChange={handleUpdateData}
          type="password"
          name="password2"
          placeholder="Confirm Password"
        />
        <input
          disabled={
            validData.validEmail &&
            validData.validPassword &&
            validData.matchingPasswords
              ? false
              : true
          }
          onClick={handlePostData}
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}

export default Register;
