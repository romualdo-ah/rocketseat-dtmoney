import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  overflow:auto;
  table {
    width: 100%;
    min-width: fit-content;
  }

  th {
    color: var(--Textos);

    font-weight: 500;
    padding: 1rem 2rem;
    text-align: left;
    line-height: 1.5rem;
  }

  td{ 
      padding: 1rem 2rem;
      border:0;
      background: var(--Shape-Principal);
      color: var(--Textos);
      border-radius: 0.25rem;
      &:first-child{
          color: var(--Titulos);
      }
      &.deposit{
          color:var(--Green);
      }
      &.withdraw{
          color:var(--Red);
      }
  }

  `;
