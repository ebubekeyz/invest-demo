import styled from 'styled-components';

const Wrapper = styled.section`
  background: rgb(39, 37, 37);
  padding-bottom: 15rem;
  
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
  .top-inner {
    cursor: pointer;
  }
  .top h4 {
    color: white;
    font-size: 1rem;
  }
  .top2 {
    display: flex;
    justify-content: space-between;

    border-bottom: 1px solid var(--grey-800);
    padding-top: 2rem;
    width: 90vw;
    margin: 0 auto;
  }
  .withdraw-pending {
    border: 0.1px solid var(--grey-600);
    padding-bottom: 2rem;
    color: white;

    background: rgb(19, 17, 17);
    border-radius: 0.4rem;
  }
  .pending h4 {
    font-weight: 700;
  }
  .pending h3 {
    font-size: 1rem;
  }
  .pending {
    border-bottom: 1px solid var(--grey-700);
    padding: 1rem 1rem;
    padding-bottom: 0;
  }
  
  .header h4 {
    font-size: 0.5rem;
    padding: 0.6rem;
    
  }
  .header {
      border-bottom: 1px solid var(--grey-400);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    padding: 0.5rem 0;
    place-items: center;
    background:linear-gradient(
      to right,
      rgba(69, 179, 54, 0.7),
      rgba(29, 201, 143, 0.7)
    );linear-gradient(
      to right,
      rgba(69, 179, 54, 0.7),
      rgba(29, 201, 143, 0.7)
    );
  }
  .pending p {
    margin-top: 1rem;
    font-size: 1rem;
    color: white;
  }
  .empty{
    text-align: center;
    padding: 6rem;
    font-size: 1rem;
  }

    @media screen and (min-width: 800px) {
    .section-center {
      width: 100%;
      margin: 0;
    }
    .container {
      display: grid;
      grid-template-columns: 25% 70%;
      gap: 2rem;
    }
    .header h4 {
      font-size: 0.8rem
    }
  }
`;

export default Wrapper;
