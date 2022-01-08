import React from "react";

const Transaction = ({ transaction }) => {
  const identifier = transaction.amount > 0 ? "plus" : "minus";
  return (
    <li key={transaction.id} className={`${identifier}`}>
      {transaction.text} <span>{transaction.amount}</span>
      <button className="delete-btn">x</button>
    </li>
  );
};

export default Transaction;
