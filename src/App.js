import React, { props } from "react";
import { Header } from "./components/Header";
import { GlobalProvider } from "./context/GlobalState";
import Card from "./components/Card";
import "./App.scss";

const CardList = ({ cards }) => (
  <div className="card-list">
    {cards.map((card) => (
      <Card key={card.id} card={card} />
    ))}
  </div>
);

const data = [
  {
    id: 1,
    heading: "Compound",
    current: "5%",
    deposit: "100 USDC",
    interest: "0.4 USDC",
    amount: "200 USDC",
  },
  {
    id: 2,
    heading: "Aave",
    current: "3%",
    deposit: "500 USDC",
    interest: "1.2 USDC",
    amount: "0 USDC",
  },
  {
    id: 3,
    heading: "Curve",
    current: "2.5%",
    deposit: "0 USDC",
    interest: "0 USDC",
    amount: "0 USDC",
  },
];
function App() {
  return (
    <GlobalProvider>
      <div>
        <Header />
        <div className="container">
          <CardList cards={data} />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
