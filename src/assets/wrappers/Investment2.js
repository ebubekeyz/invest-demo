import styled from 'styled-components';

const Wrapper = styled.div`
  article {
    background: black;
    box-shadow: var(--shadow-3);
    padding: 3rem 0;
    margin: 2rem 0;
  }

  .percent {
    display: flex;
    justify-content: center;
    align-self: center;
    font-weight: 700;
    text-align: center;
  }

  .percent-inner1 {
    text-align: center;
    margin: 0 auto;
  }
  .split {
    display: flex;
    justify-content: space-between;
    width: 12rem;
  }

  .check-inner {
    margin-left: 2rem;
  }
  .check-main {
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    margin: 1rem 0;
    justify-content: center;
  }
  article h3 {
    margin: 1rem;
    font-weight: 700;
    font-size: 1.5rem;
    text-align: center;
    color: white;
  }
  .percent-main {
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    margin: 1rem;
  }
  .percent h1 {
    font-size: 3rem;
    font-weight: bold;
    color: white;
  }

  .percent-inner {
    color: var(--grey-400);
    font-weight: 700;
  }
  .badge {
    font-size: 4rem;
    color: white;
  }
  .change-color {
    color: white;
  }

  .percent span {
    font-size: 1.5rem;
    align-items: center;
    color: white;
  }
  @media screen and (min-width: 800px) {
    .percent {
      display: grid;
      grid-template-columns: 15% 20% 70%;
      align-content: center;
      font-weight: 700;
    }
    .invest {
      display: grid;
      grid-template-columns: 1fr 1fr;
      text-align: center;
      gap: 2rem;
    }
  }
`;

export default Wrapper;
