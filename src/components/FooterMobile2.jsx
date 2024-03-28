import { GoHome } from 'react-icons/go';
import { IoFolderOpenOutline } from 'react-icons/io5';
import { CiSettings } from 'react-icons/ci';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { LiaCommentDollarSolid } from 'react-icons/lia';
import Wrapper from '../assets/wrappers/FooterMobile2';
import { Link } from 'react-router-dom';

const FooterMobile2 = () => {
  return (
    <Wrapper>
      <section className="footer">
        <article className="footer-container">
          <div className="footer-content">
            <Link to="" className="home-icon-main">
              {' '}
              <IoFolderOpenOutline className="icon" />
            </Link>
            <Link to="/adminDeposit" className="link-text">
              Deposit
            </Link>
          </div>
        </article>
        <article className="footer-container">
          <div className="footer-content">
            <Link to="/investLog" className="home-icon-main">
              {' '}
              <FaRegMoneyBillAlt className="icon" />
            </Link>
            <Link to="/messages" className="link-text">
              Messages
            </Link>
          </div>
        </article>
        <article className="footer-container">
          <div className="footer-content">
            <Link className="home-icon-main">
              <GoHome className="home home-icon" />
            </Link>
            <Link to="/adminDash" className="link-text home-text">
              Home
            </Link>
          </div>
        </article>
        <article className="footer-container">
          <div className="footer-content">
            <Link to="" className="home-icon-main">
              <LiaCommentDollarSolid className="icon" />
            </Link>
            <Link to="/adminWithdraw" className="link-text">
              Withdraw
            </Link>
          </div>
        </article>
        <article className="footer-container">
          <div className="footer-content">
            <Link to="/adminSettings" className="home-icon-main">
              {' '}
              <CiSettings className="icon" />
            </Link>
            <Link to="/adminSettings" className="link-text">
              Settings
            </Link>
          </div>
        </article>
      </section>
    </Wrapper>
  );
};
export default FooterMobile2;
