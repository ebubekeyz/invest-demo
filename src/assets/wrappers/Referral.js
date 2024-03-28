import styled from 'styled-components';

const Wrapper = styled.div`
  .information {
    width: 90vw;
    max-width: 1170px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .ref-inner {
    display: grid;
    grid-template-columns: 2% 98%;
    align-items: center;
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .info-inner1 {
    background: var(--primary-500);
    color: white;
    padding: 2rem;
    border-radius: 1rem;
  }

  .info-inner2 {
    border-radius: 1rem;
    background: red;
    color: white;
    padding: 2rem;
  }
  .ref-text {
    width: 90vw;
    max-width: 1170px;
    margin: 4rem auto;
  }

  .ref-text h3 {
    color: red;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .ref-num-inner h4 {
    color: green;
    margin-left: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .ref-num-inner p {
    margin-left: 2rem;
  }

  .ref-text article {
    margin-bottom: 2rem;
  }
  .ref-num {
    display: flex;
    justify-content: flex-start;
    align-self: center;
    margin-bottom: 2rem;
  }

  .ref-num span {
    background: var(--primary-500);
    color: white;

    font-weight: bold;
    font-size: 2rem;
    padding: 1rem;
    border-radius: 10rem;
    height: 4.2rem;
  }

  .info-inner1,
  .info-inner2 {
    transition: 0.5s ease-in-out all;
  }
  .info-inner1:hover,
  .info-inner2:hover {
    transform: scale(1.02);
  }

  @media screen and (min-width: 800px) {
    .information {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
    .ref-text {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  }
`;

export default Wrapper;
