import styled from 'styled-components';

const Wrapper = styled.div`
  overflow-x: hidden;

  p {
    line-height: 2;
    color: var(--grey-500);
    margin-top: 2rem;
  }
  .cont {
    background: var(--primary-700);
    text-align: center;
    color: white;
    width: 90vw;
    max-width: 1170px;
    margin: 0 auto;
    padding: 2rem 1rem;
    margin-bottom: 4rem;
  }

  .cont p {
    color: white;
  }
  .others h2 {
    color: red;
    font-weight: 700;
    padding-top: 2rem;
  }
  .cont .btn:hover {
    background: black;
  }

  aside {
    width: 90vw;
    max-width: 1170px;
    margin: 0 auto;
  }

  .cert {
    width: 20rem;
    margin-bottom: 1rem;
  }
  .facts h3 {
    color: red;
    font-weight: bold;
    margin-top: 2rem;
  }

  .list li {
    line-height: 1.5;
    margin: 2rem 0;
    display: grid;
    grid-template-columns: 30px 1fr;
  }
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
    height: 80%;
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
      gap: 2rem;
    }
    .about-gal {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 2rem;
    }
  }
`;

export default Wrapper;
