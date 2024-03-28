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
    background: rgb(19, 17, 17);
    border-radius: 0.4rem;
    border: 1px solid var(--grey-600);
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
  .form-container {
    max-width: 50rem;
    margin: 0 auto;
    margin-top: 1rem;
  }
  .input {
    border-radius: 0.4rem;
    width: 100%;
    background: rgb(19, 17, 17);
    border: 1px solid var(--grey-700);
    font-size: 1.2rem;
    padding: 0.4rem;
    color: white;
    margin-top: 0.7rem;
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
