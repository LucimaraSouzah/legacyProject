import React, { useState } from "react";
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

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function logar(e) {
    e.preventDefault();
    let item = { username, password };
    let result = await fetch(
      "https://homolog-api.liberty-app.com/v1/auth/login/customer",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      }
    );
    result = await result.json();
    if (result.status == "success") {
      navigate("/home");
    }
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
            id="username"
            m1="./icons/person.svg"
            onChange={(e) => setUsername(e.target.value)}
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
          <Button prop={logar} text="Acessar" />
        </main>
      </form>
    </div>
  );
}

export default Login;
