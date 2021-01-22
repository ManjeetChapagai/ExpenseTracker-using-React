import React from "react";
import { Header } from "../components/Header";
import { Balance } from "../components/Balance";
import { IncomeExpense } from "../components/IncomeExpense";
import { IncomeExpenceLists } from "../components/IncomeExpenceLists";
import { AddTransaction } from "../components/AddTransaction";
import { GlobalProvider } from "../context/GlobalState";

export const Wallet = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <IncomeExpenceLists />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
};
