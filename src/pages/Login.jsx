import React from "react";
import Navbar from "../component/Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [errorLogin, setErrorLogin] = useState(null);

  const navigate = useNavigate();

  const handleChangeUserName = (event) => {
    console.log(event);
    setUsername(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    const payload = {
      username: username,
      password: password,
    };

    axios
      .post("https://api.mudoapi.tech/login", payload)
      .then((res) => {
        console.log(res);
        const token = res.data.data.token;
        setToken(token);

        //Menyimpan token di dalam localStroge
        console.log(token);
        localStorage.setItem("access_token", token);

        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((err) => {
        console.log(err.response);
        setErrorLogin(err.response.data.message);
      });
  };

  return (
    <div>
      <Navbar />
      <h1>Login</h1>

      {token && <p>Login Berhasil</p>}
      {errorLogin && <p>{errorLogin}</p>}

      <div>
        <input onChange={handleChangeUserName} placeholder="username" />
        <input onChange={handleChangePassword} placeholder="password" />
        <button onClick={handleSubmit}>Login</button>
      </div>
    </div>
  );
};

export default Login;
