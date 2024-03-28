import styled from 'styled-components';

const Wrapper = styled.nav`
  nav {
    background: var(--white);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.7rem 1rem;
  }
  .nav-toggle {
    font-size: 1.5rem;
    color: var(--primary-500);
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    cursor: pointer;
  }
  .nav-toggle:hover {
    color: var(--primary-700);
    transform: rotate(90deg);
  }
  .logo {
    height: 45px;
  }

  .links a {
    color: var(--grey-700);
    font-size: 1rem;
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    display: block;
    padding: 0.5rem 1rem;
    transition: var(--transition);
  }
  .links a:hover {
    background: var(--primary-100);
    color: var(--primary-500);
    padding-left: 1.5rem;
  }

  .links-container {
    overflow: hidden;
    transition: var(--transition);
    margin: 0.5rem 0;
  }

  .social-icons {
    display: none;
  }
  #auth {
    color: var(--primary-500);
    font-size: 1rem;
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    display: block;
    padding: 0 1rem;
    transition: var(--transition);
  }
  .log {
    display: flex;
    place-items: center;
    justify-content: center;
  }
  #auth2 {
    margin: 0 1rem;
  }

  .avatar,
  .toggle2 {
    display: none;
  }
  @media screen and (min-width: 800px) {
    #auth,
    #auth2 {
      display: none;
    }

    .links {
      display: none;
    }

    .nav-center {
      max-width: 1170px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
    }
    .nav-header {
      padding: 0;
    }
    .nav-toggle {
      display: none;
    }
    .links-container {
      height: auto !important;
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
      color: rgb(17, 17, 17);
    }
    .links-container {
      display: none;
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
    }
    .icon {
      cursor: pointer;
    }

    .toggle2 {
      background: white;
      padding: 1.8rem;
      display: none;
      border-radius: 0.5rem;

      position: absolute;
      right: 6rem;
      top: 5.5rem;
    }
    .toggle2 li {
      padding: 0.4rem 0;
      font-size: 1rem;
      cursor: pointer;
    }
  }

  .logo {
    font-size: clamp(1.5rem, 3vw, 3rem);
    color: var(--primary-500);
    font-weight: 700;
    letter-spacing: 2px;
    font-style: italic;
  }
`;

export default Wrapper;
