import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: new Date().getTime().toString(),
      text,
      amount: +amount,
    };
    setAmount("");
    setText("");
    // const clearField = {
    //   id: id,
    //   text: "",
    //   amount: "",
    // };

    addTransaction(newTransaction);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text"> Add New Transaction</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (- for expense)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add </button>
      </form>
    </>
  );
};
