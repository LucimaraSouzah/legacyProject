import React from "react";
import "../App.css";
import "./Register.css";
import Input from "../components/Input";
import Button from "../components/Button";
import logo from "../images/logo.svg";
import { useNavigate } from "react-router";

function Register() {
  let navigate = useNavigate();
  function returnBack() {
    navigate("/");
  }
  return (
    <div className="App">
      <header className="Register">
        <img src={logo} width={40} className="logo" alt="logo Legacy" />
        <h1 className="titleRegister">Legacy</h1>
      </header>
      <main className="RegisterBody">
        <h1>Cadastre-se</h1>
        <form>
          <div>
            <label>Nome</label>
            <Input m1="./icons/badge.svg" />
          </div>
          <div className="divRow">
            <label className="labelRow">E-mail</label>
            <Input m1="./icons/email.svg" type="email" />
            <label className="labelRow left">Telefone</label>
            <Input m1="./icons/call.svg" type="tel" />
          </div>
          <div className="divRow">
            <label className="labelRow">Login</label>
            <Input m1="./icons/person.svg" />
            <label className="labelRow left">Senha</label>
            <Input m1="./icons/lock.svg" type="password" />
          </div>
          <div className="choice">
            <img
              onClick={returnBack}
              src="./icons/back.svg"
              width={40}
              alt="Icone de voltar"
              className="back"
            />
            <Button text="Cadastrar" />
          </div>
        </form>
      </main>
    </div>
  );
}

export default Register;
