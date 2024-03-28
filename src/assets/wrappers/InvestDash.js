import styled from 'styled-components';

const Wrapper = styled.section`
  .invest {
    width: 75vw;
    margin: 0 auto;
    text-align: center;
  }

  .invest article {
    border-radius: 0.8rem;
    border: 1px solid var(--grey-700);
  }
  .split span {
    color: white;
  }
  background: rgb(39, 37, 37);
  @media screen and (min-width: 800px) {
    .invest {
      width: 60vw;
      margin: 0 auto;
    }
    .investDash {
      width: 100%;
      height: 100%;
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
