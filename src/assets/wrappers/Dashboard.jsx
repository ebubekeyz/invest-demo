import styled from 'styled-components';

const Wrapper = styled.section`
  background: rgb(39, 37, 37);
  padding-bottom: 7rem;
  .dashboard {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
  }
  .upgrade-main {
    margin-bottom: 3rem;
  }
  .upgrade-main h3 {
    color: white;
    font-size: 1.1rem;
    margin-bottom: 1rem;
    letter-spacing: 0;
  }
  .upgrade p {
    font-size: 1rem;
    padding-top: 0.3rem;
    max-width: 1rem;
  }
  .upgrade-btn {
    padding: 0.73rem;
    cursor: pointer;
    color: white;
    background: var(--primary-500);
    border: none;
  }
  .main-tree {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
    justify-content: center;
    padding: 1rem;
  }
  .main-tree p {
    color: white;
    text-transform: capitalize;
    border-bottom: 1px solid black;
  }

  .ref-tree {
    background: black;

    border-radius: 0.5rem;
    margin-bottom: 4rem;
  }
  .ref-tree h4 {
    font-size: 1rem;
    padding: 1rem;
    border-bottom: 0.1rem solid var(--grey-600);
    padding-bottom: 1rem;
  }
  #icon4 {
    background: green;
  }
  #icon3 {
    background: violet;
  }
  #icon2 {
    background: brown;
  }
  .pending {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  @media screen and (min-width: 800px) {
    .pending {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    .dashboard {
      width: 100%;
      margin: 0;
    }
    .container {
      display: grid;

      grid-template-columns: 22% 70%;
      gap: 2rem;
    }
  }
  .icon-main {
    font-size: 2rem;
  }
  .pend-icon {
    text-align: center;
    background: orange;
    padding: 0.2rem;
    width: 3.5rem;
    border-radius: 0.5rem;
  }
  .pending article h5 {
    font-size: 1rem;
    letter-spacing: 0;
    padding: 1rem 0;
    padding-bottom: 0;
  }
  .pending article h4 {
    font-size: 1.2rem;
    letter-spacing: 0;
  }
  .pending article {
    background: black;
    color: white;
    display: grid;
    grid-template-columns: 1fr;
    padding: 1.5rem 1rem;
    border-radius: 0.5rem;
  }
  .upgrade {
    display: flex;
    justify-content: space-between;

    align-self: center;
    border: 1px solid var(--grey-400);
    border-radius: 0.3rem;
    padding-left: 1rem;
  }
  .box {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-self: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  #acc-bal-1 {
    background: linear-gradient(
      to right,
      rgba(226, 48, 17, 0.8),
      rgba(226, 48, 17, 0.2)
    );
  }
  #acc-bal-3 {
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.2)
    );
  }
  #acc-bal-2 {
    background: linear-gradient(
      to right,
      rgba(17, 48, 226, 0.8),
      rgba(17, 48, 226, 0.2)
    );
  }
  .acc-bal {
    background: linear-gradient(
      to right,
      rgba(69, 179, 54, 0.7),
      rgba(29, 201, 143, 0.7)
    );
    padding: 1.5rem;
    border-radius: 0.5rem;
    margin-top: 1rem;
  }
  .circle {
    display: flex;
    margin-bottom: 1rem;
  }
  .circle #circle-one,
  #circ-two {
    background: var(--grey-100);
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 5rem;

    color: white;
  }
  #circ-two {
    opacity: 0.4;
    margin-left: -0.5rem;
  }

  article p,
  h4 {
    color: white;
  }
  article h4 {
    font-size: 1.5rem;
    font-weight: bold;
    padding-top: 1rem;
  }
`;

export default Wrapper;
