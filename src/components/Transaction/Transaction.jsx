import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const identifier = transaction.amount > 0 ? "plus" : "minus";
  return (
    <li key={transaction.id} className={`${identifier}`}>
      {transaction.text} <span>{transaction.amount}</span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
