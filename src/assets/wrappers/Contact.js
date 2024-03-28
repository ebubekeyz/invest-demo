import styled from 'styled-components';

const Wrapper = styled.div`
  .form-input {
    width: 100%;
    margin-bottom: 0.8rem;
    border-radius: 0;
    border-top-left-radius: var(--borderRadius);
    border-bottom-left-radius: var(--borderRadius);
  }
  form p {
    color: var(--grey-400);
    text-align: center;
  }
  @media screen and (min-width: 800px) {
    aside {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4px;
      align-items: flex-start;
    }
  }
`;

export default Wrapper;
