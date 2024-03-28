import styled from 'styled-components';

const Wrapper = styled.nav`
  .nav-cont {
    display: flex;
    justify-content: space-between;
    background: rgb(19, 17, 17);
    align-self: center;
    padding: 1rem 1.5rem;
  }
  .avatar {
    display: flex;
    align-self: center;
  }
  .logo {
    height: 45px;
  }
  .icon2 {
    font-size: 1.5rem;
    display: none;
  }
  .icon {
    color: white;
    cursor: pointer;
  }

  .toggle2 {
    background: black;
    padding: 1.7rem;
    display: none;
    border-radius: 0.5rem;

    position: absolute;
    right: 1rem;
  }
  .toggle2 li {
    color: white;
    padding: 0.4rem 0;
    font-size: 1rem;
    cursor: pointer;
  }

  .nav-info-inner {
    display: flex;

    justify-content: space-between;
    place-items: center;
  }
  .nav-info-inner {
    border: 1px solid var(--grey-600);
    padding: 0.3rem 0rem;
    border-radius: 0.5rem;
  }
  .nav-info-inner p {
    margin: 0 0.3rem;
    text-transform: capitalize;
    color: white;
  }

  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (min-width: 600px) {
    .toggle2 {
      position: absolute;
      right: 1rem;
    }
  }

  @media screen and (min-width: 800px) {
    .toggle2 {
      position: absolute;
      right: 0.8rem;
      top: 5.5rem;
    }
    .icon2 {
      display: block;
    }
    .nav-info-inner {
      border: none;
    }

    .nav-header {
      padding: 0;
    }
    .nav-toggle {
      display: none;
    }

    .links {
      display: flex;
      gap: 1rem;
    }
    .links a {
      padding: 0;
      font-weight: 400;
    }
    .links a:hover {
      padding: 0;
      background: transparent;
    }
    .social-icons {
      display: flex;
      gap: 0.5rem;
    }
    .social-icons a {
      color: var(--primary-500);
      transition: var(--transition);
    }
    .social-icons a:hover {
      color: var(--primary-300);
    }
  }

  .logo {
    color: var(--primary-500);
    font-weight: 700;
    letter-spacing: 2px;
  }
`;

export default Wrapper;
