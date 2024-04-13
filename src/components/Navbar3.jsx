import logo from '../assets/logo.png';
import { CiMenuFries } from 'react-icons/ci';
import { Link, NavLink, redirect, useNavigate } from 'react-router-dom';
import { mainFetch, navbarData } from '../utils';
import { useState, useRef, useEffect } from 'react';
import Wrapper from '../assets/wrappers/Navbar3';
import { RxAvatar } from 'react-icons/rx';
import { IoMdArrowDropdown } from 'react-icons/io';

const Navbar3 = () => {
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

  const [showLinks2, setShowLinks2] = useState(false);
  const toggleNav2 = () => {
    setShowLinks(!showLinks);
  };

  const [show2, setShow2] = useState(false);

  const showNavToggle = () => {
    setShow2(!show2);
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
                <NavLink to="/adminDash" className="link-btn">
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/members" className="link-btn">
                  Members
                </NavLink>
              </li>

              <li>
                <NavLink to="/adminWithdraw" className="link-btn">
                  Withdrawal Request
                </NavLink>
              </li>

              {/* <li>
                <NavLink to="/adminDash" className="link-btn">
                  Transactions
                </NavLink>
              </li> */}

              <li>
                <NavLink to="/adminDeposit" className="link-btn">
                  Pending Deposit
                </NavLink>
              </li>

              <li>
                <NavLink to="/walletAddress" className="link-btn">
                  Change Wallet Address
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

          <article className="avatar">
            <RxAvatar className="icon icon2" />
            <p>{users}</p>
            <IoMdArrowDropdown onClick={showNavToggle} className="icon" />
          </article>
        </div>
      </nav>

      <ul className="toggle2" style={{ display: show2 && 'block' }}>
        <li>
          <Link to="/adminSettings">Settings</Link>
        </li>
        <li onClick={logout}>Logout</li>
      </ul>
    </Wrapper>
  );
};
export default Navbar3;
