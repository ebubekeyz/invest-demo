import { useState, useEffect } from 'react';
import Wrapper from '../assets/wrappers/AdminDash';
import FooterMobile from '../components/FooterMobile';
import Navbar2 from '../components/Navbar2';
import Sidebar2 from '../components/Sidebar2';
import { mainFetch } from '../utils';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Navbar3 from '../components/Navbar3';

const AdminDash = () => {
  const [pay, setPay] = useState([]);

  const payFunc = async () => {
    try {
      const res = await mainFetch.get('/api/v1/payReceipt', {
        withCredentials: true,
      });
      setPay(res.data.payReceipt);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    payFunc();
  }, []);

  const filterPay = pay.filter((item) => item.status === 'paid');

  const reduceDeposit = filterPay.reduce((acc, curr) => {
    const {
      amount: { amount: amt },
    } = curr;
    return acc + amt;
  }, 0);

  const dupFilterPay = [...new Set(filterPay)];

  const filterPayPend = pay.filter((item) => item.status === 'pending');

  const dupFilterPay2 = [...new Set(filterPayPend)];

  const [members, setMembers] = useState([]);

  const membersFunc = async () => {
    try {
      const res = await mainFetch.get('/api/v1/users', {
        withCredentials: true,
      });
      setMembers(res.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    membersFunc();
  }, []);

  const filterMembers = members.filter((item) => item.status === 'verified');
  const filterUnverifiedMembers = members.filter(
    (item) => item.status === 'unverified'
  );

  const remDupMem = [...new Set(filterMembers)];
  const remDupMem2 = [...new Set(filterUnverifiedMembers)];

  const [withdraw, setWithdraw] = useState([]);

  const withdrawFunc = async () => {
    try {
      const res = await mainFetch.get('/api/v1/withdraw', {
        withCredentials: true,
      });
      setWithdraw(res.data.withdraw);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    withdrawFunc();
  }, []);

  const filterWithdraw1 = withdraw.filter((item) => item.status === 'sent');
  const filterWithdraw2 = withdraw.filter(
    (item) => item.status === 'processing'
  );

  const reduceWithdraw1 = filterWithdraw1.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  const reduceWithdraw2 = filterWithdraw2.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  const formatter = new Intl.NumberFormat('en-DE', {
    style: 'currency',
    currency: 'EUR',
  });

  // const [profit, setProfit] = useState([]);
  // const getProfit = async () => {
  //   try {
  //     const response = await mainFetch('api/v1/profit', {
  //       withCredentials: true,
  //     });
  //     setProfit(response.data.profit);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getProfit();
  // }, []);

  // const reduceProfit = profit.reduce((acc, curr) => {
  //   return acc + curr.amount;
  // }, 0);

  // const [earning, setEarning] = useState([]);
  // const getEarning = async () => {
  //   try {
  //     const response = await mainFetch('api/v1/earning', {
  //       withCredentials: true,
  //     });
  //     setEarning(response.data.earning);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getEarning();
  // }, []);
  const [user, setUser] = useState([]);

  const showUserRef = async () => {
    try {
      const response = await mainFetch.get('/api/v1/users', {
        withCredentials: true,
      });

      setUser(response.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    showUserRef();
  }, [showUserRef]);

  const reduceFilterUserBalance = user.reduce((acc, curr) => {
    return acc + curr.balance;
  }, 0);

  //admin

  const totalEarning = reduceFilterUserBalance;

  const [balance, setBalance] = useState([]);

  const getBalance = async () => {
    try {
      const response = await mainFetch.get('/api/v1/balance', {
        withCredentials: true,
      });
      setBalance(response.data.balance);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBalance();
  }, []);

  // const reduceBalance = balance.reduce((acc, curr) => {
  //   const balArr = [...curr.balance];
  //   const newBal = [...new Set(balArr)];
  //   return acc + newBal;
  // }, 0);
  // console.log(reduceBalance);
  return (
    <Wrapper>
      <Navbar3 />

      <div className="container">
        <Sidebar2 />
        <section className="admin">
          <h4>Information</h4>

          <div className="members">
            <h5>Members</h5>
            <p>
              Total: <span>{members.length}</span>
            </p>
            <p>
              Active: <span>{remDupMem.length}</span>
            </p>
            <p>
              Inactive: <span>{remDupMem2.length}</span>
            </p>
            <p>
              Made Deposit: <span>{remDupMem.length}</span>
            </p>
            <p>
              Not Made Deposit: <span>{remDupMem2.length}</span>
            </p>
          </div>

          {/* <div className="members">
            <h5>Investment Packages</h5>
            <p>
              Active: <span>{dupFilterPay.length}</span>
            </p>
            <p>
              Inactive: <span>{dupFilterPay2.length}</span>
            </p>
          </div> */}

          <div className="members" id="total">
            <h5>Total System Earnings:</h5>
            <p>
              <span>{formatter.format(Number(totalEarning))}</span>
            </p>
          </div>

          {/* <div className="members" id="total">
            <h5>Total Members Balance:</h5>
            <p>
              <span>{formatter.format(Number(reduceBalance))}</span>
            </p>
          </div> */}

          <div className="members" id="total">
            <h5>Total Members Deposit:</h5>
            <p>
              <span>{formatter.format(Number(reduceDeposit))}</span>
            </p>
          </div>
          {/* <div className="members" id="total">
            <h5>Total Referral Commission:</h5>
            <p>
              €<span>20</span>
            </p>
          </div> */}
          <div className="withdraw members" id="total">
            <h5>Total Withdrawals:</h5>
            <p>
              <span>
                {formatter.format(Number(reduceWithdraw1).toFixed(2))}
              </span>
            </p>
          </div>
          <div className="members" id="total">
            <h5>Pending Withdrawals:</h5>
            <p>
              <span>
                {formatter.format(Number(reduceWithdraw2).toFixed(2))}
              </span>
            </p>
          </div>
        </section>
      </div>
    </Wrapper>
  );
};
export default AdminDash;
