import styled from 'styled-components';

const Wrapper = styled.section`
  background: white;
  box-shadow: var(--shadow-200);
  .footer {
    width: 90vw;
    max-width: 1170px;
    margin: 0 auto;
    padding: 4rem 0;
    /* position: absolute;
    bottom: 0;
    left: 0;
    right: 0; */
    padding-bottom: 1rem;
  }
  .logo2 {
    width: 250px;
  }
  .logo-text p,
  .q-nav aside p {
    margin: 1rem 0;
  }
  .logo-text p {
    margin: 3rem 0;
    padding-right: 7rem;
  }
  @media screen and (min-width: 800px) {
    .footer,
    .q-nav {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      justify-content: center;

      gap: 4rem;
    }
  }
`;

export default Wrapper;
