import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      alert("Please fill all details!");
      return;
    }
    if (password !== confirmPassword) {
      alert("Confirm Password");
      return;
    }
    axios
      .post("http://localhost:3001/signup", {
        firstName,
        lastName,
        email,
        password,
      })
      .then((response) => {
        alert("Sign up completed");
        console.log(response.data)
        console.log("Form Details:", response.data);
      })
      .catch((error) => {
        console.error("Error during sign up:", error);
        alert("Error during sign up. Please try again.");
      });
  };

  return (
    <div className="container mt-5 signup-box" id="signUp">
      <div className="row justify-content-center">
        <div className="col-md-5 mt-5">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center">Sign Up</h2>
              <form>
                <div className="mb-2">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="mt-3 text-center">
                  <button
                    type="button"
                    className="btn btn-primary px-4"
                    onClick={handleSignUp}
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
