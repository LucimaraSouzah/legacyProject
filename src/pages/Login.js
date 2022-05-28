import React, { useState, useEffect } from "react";
import "../App.css";
import "./Login.css";
import Input from "../components/Input";
import Button from "../components/Button";
import logo from "../images/logo.svg";
import { useNavigate } from "react-router";

function Login() {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/register");
  }
  function changePassword() {
    navigate("/password");
  }
  // function enterHome() {
  //   navigate("/home");
  // }

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/home");
    }
  }, []);

  async function logar() {
    console.warn(user,password)
    console.log(user, password)
    let item = { user, password };
    let result = await fetch("localhost:3000/home/v1/auth/login/customer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json()
    localStorage.setItem("user-info",JSON.stringify(result))
    navigate("/home")
    console.log(result)
  }

  return (
    <div className="App">
      <header>
        <img src={logo} width={60} className="logo" alt="logo Legacy" />
        <div className="title">Legacy</div>
      </header>
      <form>
        <main className="loginBody">
          <label>Login</label>
          <Input
            id="user"
            m1="./icons/person.svg"
            onChange={(e) => setUser(e.target.value)}
          />
          <label>Senha</label>
          <Input
            id="password"
            m1="./icons/lock.svg"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p onClick={changePassword}>Esqueceu sua senha?</p>
          <p onClick={handleClick}>Não possui cadastro? Crie uma conta</p>
          <Button onClick={logar} text="Acessar" />
        </main>
      </form>
    </div>
  );
}

export default Login;
