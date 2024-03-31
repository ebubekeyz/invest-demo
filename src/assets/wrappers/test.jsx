import { FaArrowLeft } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/InvestLog';
import FooterMobile from '../components/FooterMobile';
import { useEffect, useState } from 'react';
import { mainFetch } from '../utils';
import { toast } from 'react-toastify';
import Sidebar from '../components/Sidebar';
import Navbar2 from '../components/Navbar2';

const InvestLog = () => {
  const [receipt, setReceipt] = useState([]);
  const [show, setShow] = useState(false);

  const showAmountId = async () => {
    try {
      const res = await mainFetch.get('/api/v1/payReceipt/showUserPayReceipt', {
        withCredentials: true,
      });
      setShow(true);
      const payMajor = res.data.payReceipt;
      setReceipt(payMajor);
    } catch (error) {
      console.log(error);
      console.log(error.res.data.msg);
    }
  };

  useEffect(() => {
    showAmountId();
  }, [showAmountId]);

  const backHandler = () => {
    window.history.back();
  };

  const formatter = new Intl.NumberFormat('en-DE', {
    style: 'currency',
    currency: 'EUR',
  });

  const [date, setDate] = useState({
    day: '',
    month: '',
    year: '',
  });
  return (
    <Wrapper>
      <Navbar2 />
      <div className="container">
        <Sidebar />
        <section className="section-center">
          <article className="top2 top">
            <h4>Investment log</h4>

            <div className="top-inner">
              <span className="space">
                {' '}
                <FaArrowLeft className="back-icon" onClick={backHandler} />
              </span>
              <span className="back">Back</span>
            </div>
          </article>

          <article className="withdraw-pending">
            <div className="pending">
              <h4>Investment log</h4>
              <p></p>
            </div>

            {receipt ? (
              <div>
                <article className="header">
                  <h4>COINS</h4>

                  <h4>PLAN</h4>
                  <h4>AMOUNT</h4>
                  <h4>PAYMENT DATE</h4>
                  <h4>UPCOMING PAYMENT</h4>
                </article>

                {receipt.map((item) => {
                  const {
                    _id: id,
                    receipt,
                    createdAt,
                    amount: {
                      amount: amt,
                      coin: {
                        coinType: coin,
                        invest: { days: days, percent: percent, plan: plan },
                      },
                    },
                  } = item;

                  return (
                    <article key={id} className="header">
                      <h4>{coin}</h4>

                      <h4>{plan}</h4>
                      <h4>{formatter.format(Number(amt).toFixed(2))}</h4>

                      <h4>
                        {new Date(createdAt).getDate()}/
                        {new Date(createdAt).getMonth() + 1}/
                        {new Date(createdAt).getFullYear()}
                      </h4>
                      <h4>
                        {new Date().getDate() + days}/
                        {new Date().getMonth() + 1}/{new Date().getFullYear()}
                      </h4>
                    </article>
                  );
                })}
              </div>
            ) : (
              <h3 className="empty">No Log Found</h3>
            )}
          </article>
        </section>
      </div>

      <FooterMobile />
    </Wrapper>
  );
};
export default InvestLog;
