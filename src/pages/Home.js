import React, { useEffect, useState } from "react";
import "./Home.css";
import image from "../images/playersoccer.svg";
import axios from "axios";
import token from "./token";

function Home() {
  const [operationToday, setOperationToday] = useState([]);
  const [balance, setBalance] = useState([]);
  const [rentabilidade, setRentabilidade] = useState([]);
  // const [data, setData] = useState([]);
  // const [description, setDescription] = useState([]);
  // const [percent, setPercent] = useState([]);
  const [number, setNumber] = useState([]);
  const urlOperationToday =
    "https://homolog-api.liberty-app.com/v1/financial/stats/operation-sum?date=2022-05-28";
  const urlBalance =
    "https://homolog-api.liberty-app.com/v1/financial/stats/total-received";
  const urlRentabilidade =
    "https://homolog-api.liberty-app.com/v1/financial/profitability/schedule?filter[status]=PROCESSED&per-page=10";

  useEffect(() => {
    axios
      .get(urlOperationToday, {
        method: "GET",
        headers: {
          Authorization: token,
          "company-id": "16e683a2-3350-4a6f-abcd-e50394a1979c",
        },
      })
      .then(({ data }) => {
        setOperationToday(data.data.percent);
      });
  }, []);

  useEffect(() => {
    axios
      .get(urlBalance, {
        method: "GET",
        headers: {
          Authorization: token,
          "company-id": "16e683a2-3350-4a6f-abcd-e50394a1979c",
        },
      })
      .then(({ data }) => {
        setBalance(data.data.total.toLocaleString());
      });
  }, []);

  useEffect(() => {
    axios
      .get(urlRentabilidade, {
        method: "GET",
        headers: {
          Authorization: token,
          "company-id": "16e683a2-3350-4a6f-abcd-e50394a1979c",
        },
      })
      .then(({ data }) => {
        setRentabilidade(data.data);
      });
  }, []);

  const formatDate = (dateInfo) => {
    var date = new Date(dateInfo);
    let formatted_date =
      date.getDate() +
      "/" +
      (date.getMonth() + 1 < 10
        ? `0${date.getMonth() + 1}`
        : date.getMonth() + 1) +
      "/" +
      date.getFullYear();
    return formatted_date;
  };

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
          <h1 className="title">Seja bem-vindo(a)</h1>
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
            <img src={image} width={50} alt="Icone de um jogador de futebol" />
          </div>
        </div>
      </section>
      <section className="balanceBody">
        <div className="balance">
          <h1 className="titleBalance">Total recebido</h1>
          <p className="descBalance">{`R$ ${balance}`}</p>
        </div>
        <div className="balance">
          <h1 className="titleBalance">Operações hoje</h1>
          <p className="descBalance">{`${operationToday}%`}</p>
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
          <tbody id="tbody">
            <tr>
              <th>Data</th>
              <th>Descrição</th>
              <th>Porcentagem</th>
            </tr>

            {rentabilidade.map((e, n) => (
              <tr key={n}>
                <td>{formatDate(e.createdAt)}</td>
                <td>{e.description}</td>
                <td>{e.percent}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <footer>
        <img src="./icons/menu.svg" width={25} alt="Icone menu" />
        <img src="./icons/favorites.svg" width={25} alt="Icone favoritos" />
        <img src="./icons/calendar.svg" width={25} alt="Icone calendário" />
        <img src="./icons/ticket.svg" width={25} alt="Icone bilhete" />
      </footer>
    </div>
  );
}

export default Home;
