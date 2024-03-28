import styled from 'styled-components';

const Wrapper = styled.section`
  background: rgb(39, 37, 37);
  padding-bottom: 8rem;

  .updateForm {
    display: grid;
    grid-template-columns: 1fr;
    width: 90vw;
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
    .edit {
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
