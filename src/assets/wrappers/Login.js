import styled from 'styled-components';

const Wrapper = styled.div`
  form {
    max-width: var(--fixed-width);
    background: var(--white);
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-2);
    padding: 2rem 2.5rem;
  }

  form h4 {
    text-align: center;
    margin-bottom: 1.5rem;
  }
  form p {
    color: var(--grey-400);
    text-align: center;
  }
  .logo2 {
    width: 200px;
  }
  .reg {
    color: red;
  }
  .form-control {
    display: grid;
    grid-template-columns: 1fr;
  }
  .form-input {
    width: 100%;
    margin-bottom: 0.8rem;
    border-radius: 0;
    border-top-left-radius: var(--borderRadius);
    border-bottom-left-radius: var(--borderRadius);
  }
  .form-control .btn {
    border-radius: 0;
    border-top-right-radius: var(--borderRadius);
    border-bottom-right-radius: var(--borderRadius);
    margin-bottom: 0.8rem;
  }
`;

export default Wrapper;
