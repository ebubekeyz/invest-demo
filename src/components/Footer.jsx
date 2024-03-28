import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Footer';
import { useState } from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  const [date, setIsDate] = useState(new Date());

  const mainDate = date.getFullYear();

  return (
    <Wrapper>
      <section>
        <div className="footer">
          <article className="logo-text">
            <Link to="/">
              <img src={logo} alt="logo" className="logo2" />
            </Link>
            <p style={{ color: 'red' }}>
              We offer distinctive opportunities for you. Your success is our
              success, and we strive for maximum satisfaction for all our
              clients.
            </p>
          </article>

          <article>
            <h2 className="logo">Quicklinks</h2>
            <div className="q-nav">
              <aside>
                <p style={{ paddingBottom: '0', color: 'var(--grey-500)' }}>
                  <Link to="/investment" style={{ color: 'var(--grey-500)' }}>
                    Investment
                  </Link>
                </p>

                <p>
                  <Link to="/privacy" style={{ color: 'var(--grey-500)' }}>
                    Privacy
                  </Link>
                </p>

                <p>
                  <Link to="/referral" style={{ color: 'var(--grey-500)' }}>
                    Referral program
                  </Link>
                </p>

                <p>
                  <Link to="/login" style={{ color: 'var(--grey-500)' }}>
                    Login
                  </Link>
                </p>

                <p>
                  <Link to="/register" style={{ color: 'var(--grey-500)' }}>
                    Register
                  </Link>
                </p>
              </aside>

              <aside>
                <p>
                  <Link to="/about" style={{ color: 'var(--grey-500)' }}>
                    About
                  </Link>
                </p>

                <p>
                  <Link to="/faqs" style={{ color: 'var(--grey-500)' }}>
                    Faqs
                  </Link>
                </p>

                <p>
                  <Link to="/terms" style={{ color: 'var(--grey-500)' }}>
                    Terms and conditions
                  </Link>
                </p>

                <p>
                  <Link to="/contact" style={{ color: 'var(--grey-500)' }}>
                    Contact
                  </Link>
                </p>
              </aside>
            </div>
          </article>

          <article>
            <span className="logo">
              <img
                src="/logo1.png"
                alt="logo1"
                style={{ width: '250px', marginBottom: '1rem' }}
              />
            </span>
            <p style={{ marginBottom: '1rem' }}>
              101 Collins St L 21, Melbourne, Victoria, 3000, Australia.
            </p>
          </article>
        </div>

        <p
          style={{
            textAlign: 'center',
            paddingBottom: '2rem',
            color: 'var(--grey-400)',
          }}
        >
          @Copyright <span>{mainDate}</span> trexholding.com
        </p>
      </section>
    </Wrapper>
  );
};
export default Footer;
