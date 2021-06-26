import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: -10rem;
gap: 2rem;
  div {
    background: var(--Background);
    border-radius: 0.25rem;
    padding: 1.5rem 2.5rem;
    width: 33%;
    color: var(--Text-title);
  }

  header {
    display: flex;
    justify-content: space-between;
  }
  strong {
    font-weight: 500;
    font-size: 2rem;
    margin-top: 1rem;
    display: block;
  }

  .hightlight-background{
      background: var(--Green);
      color:#fff;
  }
`;
