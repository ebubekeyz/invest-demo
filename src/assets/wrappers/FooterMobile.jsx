import styled from 'styled-components';

const Wrapper = styled.section`
  .footer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    place-items: center;
    color: var(--grey-500);
    padding: 0.5rem 0;
    background: rgb(19, 17, 17);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .link-text {
    color: var(--grey-500);
    font-size: 0.8rem;
  }
  .home,
  .home-text {
    color: white;
  }
  .home {
    background: linear-gradient(
      to right,
      rgba(69, 179, 54, 0.7),
      rgba(29, 201, 143, 0.7)
    );
    font-size: 0.5rem;
    border-radius: 10rem;
    width: 2rem;
    height: 2rem;
  }

  .home-icon {
    transition: var(--transition);
    padding: 0.5rem;
  }
  .home-icon-main {
    color: var(--grey-500);
    transition: var(--transition);
  }
  .home-icon-main:hover {
    transform: scale(1.3);
  }
  .icon {
    font-size: 1.2rem;
  }
  .footer-content {
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    gap: 0.4rem;
  }
  @media screen and (min-width: 800px) {
    .footer {
      display: none;
    }
  }
`;

export default Wrapper;
