import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);

  const [formState, setFormState] = useState({
    title: "",
    amount: 0,
  });

  const handleChange = (e) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let transaction = {
      id: Math.floor(Math.random() * 100000000),
      text: formState.title,
      amount: Math.floor(formState.amount),
    };
    addTransaction(transaction);
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            name="title"
            value={formState.title}
            type="text"
            id="text"
            placeholder="Enter text..."
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            name="amount"
            value={formState.amount}
            onChange={handleChange}
            type="number"
            id="amount"
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
