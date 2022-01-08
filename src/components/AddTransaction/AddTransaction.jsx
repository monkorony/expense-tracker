import React, { useState } from "react";

const AddTransaction = () => {
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
  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form">
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
