import styled from "styled-components";

export const Container = styled.header`
  background: var(--Blue);
  /* width: 100%; */

`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #fff;
    background: var(--Blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    cursor: pointer;

    transition: filter .1s;
    &:hover {
      filter: brightness(0.7);
    }
    &:active{
      background: var(--Blue-light);
      color: var(--Titulos);
    }

    @media (max-width: 600px) {
      padding:0 1rem;
    }
  }
`;
