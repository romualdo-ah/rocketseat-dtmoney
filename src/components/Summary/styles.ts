import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: -10rem;
  gap: 1.2rem;

  div {
    background: var(--Background);
    border-radius: 0.25rem;
    padding: 1.5rem 2rem;
    width: 33%;
    color: var(--Text-title);
    box-shadow: 0px 10px 13px -16px #000000;
  }

  header {
    display: flex;
    justify-content: space-between;
  }
  strong {
    font-weight: 500;
    font-size: 1.6rem;
    margin-top: 1rem;
    display: block;
    word-wrap: normal;
  }

  .hightlight-background {
    background: var(--Green);
    color: #fff;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: space-around;
    margin-top: -10rem;
    gap: 2rem;

    div {
      width: 100%;
      &:nth-child(3) {
        order: -1;
      }
    }
  }
`;
