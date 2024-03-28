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

      setProfit(response.data.profit);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProfit();
  }, []);

  const reduceProfit = profit.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

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

  const reduceEarning = earning.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  const totalEarnings = reduceEarning + reduceProfit;

  // end earning

  const [balance, setBalance] = useState('');
  // const [balanceId, setBalanceId] = useState('');

  const fetchBalance = async () => {
    try {
      const response = await mainFetch.get(
        `/api/v1/balance/${id}/showUserBalance`,
        {
          withCredentials: true,
        }
      );
      const bal = response.data.balance;
      const len = bal.length - 1;
      const { balance } = bal[len];
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
  const [isLoad5, setIsLoad5] = useState('add referral bonus');
  const [isLoad6, setIsLoad6] = useState('add penalty');

  const [percentage, setPercentage] = useState({
    amount: '',
  });
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
    // fullName: '',
    // username: '',
    // email: '',
    // phone: '',
    // country: '',
    // city: '',
    // state: '',
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
          // fullName: update.fullName,
          // username: update.username,
          //   email: update.email,
          // phone: update.phone,
          // city: update.city,
          // state: update.state,
          // country: update.country,
          coins: update.coins,
          walletAddress: update.walletAddress,
          status: update.status,
        },
        {
          withCredentials: true,
        }
      );
      toast.success('Update Successful');
      setUpdate({
        // fullName: '',
        // username: '',
        // email: '',
        // phone: '',
        coins: '',
        walletAddress: '',
        // country: '',
        // city: '',
        // state: '',
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
      const response = await mainFetch.patch(
        `/api/v1/earning/${bonusId}`,
        {
          amount: updateBonus.amount,
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

  // percentage
  const [percentageId, setPercentageId] = useState('');
  const [percentageAmt, setPercentageAmt] = useState('');

  const fetchPercentage = async () => {
    try {
      const response = await mainFetch.get(
        `/api/v1/percentage/${id}/showUserPercentage`,
        { withCredentials: true }
      );
      const percent = response.data.percentage;
      const len = percent.length - 1;
      const { _id, amount } = percent[len];
      setPercentageId(_id);
      setPercentageAmt(amount);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPercentage();
  }, []);

  const handleSubmit5 = async (e) => {
    e.preventDefault();
    try {
      setIsLoad5('updating referral bonus...');
      const response = await mainFetch.patch(
        `/api/v1/percentage/${percentageId}`,
        {
          amount: percentage.amount,
        },
        {
          withCredentials: true,
        }
      );

      toast.success('Referral Bonus Added');
      setPercentage({
        amount: '',
      });

      setIsLoad5('Referral Bonus Added');
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };
  // end percentage

  // penalty
  const [penaltyId, setPenaltyId] = useState('');
  const [penaltyAmt, setPenaltyAmt] = useState('');

  const fetchPenalty = async () => {
    try {
      const response = await mainFetch.get(
        `/api/v1/penalty/${id}/showUserPenalty`,
        { withCredentials: true }
      );
      const penal = response.data.penalty;
      const len = penal.length - 1;
      const { _id, amount } = penal[len];
      setPenaltyId(_id);
      setPenaltyAmt(amount);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPenalty();
  }, []);

  const handleSubmit6 = async (e) => {
    e.preventDefault();
    try {
      setIsLoad6('adding penalty...');
      const response = await mainFetch.patch(
        `/api/v1/penalty/${penaltyId}`,
        {
          amount: penalty.amount,
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

  const [currentDeposit, setCurrentDeposit] = useState({
    amount: '',
    status: '',
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
                  <span>
                    {day2}/{month2 + 1}/{year2}
                  </span>
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
                    {day2 + currentDeposit.days}/{month2 + 1}/{year2}
                  </span>
                ) : (
                  'N/A'
                )}
              </span>
            </p>
            <p>
              Referral Names:{' '}
              <span>
                {filterUsers
                  ? filterUsers.map((item) => {
                      const { _id, username } = item;

                      return <span>{username}</span>;
                    })
                  : 'N/A'}
              </span>
            </p>

            <p>
              Joined:{' '}
              <span>
                {day}/{month}/{year}
              </span>
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
              <p>EARNED TOTAL</p>
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
            <h4>Update User</h4>
            {/* <div className="inner">
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
            </div> */}

            <div className="inner">
              <label htmlFor="state" className="label">
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

            <div className="inner">
              <label htmlFor="state" className="label">
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

          <form onSubmit={handleSubmit5} className="change updateForm">
            <h4>Add Referral Bonus</h4>
            <div className="inner">
              <label htmlFor="amount" className="label">
                Amount
              </label>
              <input
                type="text"
                className="input"
                name="amount"
                placeholder={percentageAmt}
                value={percentage.amount}
                onChange={(e) => {
                  setPercentage({
                    ...percentage,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </div>

            <button type="submit" className="btn">
              {isLoad5}
            </button>
          </form>

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
        </section>
      </div>
    </Wrapper>
  );
};
export default UserDash;
