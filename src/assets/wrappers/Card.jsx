import styled from 'styled-components';

const Wrapper = styled.div`
  .card {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
  }
  .card-main {
    margin-top: -4rem;
  }

  .card div:hover {
    transform: scale(1.03);
    box-shadow: var(--shadow-2);
  }
  .card div {
    background: white;
    padding: 1.5rem;
    transition: var(--transition);
    border: 1px solid var(--grey-200);
    height: 11rem;
    width: 100%;

    text-align: center;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    place-items: center;
  }
  .card div h3 {
    line-height: 1.5;
    color: var(--grey-500);
  }
  @media screen and (min-width: 800px) {
    .card {
      display: flex;
      justify-content: center;
      align-self: center;
    }
  }
`;

export default Wrapper;
