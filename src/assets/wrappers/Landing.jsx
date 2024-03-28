import styled from 'styled-components';

const Wrapper = styled.div`
  width: 90vw;
  margin: 4rem auto;
  max-width: 1170px;
  overflow-x: hidden;

  .landing article {
    margin-bottom: 1rem;
    margin-right: 1rem;
  }

  .landing article h2 {
    color: red;
    font-weight: 700;
    font-size: 3.5rem;
    max-width: 20rem;
  }
  .know-arrow {
    display: flex;

    align-self: center;
  }

  .landing article h4 {
    color: var(--grey-500);
    font-weight: 700;
    max-width: 25rem;
  }
  .landing-btn {
    color: var(--primary-500);
    font-size: 1rem;
    animation: large 1s linear infinite;
  }
  .landing {
    margin-bottom: 4rem;
  }
  @keyframes large {
    to {
      transform: translate(20px, 0%);
    }
  }

  .about-gal {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
    margin-bottom: 4rem;
  }
  .about-gal article {
    margin-bottom: 2rem;
    transition: 1.5s ease-in-out all;
  }

  .abt-img {
    transition: 1.5s ease-in-out all;
    height: 60%;
  }
  .abt-img2 {
    transition: 3s ease-in-out all;
    height: 30%;
  }
  .abt-img2:hover {
    height: 8rem;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .abt-img:hover {
    height: 18rem;
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

  p {
    color: var(--grey-500);
    font-size: 0.9rem;
  }
  .box-container {
    height: 100%;
  }
  .box-container article {
    background: 'white';
    box-shadow: 0 4px 6px 3px rgba(0, 0, 0, 0.1);
    padding: 3rem;
    margin-bottom: 1rem;
  }
  .box-inner {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .bond {
    transition: var(--transition);
  }

  .estate {
    transition: var(--transition);
  }
  .estate:hover {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url('/real estate.jpg') center/cover no-repeat;
  }
  .estate:hover .box-inner {
    visibility: hidden;
  }
  .estate:hover .bond-text {
    visibility: hidden;
  }

  .bond:hover {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url('/bonds.jpg') center/cover no-repeat;
  }

  .bond:hover .box-inner {
    visibility: hidden;
  }
  .bond:hover .bond-text {
    visibility: hidden;
  }
  @media screen and (min-width: 800px) {
    .box-container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1.7rem;
      align-items: center;
    }

    .landing {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    aside {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .about-gal {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 2rem;
    }
  }
`;

export default Wrapper;
