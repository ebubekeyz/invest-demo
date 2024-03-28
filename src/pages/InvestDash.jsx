import Wrapper from '../assets/wrappers/InvestDash';
import FooterMobile from '../components/FooterMobile';
import InvestCard2 from '../components/InvestCard2';
import Navbar2 from '../components/Navbar2';

import Sidebar from '../components/Sidebar';

const InvestDash = () => {
  return (
    <Wrapper>
      <Navbar2 />
      <div className="container">
        <Sidebar />
        <section className="investDash">
          <InvestCard2 />
        </section>
      </div>

      <FooterMobile />
    </Wrapper>
  );
};
export default InvestDash;
