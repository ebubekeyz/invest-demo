import Wrapper from '../assets/wrappers/Sidebar';
import { GoHome } from 'react-icons/go';
import { IoIosFlash } from 'react-icons/io';
import { IoFolderOpenOutline } from 'react-icons/io5';
import { FaFileAlt, FaUser } from 'react-icons/fa';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { IoIosLogOut } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { GoBriefcase } from 'react-icons/go';
import { RiMoneyDollarBoxLine } from 'react-icons/ri';
import { useEffect, useState } from 'react';

import { CiSettings } from 'react-icons/ci';
import { mainFetch } from '../utils';

const Sidebar2 = () => {
  const [show, setShow] = useState(false);

  const showFunc = () => {
    setShow(!show);
  };
  const [show2, setShow2] = useState(false);

  const showFunc2 = () => {
    setShow2(!show2);
  };
  const [show3, setShow3] = useState(false);

  const showFunc3 = () => {
    setShow3(!show3);
  };

  const logout = async () => {
    try {
      await mainFetch.get('/api/v1/auth/logout', { withCredentials: true });
      localStorage.removeItem('accBalance');
      nav('/login');
    } catch (error) {
      console.log(error);
    }
  };

  const [plan, setPlan] = useState([]);
  const [status, setStatus] = useState([]);
  const planFunc = async () => {
    try {
      const response = await mainFetch.get(
        '/api/v1/payReceipt/showUserPayReceipt',
        {
          withCredentials: true,
        }
      );
      const planMain = response.data.payReceipt;
      const num = planMain.length - 1;
      const {
        status,
        amount: {
          coin: {
            invest: { plan: plan },
          },
        },
      } = planMain[num];
      setPlan(plan);
      setStatus(status);
    } catch (error) {
      console.log(error);
      console.log(error.response.data.msg);
    }
  };

  useEffect(() => {
    planFunc();
  }, [planFunc]);

  return (
    <Wrapper>
      <div className="sidebar">
        <aside id="dash">
          <article className="home">
            <GoHome className="icon" />
            <Link to="/adminDash" className="tog-text">
              Admin Dashboard
            </Link>
          </article>
        </aside>

        <aside id="dash2">
          <article className="home">
            <div className="tog">
              <span>
                <FaUser className="icon" />
              </span>
              <Link to="/members" className="tog-text">
                Members
              </Link>
            </div>
          </article>
        </aside>

        <aside id="dash2">
          <article className="home">
            <div className="tog">
              <span>
                <GoBriefcase className="icon" />
              </span>
              <Link to="/adminDeposit" className="tog-text">
                Pending Deposit
              </Link>
            </div>
          </article>
        </aside>

        <aside id="dash2">
          <article className="home">
            <div className="tog">
              <span>
                <RiMoneyDollarBoxLine className="icon" />
              </span>
              <Link to="/adminWithdraw" className="tog-text">
                Withdrawal Request
              </Link>
            </div>
          </article>
        </aside>

        <aside id="dash2">
          <article className="home">
            <div className="tog">
              <span>
                <RiMoneyDollarBoxLine className="icon" />
              </span>
              <Link to="/walletAddress" className="tog-text">
                Change Wallet Address
              </Link>
            </div>
          </article>
        </aside>

        {/* <aside id="dash2">
          <article className="home">
            <div className="tog">
              <span>
                <FaFileAlt className="icon" />
              </span>
              <span className="tog-text">Referral Log</span>
            </div>
          </article>
        </aside> */}

        <aside id="dash2">
          <article className="home">
            <div className="tog">
              <span>
                <IoIosLogOut className="icon" />
              </span>
              <span onClick={logout} className="tog-text">
                Logout
              </span>
            </div>
          </article>
        </aside>

        <Link to="/investDash" type="button" className="btn">
          <p>Your Current Plan - {status === 'paid' ? plan : 'N/A'}</p>
          <p>Update Plan</p>
        </Link>
      </div>
      ;
    </Wrapper>
  );
};
export default Sidebar2;
