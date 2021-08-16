import { FormEvent, useState } from "react";
import { Container, TransactionTypeContainer } from "./styles";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import outcomeImg from "../../assets/outcome.svg";
import incomeImg from "../../assets/income.svg";
import { useTransactions } from "../../hooks/useTransactions";
Modal.setAppElement("#root");

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();

  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const transaction = {
      title,
      amount,
      category,
      type,
    };

    await createTransaction(transaction);

    onRequestClose();

    setType("");
    setTitle("");
    setCategory("");
    setAmount(0);
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>
        <input
          type="text"
          name="titulo"
          id="titulo"
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number"
          name="Valor"
          id="valor"
          placeholder="Valor"
          // value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />
        <TransactionTypeContainer>
          <button
            type="button"
            onClick={() => setType("deposit")}
            className={["deposit", type === "deposit" ? "active" : ""].join(
              " "
            )}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </button>
          <button
            type="button"
            onClick={() => setType("withdraw")}
            className={["withdraw", type === "withdraw" ? "active" : ""].join(
              " "
            )}
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>
        <input
          type="text"
          name="categoria"
          id="categoria"
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit" value="Cadastrar">
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}
