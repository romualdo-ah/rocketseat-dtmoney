import styled from "styled-components";

export const Container = styled.form`
  h2 {
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--Textos);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--Green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;
    transition: 0.2s filter;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
  button {
    flex-basis: 100%;
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    background: transparent;

    display: flex;

    align-items: center;
    justify-content: center;

    &:hover {
      border-color: #aaa;
    }


    img {
      width: 20px;
      height: 20px;
    }

    span {
      display: inline-block;
      margin-left: 1rem;
      font-size: 1rem;
      color: var(--Titulos);
    }
  }

  button.withdraw.active {
    background: var(--Light-Red);
  }
  button.deposit.active {
    background: var(--Light-Green);

  }
`;
