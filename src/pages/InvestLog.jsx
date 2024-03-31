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
          <div className="table-wrapper">
            <table class="fl-table">
              <thead>
                <tr>
                  <th>COINS</th>
                  <th>PLAN</th>
                  <th>AMOUNT</th>
                  <th>PAYMENT DATE</th>
                  <th>UPCOMING PAYMENT</th>
                </tr>
              </thead>
              <tbody>
                {receipt
                  ? receipt.map((item) => {
                      const {
                        _id: id,
                        receipt,
                        createdAt,
                        amount: {
                          amount: amt,
                          coin: {
                            coinType: coin,
                            invest: {
                              days: days,
                              percent: percent,
                              plan: plan,
                            },
                          },
                        },
                      } = item;

                      return (
                        <tr key={id}>
                          <td>{coin}</td>
                          <td>{plan}</td>
                          <td>{formatter.format(Number(amt).toFixed(2))}</td>
                          <td>
                            {new Date(createdAt).getDate()}/
                            {new Date(createdAt).getMonth() + 1}/
                            {new Date(createdAt).getFullYear()}
                          </td>
                          <td>
                            {new Date().getDate() + days}/
                            {new Date().getMonth() + 1}/
                            {new Date().getFullYear()}
                          </td>
                        </tr>
                      );
                    })
                  : 'No Log Found'}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <FooterMobile />
    </Wrapper>
  );
};
export default InvestLog;
