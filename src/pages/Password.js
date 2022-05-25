import React, { useState, Component } from "react";
import "../App.css";
import "./Password.css";
import Input from "../components/Input";
import Button from "../components/Button";
import logo from "../images/logo.svg";
import { useNavigate } from "react-router";

function Password() {
  let navigate = useNavigate();
  function returnBack() {
    navigate("/");
  }

  const [isActive, setActive] = useState(false);

  const styleCondition = (e) => {
    let input = document.getElementById('input') 
    e.preventDefault();
    if (input.value != "" && input.value.includes('@')) {
      setActive(!isActive);
    } else if (input.value == "") {
      alert("Digite seu e-mail!")
    }
  };

  return (
    <div className="App">
      <header>
        <img src={logo} width={60} className="logo" alt="logo Legacy" />
        <div className="title">Legacy</div>
      </header>
      <main className="loginBody password">
        <form>
          <label className="titlePassword">Esqueceu sua senha?</label>
          <label>
            Digite seu e-mail e enviaremos um link para redefinir sua senha
          </label>
          <Input m1="./icons/email.svg" type="email"/>
          <div className="choice">
            <img
              onClick={returnBack}
              src="./icons/back.svg"
              width={40}
              alt="Icone de voltar"
              className="back"
            />
            <Button prop={styleCondition} text="Resetar senha"/>
          </div>
        </form>
        <div className={isActive ? "target" : "modal"}>
          <img src="./icons/check.svg" width={60} alt="Icone de check" />
          <h1>Link para recuperação da senha enviado para o e-mail</h1>
          <Button text="OK" prop={styleCondition}/>
        </div>
      </main>
    </div>
  );
}

export default Password;
