import styled from 'styled-components';

const Wrapper = styled.div`
  background: rgb(39, 37, 37);
  padding-bottom: 8rem;
  overflow-x: hidden;

  .balance h4 {
    font-size: 1.4rem;
    margin: 1rem 0;
    letter-spacing: 0;
    font-weight: bold;
  }
  .balance p {
    color: #324960;
    line-height: 2;
  }
  .admin {
    padding: 0 1rem;
  }
  .balance {
    background: rgba(221, 213, 213, 0.1);
    padding: 1rem;
    margin: 1rem auto;
    width: 100%;

    box-shadow: var(--var-shadow-200);
    border-radius: 0.5rem;
  }
  .amount p {
    color: #324960;
    font-size: 0.75rem;
  }
  .power {
    font-size: 4rem;
    color: var(--primary-700);
    transform: rotate(130deg);
  }
  #main {
    padding: 2rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: center;
  }

  .updateForm {
    display: grid;
    grid-template-columns: 1fr;
    width: 85vw;
    max-width: 30rem;
    margin: 1rem auto;
    color: white;
  }
  .change {
    margin-top: 4rem;
  }
  .updateForm h4 {
    text-align: center;
    margin-bottom: 1rem;
    letter-spacing: 0;
    font-weight: bold;
  }
  .inner {
    display: grid;
    grid-template-columns: 30% 70%;
    margin: 0.5rem 0;
  }
  .input {
    color: white;
    width: 100%;
    padding: 0.5rem;
    background: rgb(34, 33, 33);
    border: 1px solid var(--grey-400);
  }
  @media screen and (min-width: 800px) {
    .balance {
      max-width: 60rem;
    }
    .admin {
      width: 100%;
      margin: 0;
    }
    .container {
      display: grid;

      grid-template-columns: 22% 70%;
      gap: 2rem;
    }
  }
`;

export default Wrapper;
