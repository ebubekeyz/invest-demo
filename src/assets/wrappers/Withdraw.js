import styled from 'styled-components';

const Wrapper = styled.div`
  background: rgb(39, 37, 37);
  .wall {
    padding-top: 1rem;
  }

  .withdraw {
    padding: 3rem 1.5rem;
  }
  .withdrawForm h4 {
    border-bottom: 1px solid grey;
    padding: 1rem 0;
  }
  .withdrawForm {
    border: 0.1px solid var(--grey-600);
    color: white;
    background: rgb(19, 17, 17);
    border-radius: 0.4rem;
    padding: 2rem;
  }

  .withdraw-pending {
    border: 0.1px solid var(--grey-600);
    margin: 2rem auto;
    color: white;

    background: rgb(19, 17, 17);
    border-radius: 0.4rem;
  }
  .pending h3 {
    font-size: 1rem;
  }
  .pending {
    border-bottom: 1px solid var(--grey-700);
    padding: 1rem;
    padding-left: 1.7rem;
  }

  .pending p {
    margin-top: 1rem;
    font-size: 1rem;
    color: white;
  }
  #select,
  .input {
    margin: 1rem 0;
  }
  @media screen and (min-width: 800px) {
    .withdraw {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      align-items: flex-start;
      width: 100%;
      margin: 0;
    }
    .withdraw-pending {
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
