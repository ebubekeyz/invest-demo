import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/AboutPage';

const Know = () => {
  return (
    <Wrapper>
      <div>
        <article className="cont">
          <h2>Investment doesn't have to be hard</h2>
          <p>
            The easiest way to invest in the growth of Bitcoin & the Crypto
            Currency Sector
          </p>
          <Link to="/login" className="btn">
            Lets Get Started
          </Link>
        </article>
      </div>
    </Wrapper>
  );
};
export default Know;
