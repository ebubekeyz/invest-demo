import styled from 'styled-components';

const Wrapper = styled.section`
  background: rgb(39, 37, 37);
  padding-top: 0.5rem;
  .section-center {
    width: 90%;
    color: white;
    padding: 1rem 0;
    padding-bottom: 0.2rem;
  }
  .form-main {
    border-radius: 0.4rem;

    padding: 2rem 1rem;
    margin-bottom: 7rem;
  }

  .update-btn {
    width: 100%;
    max-width: 50rem;
    margin: 1rem 0;
  }
  .btn-info {
    text-align: center;
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
  .adjust {
    margin-bottom: 8rem;
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
  .top2 {
    margin: 1.5rem 0;
  }
  .top2 h3 {
    font-size: 1.2rem;
  }

  .top h4 {
    font-size: 1.2rem;
  }

  .change {
    color: white;
    font-size: 1.1rem;
  }
  .back-icon {
    cursor: pointer;
    color: white;
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
  }
  @media screen and (min-width: 800px) {
    .settings {
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
