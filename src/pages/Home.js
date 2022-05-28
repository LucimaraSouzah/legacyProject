import React from "react";
// import "../App.css";
// import "./Login.css";
import "./Home.css";
import Input from "../components/Input";
import Button from "../components/Button";
import image from "../images/playersoccer.svg";

function Home() {
  return (
    <div className="HomeContent">
      <header className="Home">
        <div>
          <img
            src="./icons/account.svg"
            width={40}
            className="logo"
            alt="logo Legacy"
          />
          <h1 className="title">Olá, [nome]</h1>
        </div>

        <div className="saldo">
          <p>Saldo: </p>
          <p>R$: 15.000</p>
        </div>
      </header>
      <section className="cardPromo">
        <div className="cardPromoBody">
          <div className="cardPromoLeft">
            <h1>Faça apostas lucrativas</h1>
            <p>Comece a prever as partidas e ganhe até R$ 100.000</p>
          </div>
          <div className="cardPromoRight">
            <img src={image} width={50} />
          </div>
        </div>
      </section>
      <section className="balanceBody">
        <div className="balance">
          <h1 className="titleBalance">Total recebido</h1>
          <p className="descBalance">$20.000</p>
        </div>
        <div className="balance">
          <h1 className="titleBalance">Operações hoje</h1>
          <p className="descBalance">0%</p>
        </div>
        <div className="balance">
          <h1 className="titleBalance">Operações ontem</h1>
          <p className="descBalance">0%</p>
        </div>
        <div className="balance">
          <h1 className="titleBalance">Graduação</h1>
          <p className="descBalance">Trader vip</p>
        </div>
      </section>
      <section className="rentabilidade">
        <div className="titleRentabilidade">
          <h1>Histórico rentabilidade</h1>
        </div>
        <table>
          <tr>
            <th>Data</th>
            <th>Descrição</th>
            <th>Porcentagem</th>
          </tr>
          <tr>
            <td>25/02/2002</td>
            <td>Teste</td>
            <td>5%</td>
          </tr>
          <tr>
            <td>25/02/2002</td>
            <td>Teste</td>
            <td>5%</td>
          </tr>
          <tr>
            <td>25/02/2002</td>
            <td>Teste</td>
            <td>5%</td>
          </tr>
        </table>
      </section>
      <footer>
        <img src="./icons/menu.svg" width={25} />
        <img src="./icons/favorites.svg" width={25} />
        <img src="./icons/calendar.svg" width={25} />
        <img src="./icons/ticket.svg" width={25} />
      </footer>
    </div>
  );
}

export default Home;
