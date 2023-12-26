import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill in all the details!");
      return;
    }
    axios
      .post("http://localhost:3001/login", {
        email,
        password,
      })
      .then((response) => {
        alert("Login completed");
        console.log(response.data)
        console.log("Login Details:", response.data);
      })
      .catch((error) => {
        console.error("Error during login:", error);
        alert("Invalid credentials. Please try again.");
      });
  };

  return (
    <div className="container mt-5 login-box" id="login">
      <div className="row justify-content-center m-auto">
        <div className="col-md-5 mt-5">
          <div className="card mt-5">
            <div className="card-body mt-2">
              <h2 className="text-center">Login</h2>
              <form>
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

                <div className="m-3 text-center">
                  <button
                    type="button"
                    className="btn btn-primary px-4"
                    onClick={handleLogin}
                  >
                    Login
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
export default Login;
