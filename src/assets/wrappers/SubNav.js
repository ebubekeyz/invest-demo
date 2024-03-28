import styled from 'styled-components';

const Wrapper = styled.div`
  width: 90vw;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0.5rem 0;
  /* display: none; */
  display: flex;
  justify-content: right;
  align-items: flex-end;
  span {
    text-align: center;
    font-size: 0.8rem;
    padding: 0 0.5rem;
  }
  .phone,
  .mail {
    color: var(--primary-500);
    align-items: center;
  }
  .sub1 {
    padding: 0;
  }

  @media screen and (min-width: 800px) {
    .subNav {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    .sub1 {
      padding: 0 2rem;
    }
    span {
      font-size: 0.9rem;
      color: var(--grey-900);
    }
  }
`;
export default Wrapper;
