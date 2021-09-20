import React, { props } from "react";
import { CardList } from "../App";
import { IncomeExpenses } from "./IncomeExpenses";

const Card = ({ card }) => {
  return (
    <div className="card">
      <div>
        <h2>{card.heading}</h2>
      </div>
      <div>
        <p>Current APY: {card.current}</p>
        <p>Amount Deposited: {card.deposit}</p>
        <p>Accured Interest:{card.interest}</p>
      </div>
      <IncomeExpenses />
      <div>Amount: {card.amount}</div>
      <button className="button">Submit</button>
    </div>
  );
};

export default Card;
