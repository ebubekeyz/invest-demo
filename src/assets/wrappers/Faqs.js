import styled from 'styled-components';

const Wrapper = styled.section`
  .container {
    width: 90vw;
    margin: 5rem auto;
    background: var(--white);
    border-radius: var(--borderRadius);
    padding: 1.5rem;
    max-width: 800px;
    box-shadow: var(--shadow-3);
  }
  .container h1 {
    text-align: center;
    margin-bottom: 3rem;
    color: var(--grey-700);
  }
  .question {
    padding: 1rem 1.5rem;
    border: 2px solid var(--grey-200);
    margin-bottom: 1rem;
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-3);
    background: var(--primary-900);
  }

  .question p {
    color: var(--grey-500);
    line-height: 2;
    margin-top: 1rem;
  }
  .question header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }
  .question h5 {
    font-weight: 500;
    line-height: 1.5;
    color: var(--grey-700);
  }
  .question-btn {
    background: transparent;
    border-color: transparent;
    width: 2rem;
    height: 2rem;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: var(--white);
    cursor: pointer;
    /* optional - last item */
    align-self: flex-start;
    min-width: 2rem;
  }
`;

export default Wrapper;
