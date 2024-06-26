import { useState, useEffect } from 'react';
import Wrapper from '../assets/wrappers/UserDash';
import FooterMobile from '../components/FooterMobile';
import Navbar2 from '../components/Navbar2';
import Sidebar2 from '../components/Sidebar2';
import { mainFetch } from '../utils';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Navbar3 from '../components/Navbar3';
import MembersNavbar from '../components/MembersNavbar';
import { IoPower } from 'react-icons/io5';
import moment from 'moment';

const UserDash = () => {
  const [user, setUser] = useState([]);
  const params = window.location.search;
  const id = new URLSearchParams(params).get('id');

  const userFunc = async () => {
    try {
      const response = await mainFetch.get(`/api/v1/users/${id}`, {
        withCredentials: true,
      });

      setUser(response.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userFunc();
  }, []);

  const {
    fullName,
    username,
    phone,
    country,
    city,
    state,
    coins,
    email,
    walletAddress,
    createdAt,
    status,
    _id: idd,
  } = user;

  const newDate = createdAt;
  const date = new Date(createdAt);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const [pay, setPay] = useState([]);
  const payFunc = async () => {
    try {
      const response = await mainFetch.get(
        `/api/v1/withdraw${id}showUserWithdraw`,
        {
          withCredentials: true,
        }
      );

      setPay(response.data.withdraw);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    payFunc();
  }, []);

  const filterPaySent = pay.filter((item) => item.status === 'sent');

  const filterPayProcessing = pay.filter(
    (item) => item.status === 'processing'
  );

  const reduceFilter = filterPaySent.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);
  const reduceFilter2 = filterPayProcessing.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  // profit
  const [profit, setProfit] = useState([]);

  const fetchProfit = async () => {
    try {
      const response = await mainFetch.get(
        `/api/v1/profit/${id}/showUserProfit`,
        { withCredentials: true }
      );
      const getProf = response.data.profit;
      const len = getProf.length - 1;
      const { amount } = getProf[len];
      setProfit(amount);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProfit();
  }, []);

  // const reduceProfit = profit.reduce((acc, curr) => {
  //   return acc + curr.amount;
  // }, 0);

  // end profit

  // earn
  //comment

  const [earning, setEarning] = useState([]);

  const fetchEarning = async () => {
    try {
      const response = await mainFetch.get(
        `/api/v1/earning/${id}/showUserEarning`,
        {
          withCredentials: true,
        }
      );
      setEarning(response.data.earning);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEarning();
  }, []);

  const filterEarning = earning.filter((item) => item.userIdNumber === id);

  const reduceEarning = filterEarning.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  const totalEarnings = reduceEarning;
  // end earning

  const [balance, setBalance] = useState('');
  // const [balanceId, setBalanceId] = useState('');

  const fetchBalance = async () => {
    try {
      const response = await mainFetch.get(
        `/api/v1/payReceipt/${id}/showUserPayReceipt`,
        {
          withCredentials: true,
        }
      );
      const pay = response.data.payReceipt;
      const len = pay.length - 1;
      const { balance } = pay[len];
      setBalance(balance);
      // setBalanceId(id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBalance();
  }, [fetchBalance]);

  const formatter = new Intl.NumberFormat('en-DE', {
    style: 'currency',
    currency: 'EUR',
  });

  // form
  const [isLoad1, setIsLoad1] = useState('update');
  const [isLoad2, setIsLoad2] = useState('change password');
  const [isLoad3, setIsLoad3] = useState('update');
  const [isLoad4, setIsLoad4] = useState('update');
  // const [isLoad5, setIsLoad5] = useState('add referral bonus');
  const [isLoad6, setIsLoad6] = useState('add penalty');

  const [penalty, setPenalty] = useState({
    amount: '',
  });

  const [updateBal, setUpdateBal] = useState({
    balance: '',
  });
  const [updateBonus, setUpdateBonus] = useState({
    amount: '',
  });

  const [update, setUpdate] = useState({
    fullName: '',
    username: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    state: '',
    coins,
    walletAddress,
    status: 'verified',
  });
  const [pass, setPass] = useState({
    newPassword: '',
    password: '',
  });

  const handleSubmit1 = async (e) => {
    e.preventDefault();

    try {
      setIsLoad1('updating...');
      const response = await mainFetch.patch(
        `/api/v1/users/${id}`,
        {
          fullName: update.fullName,
        },
        {
          withCredentials: true,
        }
      );
      toast.success('Update Successful');
      setUpdate({
        fullName: '',
      });
      setIsLoad1('update complete');
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };

  const handleSubmitUsername = async (e) => {
    e.preventDefault();

    try {
      setIsLoad1('updating...');
      const response = await mainFetch.patch(
        `/api/v1/users/${id}`,
        {
          username: update.username,
        },
        {
          withCredentials: true,
        }
      );
      toast.success('Update Successful');
      setUpdate({
        username: '',
      });
      setIsLoad1('update complete');
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };

  const handleSubmitEmail = async (e) => {
    e.preventDefault();

    try {
      setIsLoad1('updating...');
      const response = await mainFetch.patch(
        `/api/v1/users/${id}`,
        {
          email: update.email,
        },
        {
          withCredentials: true,
        }
      );
      toast.success('Update Successful');
      setUpdate({
        email: '',
      });
      setIsLoad1('update complete');
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };

  const handleSubmitPhone = async (e) => {
    e.preventDefault();

    try {
      setIsLoad1('updating...');
      const response = await mainFetch.patch(
        `/api/v1/users/${id}`,
        {
          phone: update.phone,
        },
        {
          withCredentials: true,
        }
      );
      toast.success('Update Successful');
      setUpdate({
        phone: '',
      });
      setIsLoad1('update complete');
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };

  const handleSubmitCoins = async (e) => {
    e.preventDefault();

    try {
      setIsLoad1('updating...');
      const response = await mainFetch.patch(
        `/api/v1/users/${id}`,
        {
          coins: update.coins,
        },
        {
          withCredentials: true,
        }
      );
      toast.success('Update Successful');
      setUpdate({
        coins: '',
      });
      setIsLoad1('update complete');
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };

  const handleSubmitWallet = async (e) => {
    e.preventDefault();

    try {
      setIsLoad1('updating...');
      const response = await mainFetch.patch(
        `/api/v1/users/${id}`,
        {
          walletAddress: update.walletAddress,
        },
        {
          withCredentials: true,
        }
      );
      toast.success('Update Successful');
      setUpdate({
        walletAddress: '',
      });
      setIsLoad1('update complete');
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };

  const handleSubmitStatus = async (e) => {
    e.preventDefault();

    try {
      setIsLoad1('updating...');
      const response = await mainFetch.patch(
        `/api/v1/users/${id}`,
        {
          status: update.status,
        },
        {
          withCredentials: true,
        }
      );
      toast.success('Update Successful');
      setUpdate({
        status: '',
      });
      setIsLoad1('update complete');
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };

  const handleSubmitCity = async (e) => {
    e.preventDefault();

    try {
      setIsLoad1('updating...');
      const response = await mainFetch.patch(
        `/api/v1/users/${id}`,
        {
          city: update.city,
        },
        {
          withCredentials: true,
        }
      );
      toast.success('Update Successful');
      setUpdate({
        city: '',
      });
      setIsLoad1('update complete');
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };

  const handleSubmitState = async (e) => {
    e.preventDefault();

    try {
      setIsLoad1('updating...');
      const response = await mainFetch.patch(
        `/api/v1/users/${id}`,
        {
          state: update.state,
        },
        {
          withCredentials: true,
        }
      );
      toast.success('Update Successful');
      setUpdate({
        state: '',
      });
      setIsLoad1('update complete');
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };

  const handleSubmitCountry = async (e) => {
    e.preventDefault();

    try {
      setIsLoad1('updating...');
      const response = await mainFetch.patch(
        `/api/v1/users/${id}`,
        {
          country: update.country,
        },
        {
          withCredentials: true,
        }
      );
      toast.success('Update Successful');
      setUpdate({
        country: '',
      });
      setIsLoad1('update complete');
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };
  const handleSubmit2 = async (e) => {
    e.preventDefault();
    try {
      setIsLoad2('changing...');
      const response = await mainFetch.patch(
        `/api/v1/auth/${id}`,
        {
          newPassword: pass.newPassword,
          password: pass.password,
        },
        {
          withCredentials: true,
        }
      );

      toast.success('Password Changed');
      setPass({
        newPassword: '',
        password: '',
      });

      setIsLoad2('password changed');
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };

  const handleSubmit3 = async (e) => {
    e.preventDefault();
    try {
      // setIsLoad3('updating...');
      // const response = await mainFetch.patch(
      //   `/api/v1/balance/${balanceId}`,
      //   {
      //     balance: updateBal.balance,
      //   },
      //   {
      //     withCredentials: true,
      //   }
      // );

      // toast.success('Balance Updated');
      // setUpdateBal({
      //   balance: '',
      // });

      setIsLoad3('Balance Updated');
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };

  const [bonusId, setBonusId] = useState('');
  const [bonusAmt, setBonusAmt] = useState('');

  const fetchBonus = async () => {
    try {
      const response = await mainFetch.get(
        `/api/v1/earning/${id}/showUserEarning`,
        { withCredentials: true }
      );
      const earn = response.data.earning;
      const len = earn.length - 1;
      const { _id, amount } = earn[len];
      setBonusId(_id);
      setBonusAmt(amount);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBonus();
  }, []);

  const handleSubmit4 = async (e) => {
    e.preventDefault();
    try {
      setIsLoad4('updating...');
      const response = await mainFetch.post(
        `/api/v1/earning`,
        {
          amount: updateBonus.amount,
          userIdNumber: id,
        },
        {
          withCredentials: true,
        }
      );

      toast.success('Bonus Updated');
      setUpdateBonus({
        balance: '',
      });

      setIsLoad4('Bonus Updated');
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };

  // penalty
  const [penaltyId, setPenaltyId] = useState('');
  const [penaltyAmt, setPenaltyAmt] = useState('');
  const [penalty2, setPenalty2] = useState([]);

  const fetchPenalty = async () => {
    try {
      const response = await mainFetch.get(
        `/api/v1/penalty/${id}/showUserPenalty`,
        { withCredentials: true }
      );

      const { _id, amount } = response.data.penalty;
      setPenalty2(response.data.penalty);
      setPenaltyId(_id);
      setPenaltyAmt(amount);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPenalty();
  }, []);

  const filterPenalty = penalty2.filter((item) => item.userIdNumber === id);
  const reducePenalty = filterPenalty.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);
  console.log(reducePenalty);
  const handleSubmit6 = async (e) => {
    e.preventDefault();
    try {
      setIsLoad6('adding penalty...');
      const response = await mainFetch.post(
        `/api/v1/penalty`,
        {
          amount: penalty.amount,
          userIdNumber: id,
        },
        {
          withCredentials: true,
        }
      );

      toast.success('Penalty Added');
      setPenalty({
        amount: '',
      });

      setIsLoad6('Penalty Added');
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };
  // end penalty

  const [allUsers, setAllUsers] = useState([]);

  const fetchAllUsers = async () => {
    try {
      const response = await mainFetch.get('/api/v1/users', {
        withCredentials: true,
      });
      setAllUsers(response.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const filterUsers = allUsers.filter((item) => item.referralId === username);

  const referralNumber = filterUsers.length;

  // deposit
  const [deposit, setDeposit] = useState([]);

  const getDeposit = async () => {
    try {
      const response = await mainFetch.get(
        `/api/v1/payReceipt/${id}/showUserPayReceipt`,
        { withCredentials: true }
      );
      setDeposit(response.data.payReceipt);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDeposit();
  }, []);

  const pendingDeposit = deposit.filter((item) => item.status === 'pending');
  const paidDeposit = deposit.filter((item) => item.status === 'paid');

  const reducePendingDeposit = pendingDeposit.reduce((acc, curr) => {
    const {
      amount: { amount: amt },
    } = curr;
    return acc + amt;
  }, 0);

  const reducePaidDeposit = paidDeposit.reduce((acc, curr) => {
    const {
      amount: { amount: amt },
    } = curr;

    return acc + amt;
  }, 0);

  const reducePaidProfit = paidDeposit.reduce((acc, curr) => {
    return acc + curr.profit;
  }, 0);

  const [currentDeposit, setCurrentDeposit] = useState({
    amount: '',
    status: '',
    profit: '',
    plan: '',
    createdAt: '',
    days: '',
  });

  const getCurrentDeposit = async () => {
    try {
      const response = await mainFetch.get(
        `/api/v1/payReceipt/${id}/showUserPayReceipt`,
        { withCredentials: true }
      );
      const currDep = response.data.payReceipt;
      const len = currDep.length - 1;
      const {
        createdAt,
        status,
        profit,
        amount: {
          amount: amt,
          coin: {
            coinType: coin,
            invest: { percent: percent, days: days, plan: plan },
          },
        },
      } = currDep[len];
      setCurrentDeposit({
        amount: amt,
        status: status,
        profit: profit,
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

  // const date2 = new Date(currentDeposit.createdAt);
  // const day2 = date2.getDate();
  // const month2 = date2.getMonth();
  // const year2 = date2.getFullYear();

  const [amount, setAmount] = useState({
    id: '',
    update: '',
  });
  const fetchAmountMain = async () => {
    try {
      const response = await mainFetch.get(
        `/api/v1/amount/${id}/showUserAmount`,
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

  const date2 = new Date(amount.update);
  const day2 = date2.getDate();
  const month2 = date2.getMonth();
  const year2 = date2.getFullYear();

  const [isLoad9, setIsLoad9] = useState('Remove Balance');
  const removeWithdraw = async (e) => {
    e.preventDefault();
    try {
      setIsLoad9('Balance Removing...');
      const response = await mainFetch.delete(
        `/api/v1/withdraw/${id}/deleteUserWithdraw`,
        { withCredentials: true }
      );
      setIsLoad9('withdraw Removed');
      toast.success('Balance Removed');
    } catch (error) {
      console.log(error);
      setIsLoad9('Balance Bonus');
      toast.error(error.response.data.msg);
    }
  };

  const removeEarning = async (e) => {
    e.preventDefault();
    try {
      setIsLoad9('Balance Removing...');
      const response = await mainFetch.delete(
        `/api/v1/earning/${id}/deleteUserIdNumber`,
        { withCredentials: true }
      );
      setIsLoad9('Balance Removed');
      toast.success('Balance Removed');
    } catch (error) {
      console.log(error);
      setIsLoad9('Balance Bonus');
      toast.error(error.response.data.msg);
    }
  };

  const [isLoad10, setIsLoad10] = useState('Remove Bonus');

  const [isLoad11, setIsLoad11] = useState('Remove Penalty');
  const removePenalty = async (e) => {
    e.preventDefault();
    try {
      setIsLoad11('Penalty Removing...');
      const response = await mainFetch.delete(
        `/api/v1/penalty/${id}/deleteUserIdNumber`,
        { withCredentials: true }
      );
      setIsLoad11('Penalty Removed');
      toast.success('Penalty Removed');
    } catch (error) {
      console.log(error);
      setIsLoad11('Remove Penalty');
      toast.error(error.response.data.msg);
    }
  };

  const [isLoad15, setIsLoad15] = useState('Delete Investment Account');

  const one = async () => {
    setIsLoad15('Deleting Investment Account');
    try {
      const response = await mainFetch.delete(
        `/api/v1/payReceipt/${id}/deleteUserPayReceipt`,
        { withCredentials: true }
      );
      setIsLoad15('Deleted');
    } catch (error) {
      console.log(error);
    }
  };

  const two = async () => {
    try {
      const response = await mainFetch.delete(
        `/api/v1/withdraw/${id}/deleteUserWithdraw`,
        { withCredentials: true }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const three = async () => {
    try {
      const response = await mainFetch.delete(
        `/api/v1/earning/${id}/deleteUserIdNumber`,
        { withCredentials: true }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const five = async () => {
    try {
      const response = await mainFetch.delete(
        `/api/v1/penalty/${id}/deleteUserIdNumber`,
        { withCredentials: true }
      );
    } catch (error) {
      console.log(error);
    }
  };
  const six = async () => {
    try {
      const response = await mainFetch.delete(
        `/api/v1/profit/${id}/deleteUserProfit`,
        { withCredentials: true }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const deleteInvestFunc = (e) => {
    e.preventDefault();
    Promise.all([one(), two(), three(), five(), six()]).then(() =>
      toast.success('Investment Account Deleted')
    );
  };

  const [isLoad16, setIsLoad16] = useState('Delete User');
  const one10 = async () => {
    setIsLoad16('Deleting User...');
    try {
      const response = await mainFetch.delete(`/api/v1/users/${id}`, {
        withCredentials: true,
      });
      toast.success('User Account Deleted');
      setIsLoad16('User Account Deleted');
    } catch (error) {
      console.log(error);
      setIsLoad16('Delete User');
    }
  };

  const one11 = async () => {
    try {
      const response = await mainFetch.delete(
        `/api/v1/payReceipt/${id}/deleteUserPayReceipt`,
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const one12 = async () => {
    try {
      const response = await mainFetch.delete(
        `/api/v1/withdraw/${id}/deleteUserWithdraw`,
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const one13 = async () => {
    try {
      const response = await mainFetch.delete(
        `/api/v1/amount/${id}/deleteUserAmount`,
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const one14 = async () => {
    try {
      const response = await mainFetch.delete(
        `/api/v1/coin/${id}/deleteUserCoin`,
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const one15 = async () => {
    try {
      const response = await mainFetch.delete(
        `/api/v1/invest/${id}/deleteUserInvest`,
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const one16 = async () => {
    try {
      const response = await mainFetch.delete(
        `/api/v1/profit/${id}/deleteUserProfit`,
        { withCredentials: true }
      );
    } catch (error) {
      console.log(error);
    }
  };
  const deleteUser = (e) => {
    e.preventDefault();
    Promise.all([
      one10(),
      one11(),
      one12(),
      one13(),
      one14(),
      one15(),
      one16(),
    ]);
  };

  const [users, setUsers] = useState([]);

  const showUserRef = async () => {
    try {
      const response = await mainFetch.get('/api/v1/users', {
        withCredentials: true,
      });
      setUsers(response.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    showUserRef();
  }, [showUserRef]);

  const filterUser = users.filter((item) => item.referralId === `${username}`);

  // end referral

  const reduceFilterUserBalance = filterUser.reduce((acc, curr) => {
    return acc + curr.balance;
  }, 0);

  const percentageReduce = (reduceFilterUserBalance * 10) / 100;

  return (
    <Wrapper>
      <Navbar3 />

      <div className="container">
        <Sidebar2 />
        <section className="admin">
          <div className="balance" id="main">
            <IoPower className="power" />
            <div className="amount">
              <h4>{formatter.format(Number(balance).toFixed(2))}</h4>
              <p>ACCOUNT BALANCE</p>
            </div>
          </div>

          <div className="balance">
            <h4>Balance</h4>
            <p>
              Username: <span>{username ? username : 'N/A'}</span>
            </p>
            <p>
              Phone: <span>{phone ? phone : 'N/A'}</span>
            </p>
            <p>
              Email: <span>{email ? email : 'N/A'}</span>
            </p>
            <p>
              Country: <span>{country ? country : 'N/A'}</span>
            </p>
            <p>
              City: <span>{city ? city : 'N/A'}</span>
            </p>
            <p>
              State: <span>{state ? state : 'N/A'}</span>
            </p>
            <p>
              Coins: <span>{coins ? coins : 'N/A'}</span>
            </p>
            <p>
              Wallet Address:{' '}
              <span>{walletAddress ? walletAddress : 'N/A'}</span>
            </p>
            <p>
              Total Referral: <span>{referralNumber}</span>
            </p>

            <p>
              Current Plan:{' '}
              <span>
                {currentDeposit.status === 'paid' ? currentDeposit.plan : 'N/A'}
              </span>
            </p>
            <p>
              Duration:{' '}
              <span>
                {currentDeposit.status === 'paid' ? currentDeposit.days : 'N/A'}{' '}
                day(s)
              </span>
            </p>
            <p>
              Started:{' '}
              <span>
                {currentDeposit.status === 'paid' ? (
                  <span>{moment(amount.update).calendar()}</span>
                ) : (
                  'N/A'
                )}
              </span>
            </p>
            <p>
              Expires:{' '}
              <span>
                {currentDeposit.status === 'paid' ? (
                  <span>
                    {moment(amount.update)
                      .add(currentDeposit.days, 'days')
                      .calendar()}
                  </span>
                ) : (
                  'N/A'
                )}
              </span>
            </p>

            <p>
              Joined: <span>{moment(newDate).calendar()}</span>
            </p>

            <h4>{formatter.format(Number(balance).toFixed(2))}</h4>

            <p>
              Account status:{' '}
              <button
                className="btn"
                style={{
                  background: status === 'verified' ? 'green' : 'red',
                }}
              >
                {status}
              </button>
            </p>
          </div>

          <div className="balance" id="main">
            <IoPower className="power" />
            <div className="amount">
              <h4>
                {earning
                  ? formatter.format(Number(totalEarnings).toFixed(2))
                  : formatter.format(Number(0).toFixed(2))}
              </h4>
              <p>ADDED BALANCE</p>
            </div>
          </div>

          <div className="balance" id="main">
            <IoPower className="power" />
            <div className="amount">
              <h4>
                {earning
                  ? formatter.format(Number(reducePenalty).toFixed(2))
                  : formatter.format(Number(0).toFixed(2))}
              </h4>
              <p>TOTAL PENALTY</p>
            </div>
          </div>

          <div className="balance" id="main">
            <IoPower className="power" />
            <div className="amount">
              <h4>{formatter.format(Number(profit).toFixed(2))}</h4>
              <p>TOTAL PROFIT</p>
            </div>
          </div>

          <div className="balance" id="main">
            <IoPower className="power" />
            <div className="amount">
              <h4>{formatter.format(Number(percentageReduce).toFixed(2))}</h4>
              <p>TOTAL REFERRAL BONUS</p>
            </div>
          </div>

          <div className="balance" id="main">
            <IoPower className="power" />
            <div className="amount">
              <h4>
                {filterPaySent
                  ? formatter.format(Number(reduceFilter).toFixed(2))
                  : formatter.format(Number(0).toFixed(2))}
              </h4>
              <p>WITHDRAWAL TOTAL</p>
            </div>
          </div>

          <div className="balance" id="main">
            <IoPower className="power" />
            <div className="amount">
              <h4>{formatter.format(Number(reduceFilter2).toFixed(2))}</h4>
              <p>PENDING WITHDRAWAL</p>
            </div>
          </div>

          <div className="balance" id="main">
            <IoPower className="power" />
            <div className="amount">
              <h4>
                {formatter.format(Number(reducePendingDeposit).toFixed(2))}
              </h4>
              <p>PENDING DEPOSIT</p>
            </div>
          </div>
          <div className="balance" id="main">
            <IoPower className="power" />
            <div className="amount">
              <h4>
                {currentDeposit.status === 'paid'
                  ? formatter.format(Number(currentDeposit.amount).toFixed(2))
                  : formatter.format(Number(0).toFixed(2))}
              </h4>
              <p>CURRENT DEPOSIT</p>
            </div>
          </div>
          <div className="balance" id="main">
            <IoPower className="power" />
            <div className="amount">
              <h4>{formatter.format(Number(reducePaidDeposit).toFixed(2))}</h4>
              <p>TOTAL DEPOSIT</p>
            </div>
          </div>

          <form onSubmit={handleSubmit1} className="updateForm">
            <h4>Update FullName</h4>
            <div className="inner">
              <label htmlFor="fullName" className="label">
                FullName
              </label>
              <input
                type="text"
                className="input"
                name="fullName"
                placeholder={fullName}
                value={update.name}
                onChange={(e) => {
                  setUpdate({ ...update, [e.target.name]: e.target.value });
                }}
              />
            </div>
            <button type="submit" className="btn">
              {isLoad1}
            </button>
          </form>

          <form onSubmit={handleSubmitUsername} className="updateForm">
            <h4>Update Username</h4>
            <div className="inner">
              <label htmlFor="username" className="label">
                Username
              </label>
              <input
                type="text"
                className="input"
                placeholder={username}
                name="username"
                value={update.username}
                onChange={(e) => {
                  setUpdate({ ...update, [e.target.name]: e.target.value });
                }}
              />
            </div>
            <button type="submit" className="btn">
              {isLoad1}
            </button>
          </form>

          <form onSubmit={handleSubmitEmail} className="updateForm">
            <h4>Update Email</h4>
            <div className="inner">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                type="text"
                className="input"
                placeholder={email}
                name="email"
                value={update.email}
                onChange={(e) => {
                  setUpdate({ ...update, [e.target.name]: e.target.value });
                }}
              />
            </div>
            <button type="submit" className="btn">
              {isLoad1}
            </button>
          </form>

          <form onSubmit={handleSubmitPhone} className="updateForm">
            <h4>Update Phone</h4>
            <div className="inner">
              <label htmlFor="phone" className="label">
                Phone
              </label>
              <input
                type="text"
                className="input"
                name="phone"
                placeholder={phone}
                value={update.phone}
                onChange={(e) => {
                  setUpdate({ ...update, [e.target.name]: e.target.value });
                }}
              />
            </div>

            <button type="submit" className="btn">
              {isLoad1}
            </button>
          </form>

          <form onSubmit={handleSubmitCountry} className="updateForm">
            <h4>Update Country</h4>
            <div className="inner">
              <label htmlFor="country" className="label">
                Country
              </label>
              <input
                type="text"
                className="input"
                placeholder={country}
                name="country"
                value={update.country}
                onChange={(e) => {
                  setUpdate({ ...update, [e.target.name]: e.target.value });
                }}
              />
            </div>

            <button type="submit" className="btn">
              {isLoad1}
            </button>
          </form>

          <form onSubmit={handleSubmitCity} className="updateForm">
            <h4>Update City</h4>
            <div className="inner">
              <label htmlFor="city" className="label">
                City
              </label>
              <input
                type="text"
                className="input"
                placeholder={city}
                name="city"
                value={update.city}
                onChange={(e) => {
                  setUpdate({ ...update, [e.target.name]: e.target.value });
                }}
              />
            </div>
            <button type="submit" className="btn">
              {isLoad1}
            </button>
          </form>

          <form onSubmit={handleSubmitState} className="updateForm">
            <h4>Update State</h4>
            <div className="inner">
              <label htmlFor="state" className="label">
                State
              </label>
              <input
                type="text"
                className="input"
                name="state"
                placeholder={state}
                value={update.state}
                onChange={(e) => {
                  setUpdate({ ...update, [e.target.name]: e.target.value });
                }}
              />
            </div>

            <button type="submit" className="btn">
              {isLoad1}
            </button>
          </form>

          <form onSubmit={handleSubmitWallet} className="updateForm">
            <h4>Update Wallet Address</h4>
            <div className="inner">
              <label htmlFor="walletAddress" className="label">
                Wallet Address
              </label>
              <input
                type="text"
                className="input"
                name="walletAddress"
                placeholder={walletAddress}
                value={update.walletAddress}
                onChange={(e) => {
                  setUpdate({ ...update, [e.target.name]: e.target.value });
                }}
              />
            </div>

            <button type="submit" className="btn">
              {isLoad1}
            </button>
          </form>

          <form onSubmit={handleSubmitCoins} className="updateForm">
            <h4>Update Coin</h4>
            <div className="inner">
              <label htmlFor="coin" className="label">
                Coins
              </label>
              <input
                type="text"
                className="input"
                name="coins"
                placeholder={coins}
                value={update.coins}
                onChange={(e) => {
                  setUpdate({ ...update, [e.target.name]: e.target.value });
                }}
              />
            </div>

            <button type="submit" className="btn">
              {isLoad1}
            </button>
          </form>

          <form onSubmit={handleSubmitStatus} className="updateForm">
            <h4>Update Status</h4>
            <div className="inner">
              <label htmlFor="status" className="label">
                Status
              </label>
              <input
                type="text"
                className="input"
                placeholder={status}
                name="status"
                value={update.status}
                onChange={(e) => {
                  setUpdate({ ...update, [e.target.name]: e.target.value });
                }}
              />
            </div>

            <button type="submit" className="btn">
              {isLoad1}
            </button>
          </form>

          <form onSubmit={handleSubmit2} className="change updateForm">
            <h4>Change Password</h4>
            <div className="inner">
              <label htmlFor="newPassword" className="label">
                New Password
              </label>
              <input
                type="password"
                className="input"
                name="newPassword"
                value={update.newPassword}
                onChange={(e) => {
                  setPass({ ...pass, [e.target.name]: e.target.value });
                }}
              />
            </div>

            <div className="inner">
              <label htmlFor="password" className="label">
                Password
              </label>
              <input
                type="password"
                className="input"
                name="password"
                value={update.password}
                onChange={(e) => {
                  setPass({ ...pass, [e.target.name]: e.target.value });
                }}
              />
            </div>

            <button type="submit" className="btn">
              {isLoad2}
            </button>
          </form>

          {/* <form onSubmit={handleSubmit3} className="change updateForm">
            <h4>Update Balance</h4>
            <div className="inner">
              <label htmlFor="newPassword" className="label">
                Balance
              </label>
              <input
                type="text"
                className="input"
                name="balance"
                value={updateBal.balance}
                onChange={(e) => {
                  setUpdateBal({
                    ...updateBal,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </div>

            <button type="submit" className="btn">
              {isLoad3}
            </button>
          </form> */}

          <form onSubmit={handleSubmit4} className="change updateForm">
            <h4>Add Balance</h4>
            <div className="inner">
              <label htmlFor="newPassword" className="label">
                Amount
              </label>
              <input
                type="text"
                className="input"
                name="amount"
                placeholder={bonusAmt}
                value={updateBonus.amount}
                onChange={(e) => {
                  setUpdateBonus({
                    ...updateBonus,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </div>

            <button type="submit" className="btn">
              {isLoad4}
            </button>
          </form>

          <div style={{ textAlign: 'center' }}>
            <button onClick={removeEarning} type="button" className="btn">
              {isLoad9}
            </button>
          </div>

          <form onSubmit={handleSubmit6} className="change updateForm">
            <h4>Add Penalty</h4>
            <div className="inner">
              <label htmlFor="amount" className="label">
                Amount
              </label>
              <input
                type="text"
                className="input"
                name="amount"
                placeholder={penaltyAmt}
                value={penalty.amount}
                onChange={(e) => {
                  setPenalty({
                    ...penalty,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </div>

            <button type="submit" className="btn">
              {isLoad6}
            </button>
          </form>

          <div style={{ textAlign: 'center' }}>
            <button onClick={removePenalty} type="button" className="btn">
              {isLoad11}
            </button>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button
              onClick={deleteInvestFunc}
              style={{ background: 'red', color: 'white' }}
              type="submit"
              className="btn"
            >
              {isLoad15}
            </button>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button
              onClick={deleteUser}
              style={{ background: 'red', color: 'white' }}
              type="submit"
              className="btn"
            >
              {isLoad16}
            </button>
          </div>
        </section>
      </div>
    </Wrapper>
  );
};
export default UserDash;
