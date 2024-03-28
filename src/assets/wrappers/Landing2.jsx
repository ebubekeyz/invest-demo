import styled from 'styled-components';

const Wrapper = styled.div`
  overflow-x: hidden;
  .about-gal {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
    margin-bottom: 4rem;
  }

  .about-gal article {
    margin-bottom: 6rem;
    height: 18rem;
  }
  .abt-img {
    transition: 1.5s ease-in-out all;
    height: 70%;
  }
  .abt-img:hover {
    height: 10rem;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .about-gal article h4 {
    color: var(--primary-500);
    margin-top: 1rem;
    font-weight: 600;
    font-size: 1.4rem;
  }
  .about-gal article img {
    border-radius: 0.6rem;
    transition: var(--transition);
  }
  @media screen and (min-width: 800px) {
    aside {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .about-gal {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 2rem;
    }
  }
`;

export default Wrapper;
