import { FaArrowLeft } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/DepositLog';
import FooterMobile from '../components/FooterMobile';
import Sidebar from '../components/Sidebar';
import { useEffect, useState } from 'react';
import { mainFetch } from '../utils';
import Navbar2 from '../components/Navbar2';

const DepositLog = () => {
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
  console.log(receipt);
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
  let idd = 0;

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
                  <th>S/N</th>
                  <th>COIN</th>
                  <th>RECEIPT</th>
                  <th>AMOUNT</th>
                  <th>STATUS</th>
                  <th>DATE</th>
                </tr>
              </thead>
              <tbody>
                {receipt
                  ? receipt.map((item) => {
                      const {
                        _id: id,
                        receipt,
                        status,
                        createdAt,
                        amount: {
                          amount: amt,
                          coin: {
                            coinType: coin,
                            invest: { plan: plan },
                          },
                        },
                      } = item;

                      const url = 'https://trex-holding-server.com';

                      const img = `${url}/${receipt}`;

                      item.idd = idd++;

                      return (
                        <tr key={id}>
                          <td>{idd}</td>
                          <td>{coin}</td>
                          <td className="receipt">
                            {' '}
                            <img src={img} alt="image" />
                          </td>
                          <td>{formatter.format(Number(amt).toFixed(2))}</td>
                          <td>{status}</td>
                          <td>
                            {new Date(createdAt).getDate()}/
                            {new Date(createdAt).getMonth() + 1}/
                            {new Date(createdAt).getFullYear()}
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
export default DepositLog;
