import styled from 'styled-components';

const Wrapper = styled.div`
  background: rgb(39, 37, 37);
  padding-bottom: 8rem;

  .admin {
    width: 90%;
    margin: 0 auto;
  }
  .members h5 {
    color: yellow;
    padding: 1rem 0;
  }
  .members {
    border-bottom: 1px solid yellow;
    padding-bottom: 0.5rem;
  }

  .members p {
    color: rgb(206, 202, 202);
  }
  .admin h4 {
    color: white;
    padding-top: 1rem;
    letter-spacing: 0;
    font-size: 1.5rem;
  }

  #total p {
    font-size: 1.3rem;
  }
  @media screen and (min-width: 800px) {
    .members p {
      margin-left: 1rem;
    }

    .members p span {
      font-weight: bold;
    }

    .members {
      display: flex;
      align-self: center;
      align-items: center;
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
