import React from "react";
import "../App.css";
import "./Password.css";
import Input from "../components/Input";
import Button from "../components/Button";
import logo from "../images/logo.svg";
import { useNavigate } from "react-router";

function Login() {
  let navigate = useNavigate();
  function returnBack() {
    navigate("/");
  }

  return (
    <div className="App">
      <header>
        <img src={logo} width={60} className="logo" alt="logo Legacy" />
        <div className="title">Legacy</div>
      </header>
      <main className="loginBody">
        <form>
          <label className="titlePassword">Esqueceu sua senha?</label>
          <label>
            Digite seu e-mail e enviaremos um link para redefinir sua senha
          </label>
          <Input m1="./icons/email.svg" type="email" />
          <div className="choice">
            <img
              onClick={returnBack}
              src="./icons/back.svg"
              width={40}
              alt="Icone de voltar"
              className="back"
            />
            <Button text="Resetar senha" />
          </div>
        </form>
      </main>
    </div>
  );
}

export default Login;
