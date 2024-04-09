import { FaArrowLeft } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/InvestLog';
import FooterMobile from '../components/FooterMobile';
import { useEffect, useState } from 'react';
import { mainFetch } from '../utils';
import { toast } from 'react-toastify';
import Sidebar from '../components/Sidebar';
import Navbar2 from '../components/Navbar2';
import moment from 'moment';

const InvestLog = () => {
  const [show, setShow] = useState(false);

  const [userId, setUserId] = useState('');

  const fetchUserId = async () => {
    try {
      const response = await mainFetch.get('/api/v1/users/showMe', {
        withCredentials: true,
      });
      const { userId } = response.data.user;

      setUserId(userId);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserId();
  }, []);

  const [accountBalance, setAccountBalance] = useState([]);

  const fetchBalance = async () => {
    try {
      const response = await mainFetch.get(
        `/api/v1/payReceipt/${userId}/showUserPayReceipt`,
        {
          withCredentials: true,
        }
      );

      setAccountBalance(response.data.payReceipt);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBalance();
  }, []);

  const filterBalancePaid = accountBalance.filter(
    (item) => item.status === 'paid'
  );

  const filterBalancePending = accountBalance.filter(
    (item) => item.status === 'pending'
  );

  const filterBalancePaidReduce = filterBalancePaid.reduce((acc, curr) => {
    const {
      amount: { amount: amt },
    } = curr;
    return acc + amt;
  }, 0);

  const [currentDeposit, setCurrentDeposit] = useState({
    amount: '',
    status: '',
    plan: '',
    createdAt: '',
    days: '',
    coin: '',
  });

  const getCurrentDeposit = async () => {
    try {
      const response = await mainFetch.get(
        `/api/v1/payReceipt/${userId}/showUserPayReceipt`,
        { withCredentials: true }
      );
      const currDep = response.data.payReceipt;
      const len = currDep.length - 1;
      const {
        createdAt,
        status,
        amount: {
          amount: amt,
          coin: {
            coinType: coin,
            invest: { percent: percent, days: days, plan: plan },
          },
        },
      } = currDep[len];
      setCurrentDeposit({
        coin: coin,
        amount: amt,
        status: status,
        plan: plan,
        days: days,
        createdAt: createdAt,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCurrentDeposit();
  }, []);

  console.log(currentDeposit.amount);

  const backHandler = () => {
    window.history.back();
  };

  const formatter = new Intl.NumberFormat('en-DE', {
    style: 'currency',
    currency: 'EUR',
  });

  const [amount, setAmount] = useState({
    id: '',
    update: '',
  });
  const fetchAmountMain = async () => {
    try {
      const response = await mainFetch.get(
        `/api/v1/amount/${userId}/showUserAmount`,
        {
          withCredentials: true,
        }
      );
      const am = response.data.amount;
      const len = am.length - 1;
      const { amount, _id, updatedAt } = am[len];
      setAmount({
        id: _id,
        update: updatedAt,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAmountMain();
  }, [fetchAmountMain]);

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
            <table className="fl-table">
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
                {currentDeposit.status === 'paid' ? (
                  <tr>
                    <td>{currentDeposit.coin}</td>
                    <td>{currentDeposit.plan}</td>
                    <td>
                      {formatter.format(
                        Number(filterBalancePaidReduce).toFixed(2)
                      )}
                    </td>
                    <td>{moment(amount.update).calendar()}</td>
                    <td>
                      {moment(amount.update)
                        .add(currentDeposit.days, 'days')
                        .calendar()}
                    </td>
                  </tr>
                ) : (
                  'No deposit'
                )}
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
