import React, { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/globals";
import { NewTransactionModal } from "./components/NewTransactionModal";
import TransactionProvider from "./hooks/useTransactions";

function App() {
  const [isNewTransationModalOpen, setIsNewTransationModalOpen] =
    useState(false);

  function handleCloseNewTransationModal() {
    setIsNewTransationModalOpen(false);
  }

  function handleOpenNewTransationModal() {
    setIsNewTransationModalOpen(true);
  }

  return (
    <TransactionProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransationModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransationModalOpen}
        onRequestClose={handleCloseNewTransationModal}
      />
      <GlobalStyle />
    </TransactionProvider>
  );
}

export default App;
