import React, { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../contexts/userContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { userData, handleLogout, userLogin } = useContext(UserContext);

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
        console.log("Login Details:", response.data);

        localStorage.setItem("token", response.data.result.token);

        userLogin(response.data.result.user);
      })
      .catch((error) => {
        console.error("Error during login:", error);
        alert("Error during login. Please try again.");
      });
  };

  return (
    <div className=" login-box" id="login">
      <div className="">
        <div className="">
          <div className="">
            <div className=" mt-2">
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
