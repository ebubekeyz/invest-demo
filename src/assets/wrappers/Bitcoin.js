import styled from 'styled-components';

const Wrapper = styled.div`
  background: rgb(39, 37, 37);
  padding: 1rem 0;
  padding-bottom: 8rem;
  .section-center {
    width: 90vw;
    margin: 0 auto;
  }
  .receipt-btn {
    margin-top: 1rem;
    width: 8rem;
  }
  .receipt-form {
    display: grid;
    grid-template-columns: 1fr;
  }
  .withdraw-pending {
    border: 0.1px solid var(--grey-600);
    margin: 0 auto;
    color: white;

    background: rgb(19, 17, 17);
    border-radius: 0.4rem;
  }
  .pending h3 {
    font-size: 1rem;
    border-bottom: 1px solid var(--grey-700);
    padding: 1rem 0;
  }
  .pending {
    padding: 1rem;
    padding-left: 1.7rem;
  }

  .coin {
    color: var(--primary-500);
  }

  .pending p {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    font-size: 1rem;
    color: white;
  }
  #address {
    background: white;
    color: black;
    padding: 0.5rem;
  }
  .top-inner {
    cursor: pointer;
  }
  .back {
    color: var(--grey-400);
  }

  .space {
    margin-right: 0.6rem;
  }

  .top-inner {
    display: flex;
    align-self: center;
  }
  .top {
    display: flex;
    justify-content: space-between;
    place-items: center;
    align-self: center;
    border-bottom: 1px solid var(--grey-800);
    padding-bottom: 1.2rem;
  }
  .back-icon,
  .back {
    color: white;
  }
  .top h4 {
    color: white;
    font-size: 1.2rem;
  }
  .top2 {
    display: flex;
    justify-content: space-between;
    place-items: center;
    align-self: center;
    border-bottom: 1px solid var(--grey-800);
    padding-top: 2rem;
    width: 90vw;
    margin: 0 auto;
  }
  @media screen and (min-width: 800px) {
    .top2 {
      width: 100%;
    }
    .section-center {
      width: 100%;
      margin: 0;
    }
    .container {
      display: grid;
      grid-template-columns: 25% 70%;
      gap: 2rem;
    }
  }
`;

export default Wrapper;
