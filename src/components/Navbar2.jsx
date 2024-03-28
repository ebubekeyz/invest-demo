import logo from '../assets/logo2.png';
import { CiMenuFries } from 'react-icons/ci';
import { Link, NavLink, redirect, useNavigate } from 'react-router-dom';
import { mainFetch, navbarData } from '../utils';
import { useState, useRef, useEffect } from 'react';
import Wrapper from '../assets/wrappers/Navbar2';
import { IoMdArrowDropdown } from 'react-icons/io';
import { RxAvatar } from 'react-icons/rx';
import Cookies from 'js-cookie';

const Navbar2 = () => {
  const [users, setUsers] = useState(false);
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

  const [show, setShow] = useState(false);

  const showNavToggle = () => {
    setShow(!show);
  };

  const logout = async () => {
    try {
      await mainFetch.get('/api/v1/auth/logout', { withCredentials: true });
      nav('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <div className="nav-cont">
        <article className="logo2">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
        </article>

        <article className="avatar">
          <RxAvatar className="icon icon2" />
          <p>{users}</p>
          <IoMdArrowDropdown onClick={showNavToggle} className="icon" />
        </article>
      </div>

      <ul className="toggle2" style={{ display: show && 'block' }}>
        <li>
          <Link to="/settings" style={{ color: 'white' }}>
            Settings
          </Link>
        </li>
        <li onClick={logout}>Logout</li>
      </ul>
    </Wrapper>
  );
};
export default Navbar2;
