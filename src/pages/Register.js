import React, { useState} from "react";
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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [indicatedBy, setIndicatedBy] = useState("");

  async function cadastrar(e) {
    e.preventDefault();
    let item = { name, email, username, password, phone, indicatedBy};
    let result = await fetch("https://homolog-api.liberty-app.com/v1/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json()
    if (result.status == "success") {
      navigate("/")
    }
    console.log(result)
    console.log("ola")
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
            <Input
              m1="./icons/badge.svg"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="divRow">
            <label className="labelRow">E-mail</label>
            <Input
              m1="./icons/email.svg"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="labelRow left">Telefone</label>
            <Input
              m1="./icons/call.svg"
              type="tel"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="divRow">
            <label className="labelRow">Login</label>
            <Input
              m1="./icons/person.svg"
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className="labelRow left">Senha</label>
            <Input
              m1="./icons/lock.svg"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label>Indicação</label>
            <Input
              m1="./icons/person.svg"
              onChange={(e) => setIndicatedBy(e.target.value)}
            />
          </div>
          <div className="choice">
            <img
              onClick={returnBack}
              src="./icons/back.svg"
              width={40}
              alt="Icone de voltar"
              className="back"
            />
            <Button prop={cadastrar} text="Cadastrar" />
          </div>
        </form>
      </main>
    </div>
  );
}

export default Register;
