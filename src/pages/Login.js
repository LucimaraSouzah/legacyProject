import React from "react";
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

  return (
    <div className="App">
      <header>
        <img src={logo} width={60} className="logo" alt="logo Legacy" />
        <div className="title">Legacy</div>
      </header>
      <form>
        <main className="loginBody">
          <label>Login</label>
          <Input m1="./icons/person.svg" />
          <label>Senha</label>
          <Input m1="./icons/lock.svg" type="password" />
          <p onClick={changePassword}>Esqueceu sua senha?</p>
          <p onClick={handleClick}>Não possui cadastro? Crie uma conta</p>
          <Button text="Acessar" />
        </main>
      </form>
    </div>
  );
}

export default Login;
