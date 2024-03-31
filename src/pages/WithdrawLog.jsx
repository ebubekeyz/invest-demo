import { useEffect, useState } from 'react';
import Wrapper from '../assets/wrappers/WithdrawLog';
import FooterMobile from '../components/FooterMobile';
import Navbar2 from '../components/Navbar2';
import Sidebar from '../components/Sidebar';
import { mainFetch } from '../utils';
import { FaArrowLeft } from 'react-icons/fa';

const WithdrawLog = () => {
  //new

  const [receipt, setReceipt] = useState([]);
  const [show, setShow] = useState(false);

  const showAmountId = async () => {
    try {
      const res = await mainFetch.get('/api/v1/withdraw/showUserWithdraw', {
        withCredentials: true,
      });
      setShow(true);
      const payMajor = res.data.withdraw;
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
                  <th>METHOD</th>
                  <th>AMOUNT</th>
                  <th>WALLET ADDRESS</th>
                  <th>WITHDRAWAL BATCH</th>
                  <th>STATUS</th>
                  <th>DATE</th>
                </tr>
              </thead>
              <tbody>
                {receipt
                  ? receipt.map((item) => {
                      const {
                        _id: id,
                        withdrawalMethod,
                        amount,
                        walletAddress,
                        withdrawalCode,
                        status,
                        createdAt,
                      } = item;

                      item.idd = idd++;

                      return (
                        <tr key={id}>
                          <td>{idd}</td>
                          <td>{withdrawalMethod}</td>
                          <td>{formatter.format(Number(amount).toFixed(2))}</td>
                          <td>{walletAddress}</td>
                          <td>{withdrawalCode}</td>
                          <td>€{status}</td>
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
export default WithdrawLog;
