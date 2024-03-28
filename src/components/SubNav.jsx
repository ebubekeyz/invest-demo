import Wrapper from '../assets/wrappers/SubNav';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaAddressCard } from 'react-icons/fa6';

const SubNav = () => {
  return (
    <Wrapper>
      <div className="subNav">
        <div className="sub1">
          <FaPhoneAlt className="phone" />
          <span>355 forest london england E17 5JR</span>
        </div>

        <div>
          <MdEmail className="mail" />
          <span>support@fxidealtrade.co</span>
        </div>
      </div>
    </Wrapper>
  );
};
export default SubNav;
