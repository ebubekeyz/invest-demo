import logo from '../assets/logo.png';
import { CiMenuFries } from 'react-icons/ci';
import { Link, NavLink, redirect, useNavigate } from 'react-router-dom';
import { mainFetch, navbarData } from '../utils';
import { useState, useRef, useEffect } from 'react';
import Wrapper from '../assets/wrappers/Navbar01';

const Navbar01 = () => {
  const [users, setUsers] = useState('');
  const nav = useNavigate();
  const fetchUser = async () => {
    try {
      const response = await mainFetch.get('/api/v1/users/showMe', {
        withCredentials: true,
      });
      const fullName = response.data.user.fullName;
      if (response.status === 200) {
        setUsers(fullName);
      }
      return { fullName };
    } catch (error) {
      console.log(error);
      console.log(error.response.data.msg);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);
  const [showLinks, setShowLinks] = useState(false);
  const toggleNav = () => {
    setShowLinks(!showLinks);
  };

  const logout = async () => {
    try {
      await mainFetch.get('/api/v1/auth/logout', { withCredentials: true });
      setUsers(false);
      localStorage.removeItem('accBalance');
      nav('/login');
    } catch (error) {
      console.log(error);
    }
  };

  const linkContainerRef = useRef(null);
  const linkRef = useRef(null);

  const styleLinks = {
    height: showLinks
      ? `${linkRef.current.getBoundingClientRect().height}px`
      : '0px',
  };

  return (
    <Wrapper>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <span className="logo">
              <Link to="/">
                <img src={logo} alt="logo" className="logo" />
              </Link>
            </span>
            <button className="nav-toggle" onClick={toggleNav}>
              <CiMenuFries className="toggle-btn" />
            </button>
          </div>

          <div
            className="links-container"
            ref={linkContainerRef}
            style={styleLinks}
          >
            <ul className="links" ref={linkRef}>
              <li>
                <NavLink to="/" className="link-btn">
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/about" className="link-btn">
                  Who we are
                </NavLink>
              </li>

              <li>
                <NavLink to="/investment" className="link-btn">
                  investment
                </NavLink>
              </li>

              <li>
                <NavLink to="/faqs" className="link-btn">
                  faqs
                </NavLink>
              </li>

              {users ? (
                <div className="log">
                  <li className="link-btn" id="auth">
                    {users}
                  </li>
                  <button className="btn" id="auth2" onClick={logout}>
                    Logout
                  </button>
                </div>
              ) : (
                <div className="log">
                  <li>
                    <NavLink to="/login" className="link-btn" id="auth">
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/signUp" className="link-btn" id="auth">
                      Register
                    </NavLink>
                  </li>
                </div>
              )}
            </ul>
          </div>

          <div>
            {users ? (
              <ul className="social-icons">
                <p
                  style={{
                    margin: '0 1rem',
                    fontWeight: 'bold',
                    textTransform: 'capitalize',
                  }}
                >
                  {users}
                </p>
                <button
                  className="btn"
                  onClick={logout}
                  style={{
                    background: 'black',
                    fontWeight: '600',
                    textTransform: 'capitalize',
                    color: 'white',
                  }}
                >
                  Logout
                </button>
              </ul>
            ) : (
              <ul className="social-icons">
                <span>
                  <NavLink
                    to="/login"
                    className="btn mark link-btn"
                    style={{ background: 'var(--primary-500)', color: 'white' }}
                  >
                    Login
                  </NavLink>
                </span>

                <span>
                  <Link
                    to="/signUp"
                    className="btn mark link-btn"
                    style={{
                      background: 'var(--grey-800)',
                      color: 'white',
                    }}
                  >
                    register
                  </Link>
                </span>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};
export default Navbar01;
