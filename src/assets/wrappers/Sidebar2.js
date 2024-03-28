import styled from 'styled-components';

const Wrapper = styled.div`
  .sidebar {
    display: none;
  }
  @media screen and (min-width: 800px) {
    .sidebar {
      display: block;
      background: rgb(31, 29, 29);
    }

    .tog-text {
      transition: var(--transition);
    }
    .tog-text:hover {
      color: yellow;
    }
    .tog,
    .home {
      display: flex;
      align-self: center;
    }
    .btn p {
      color: white;
    }
    .btn {
      width: 80%;
      margin: 1rem;
      padding: 1rem;
    }
    #ico1 {
      margin-left: 7rem;
    }
    #ico2 {
      margin-left: 7.6rem;
    }
    #ico3 {
      margin-left: 8.5rem;
    }
    .home {
      padding: 1rem 0;
    }
    #dash {
      background: linear-gradient(
        to right,
        rgba(69, 179, 54, 0.7),
        rgba(29, 201, 143, 0.7)
      );
      padding: 0rem 1rem;
      margin-top: 1rem;
      width: 100%;
    }
    #dash2 {
      padding: 0rem 1rem;
      width: 100%;
      padding-bottom: 1rem;
      cursor: pointer;
    }
    .ico {
      color: white;
      font-size: 1.2rem;
      text-align: right;
      cursor: pointer;
    }
    .icon {
      color: white;
      font-size: 1rem;
    }
    .tog-text {
      color: white;
      margin-left: 1rem;

      cursor: pointer;
    }
    .tog-text2 {
    }
  }
`;
export default Wrapper;
