import { Link, useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import Navbar2 from '../components/Navbar2';
import Sidebar from '../components/Sidebar';
import { useEffect, useState } from 'react';
import { mainFetch } from '../utils';
import FooterMobile from '../components/FooterMobile';
import copy from 'copy-to-clipboard';
import { toast } from 'react-toastify';
import { IoIosFlash } from 'react-icons/io';
import { MdHourglassEmpty } from 'react-icons/md';
import { IoIosWallet } from 'react-icons/io';
import { GiTwoCoins } from 'react-icons/gi';
import moment from 'moment';

const Dashboard = () => {
  // user id
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

  // end userId

  // main balance
  const [mainBalance, setMainBalance] = useState({
    amount: '',
    receipt: '',
    percent: '',
    days: '',
    plan: '',
    status: '',
    createdAt: '',
    coin: '',
    userInvest: '',
    payId: '',
    amountId: '',
    coinId: '',
    investId: '',
  });
  const fetchMainBalance = async () => {
    try {
      const response = await mainFetch.get(
        '/api/v1/payReceipt/showUserPayReceipt',
        {
          withCredentials: true,
        }
      );

      const bal = response.data.payReceipt;
      const length = bal.length - 1;

      const {
        createdAt,
        receipt,
        status,
        _id: payId,
        amount: {
          amount: amt,
          _id: amountId,
          coin: {
            coinType: coin,
            user: userCoin,
            _id: coinId,
            invest: {
              percent: percent,
              days: days,
              plan: plan,
              _id: investId,
              user: userInvest,
            },
          },
        },
      } = bal[length];
      setMainBalance({
        payId: payId,
        receipt: receipt,
        coinId: coinId,
        investId: investId,
        amountId: amountId,
        amount: amt,
        percent: percent,
        days: days,
        plan: plan,
        status: status,
        coin: coin,
        userInvest: userInvest,
        createdAt: createdAt,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMainBalance();
  }, [fetchMainBalance]);

  // Balance

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

  const filterBalancePercentageReduce = filterBalancePaid.reduce(
    (acc, curr) => {
      const {
        amount: {
          coin: {
            invest: { percent: percentage },
          },
        },
      } = curr;
      return acc + percentage;
    },
    0
  );
  const filterBalancePendingReduce = filterBalancePending.reduce(
    (acc, curr) => {
      const {
        amount: { amount: amt },
      } = curr;
      return acc + amt;
    },
    0
  );

  const calculateTotalPercent = () => {
    const total = (mainBalance.amount * filterBalancePercentageReduce) / 100;

    return total;
  };
  useEffect(() => {
    calculateTotalPercent();
  }, []);

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

  // const newDate = new Date(mainBalance.createdAt);
  // console.log(moment(newDate).format('DD HH:mm:ss'));
  // console.log(moment(mainBalance.createdAt).format('DD HH:mm:ss'));

  console.log(moment(amount.update).format('DD HH:mm'));
  console.log(moment(mainBalance.createdAt).format('DD HH:mm'));

  const profit = () => {
    let num = calculateTotalPercent();

    const check =
      moment().format('DD HH:mm:ss') >=
      moment(amount.update).add(mainBalance.days, 'days').format('DD HH:mm:ss');

    return check === true && num;
  };
  useEffect(() => {
    profit();
  }, [profit]);

  const postProfit = async () => {
    try {
      const response = await mainFetch.post(
        '/api/v1/profit',
        { amount: profit() },
        { withCredentials: true }
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    postProfit();
  }, []);

  // end main balance

  const formatter = new Intl.NumberFormat('en-DE', {
    style: 'currency',
    currency: 'EUR',
  });

  const [refTree, setRefTree] = useState([]);
  const showReferral = async () => {
    try {
      const res = await mainFetch.get('/api/v1/referral/showUserReferral', {
        withCredentials: true,
      });

      setRefTree(res.data.referral);
    } catch (error) {
      console.log(error);
      console.log(error.res.data.msg);
    }
  };

  useEffect(() => {
    showReferral();
  }, []);

  // get earning

  const [earning, setEarning] = useState([]);
  const fetchEarning = async () => {
    try {
      const response = await mainFetch.get('/api/v1/earning/showUserEarning', {
        withCredentials: true,
      });

      setEarning(response.data.earning);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEarning();
  }, [fetchEarning]);

  const earningReduce = earning.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  // end earning

  // get penalty

  const [penalty, setPenalty] = useState([]);
  const fetchPenalty = async () => {
    try {
      const response = await mainFetch.get('/api/v1/penalty/showUserPenalty', {
        withCredentials: true,
      });

      setPenalty(response.data.penalty);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPenalty();
  }, [fetchPenalty]);

  const penaltyReduce = penalty.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  const postEarning = async () => {
    try {
      const response = await mainFetch.post(
        '/api/v1/earning',
        { amount: 0 },
        { withCredentials: true }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    postEarning();
  }, []);

  const postPercentage = async () => {
    try {
      const response = await mainFetch.post(
        '/api/v1/percentage',
        { amount: 0 },
        { withCredentials: true }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    postPercentage();
  }, []);

  const postPenalty = async () => {
    try {
      const response = await mainFetch.post(
        '/api/v1/penalty',
        { amount: 0 },
        { withCredentials: true }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    postPenalty();
  }, []);

  // end penalty

  // get percentage

  const [percentage, setPercentage] = useState([]);
  const fetchPercentage = async () => {
    try {
      const response = await mainFetch.get(
        '/api/v1/percentage/showUserPercentage',
        {
          withCredentials: true,
        }
      );

      setPercentage(response.data.percentage);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPercentage();
  }, [fetchPercentage]);

  const percentageReduce = percentage.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  // end percentage

  // curr withdraw
  const [currWithdraw, setCurrWithdraw] = useState([]);

  const fetchCurrWithdraw = async () => {
    try {
      const response = await mainFetch.get(
        '/api/v1/withdraw/showUserWithdraw',
        {
          withCredentials: true,
        }
      );
      const withdrawal = response.data.withdraw;
      const length = withdrawal.length - 1;
      const { amount } = withdrawal[length];
      setCurrWithdraw(amount);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCurrWithdraw();
  }, []);

  // end curr withdraw

  // Total Withdraw
  const [withdraw, setWithdraw] = useState([]);

  const fetchWithdraw = async () => {
    try {
      const response = await mainFetch.get(
        '/api/v1/withdraw/showUserWithdraw',
        {
          withCredentials: true,
        }
      );
      setWithdraw(response.data.withdraw);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWithdraw();
  }, []);

  const filterWithdraw = withdraw.filter((item) => item.status === 'sent');
  const filterWithdrawProcessing = withdraw.filter(
    (item) => item.status === 'processing'
  );

  const totalWithdraw = filterWithdraw.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);
  const totalWithdrawProcessing = filterWithdrawProcessing.reduce(
    (acc, curr) => {
      return acc + curr.amount;
    },
    0
  );

  //endTotal withdraw

  const mainAccountBalance =
    // mainBalance.amount +
    filterBalancePaidReduce +
    earningReduce +
    profit() -
    percentageReduce -
    penaltyReduce -
    currWithdraw;

  const postBalance = async () => {
    try {
      const response = await mainFetch.post(
        '/api/v1/balance',
        { balance: mainAccountBalance },
        { withCredentials: true }
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    postBalance();
  }, [postBalance]);

  // referral copy
  const [userIdd, setUserIdd] = useState('');
  const [username, setUsername] = useState('');
  const fetchUser = async () => {
    try {
      const response = await mainFetch.get('/api/v1/users/showMe', {
        withCredentials: true,
      });
      const { username } = response.data.user;
      setUsername(username);
      setUserIdd(`https://trex-holding.com/register/${username}`);
    } catch (error) {
      console.log(error);
      console.log(error.response.data.msg);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const copyReferral = () => {
    copy(userIdd);
    toast.success(`You have copied ${userIdd}`);
  };

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

  const filterUser = user.filter((item) => item.referralId === `${username}`);

  // end referral

  const [balance, setBalance] = useState('');

  const fetchBalanceMain = async () => {
    try {
      const response = await mainFetch.get(
        `/api/v1/balance/${userId}/showUserBalance`,
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
    fetchBalanceMain();
  }, [fetchBalanceMain]);

  const [isInvest, setIsInvest] = useState('reinvest');
  // const reinvestFunc = async (e) => {
  //   e.preventDefault();

  //   setIsInvest('reinvesting balance...');
  //   try {
  //     const response = await mainFetch.patch(
  //       `/api/v1/amount/${amount.id}`,
  //       { amount: mainAccountBalance },
  //       { withCredentials: true }
  //     );
  //     if (response.status === 200) {
  //       setIsInvest('Balance Reinvested');
  //       toast.success('Balance Successfully Reinvested');
  //       await mainFetch.delete(`/api/v1/withdraw/${userId}/deleteUserWithdraw`);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const oneMain = async () => {
  //   setIsInvest('reinvesting balance...');
  //   try {
  //     const res = await mainFetch.post(
  //       '/api/v1/payReceipt',
  //       {
  //         receipt: mainBalance.receipt,
  //         amount: mainBalance.amountId,
  //         status: mainBalance.status,
  //         user: mainBalance.userInvest,
  //       },
  //       { withCredentials: true }
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const one = async () => {
    setIsInvest('reinvesting balance...');
    try {
      const res = await mainFetch.patch(
        `/api/v1/amount/${amount.id}`,
        { amount: mainAccountBalance },
        { withCredentials: true }
      );

      if (res.status === 200) {
        setIsInvest('Balance Reinvested');
        toast.success('Balance Successfully Reinvested');
      }
    } catch (error) {
      console.log(error);
    }
  };
  const two = async () => {
    try {
      const response = await mainFetch.delete(
        `/api/v1/withdraw/${userId}/deleteUserWithdraw`,
        { withCredentials: true }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const three = async () => {
    try {
      const response = await mainFetch.delete(
        `/api/v1/profit/${userId}/deleteUserProfit`,
        { withCredentials: true }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const four = async () => {
    try {
      const response = await mainFetch.delete(
        `/api/v1/earning/${userId}/deleteUserEarning`,
        { withCredentials: true }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const five = async () => {
    try {
      const response = await mainFetch.delete(
        `/api/v1/percentage/${userId}/deleteUserPercentage`,
        { withCredentials: true }
      );
    } catch (error) {
      console.log(error);
    }
  };

  // const six = async () => {
  //   try {
  //     const response = await mainFetch.delete(
  //       `/api/v1/penalty/${userId}/deleteUserPenalty`,
  //       { withCredentials: true }
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const reinvestFunc = (e) => {
    e.preventDefault();
    Promise.all([one(), two(), three(), four(), five()]);
  };

  const one1 = async () => {
    try {
      const response = await mainFetch.delete(
        `/api/v1/withdraw/${userId}/deleteUserWithdraw`,
        { withCredentials: true }
      );
    } catch (error) {
      console.log(error);
    }
  };

  //dash
  const two1 = async () => {
    try {
      const response = await mainFetch.delete(
        `/api/v1/profit/${userId}/deleteUserProfit`,
        { withCredentials: true }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const three1 = async () => {
    try {
      const response = await mainFetch.delete(
        `/api/v1/earning/${userId}/deleteUserEarning`,
        { withCredentials: true }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const four1 = async () => {
    try {
      const response = await mainFetch.delete(
        `/api/v1/percentage/${userId}/deleteUserPercentage`,
        { withCredentials: true }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const five1 = async () => {
    try {
      const response = await mainFetch.delete(
        `/api/v1/payReceipt/${userId}/deleteUserPayReceipt`,
        { withCredentials: true }
      );
    } catch (error) {
      console.log(error);
    }
  };

  // const six1 = async () => {
  //   try {
  //     const response = await mainFetch.delete(
  //       `/api/v1/penalty/${userId}/deleteUserPenalty`,
  //       { withCredentials: true }
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const nav = useNavigate();
  const upgrade = (e) => {
    e.preventDefault();
    Promise.all([one1(), two1(), three1(), four1(), five1()]).then(() =>
      nav('/investDash')
    );
  };

  return (
    <Wrapper>
      <Navbar2 />

      <div className="container">
        <Sidebar className="" />
        <section className="dashboard">
          <div className="acc-bal">
            <article>
              <div className="circle">
                <h3 id="circle-one"></h3>
                <h3 id="circ-two"></h3>
              </div>
              <p>Account balance</p>
              {mainBalance.status === 'paid' ? (
                <h4>
                  {formatter.format(Number(mainAccountBalance).toFixed(2))}
                </h4>
              ) : (
                <h4>{formatter.format(0)}</h4>
              )}

              {profit() > 0 ? (
                <button
                  style={{ marginTop: '1rem', background: 'var(--grey-600' }}
                  type="button"
                  className="btn"
                  onClick={reinvestFunc}
                >
                  {isInvest}
                </button>
              ) : (
                <button
                  onClick={upgrade}
                  style={{ marginTop: '1rem', background: 'var(--grey-600' }}
                  type="button"
                  className="btn"
                >
                  Upgrade
                </button>
              )}
            </article>
          </div>
          <aside className="box">
            <div className="acc-bal" id="acc-bal-1">
              <article>
                <div className="circle">
                  <h3 id="circle-one"></h3>
                  <h3 id="circ-two"></h3>
                </div>

                <p>Total Withdraw</p>

                {filterWithdraw ? (
                  <h4>{formatter.format(totalWithdraw)}</h4>
                ) : (
                  <h4>{formatter.format(0)}</h4>
                )}
              </article>
            </div>

            <div className="acc-bal" id="acc-bal-2">
              <article>
                <div className="circle">
                  <h3 id="circle-one"></h3>
                  <h3 id="circ-two"></h3>
                </div>

                <p>Total profit</p>

                {mainBalance.status === 'paid' ? (
                  <h4>{formatter.format(Number(profit()).toFixed(2))}</h4>
                ) : (
                  <h4>{formatter.format(Number(0).toFixed(2))}</h4>
                )}
              </article>
            </div>

            <div className="acc-bal" id="acc-bal-3">
              <article>
                <div className="circle">
                  <h3 id="circle-one"></h3>
                  <h3 id="circ-two"></h3>
                </div>

                <p>Current Invest</p>

                {mainBalance.status === 'paid' ? (
                  <h4>{formatter.format(mainBalance.amount)}</h4>
                ) : (
                  <h4>{formatter.format(0)}</h4>
                )}
              </article>
            </div>

            {/* <div className="acc-bal" id="acc-bal-1">
              <article>
                <div className="circle">
                  <h3 id="circle-one"></h3>
                  <h3 id="circ-two"></h3>
                </div>

                <p>Total Invest</p>

                {filterBalancePaid ? (
                  <h4>
                    {formatter.format(
                      Number(filterBalancePaidReduce).toFixed(2)
                    )}
                  </h4>
                ) : (
                  <h4>{formatter.format(0)}</h4>
                )}
              </article>
            </div> */}
          </aside>

          <article className="log">
            <Link to="/withdrawLog" className="log-inner">
              {' '}
              <GiTwoCoins className="log-icon" />
              <p>Withdraw Log</p>
            </Link>

            <Link to="/depositLog" className="log-inner">
              {' '}
              <GiTwoCoins className="log-icon" />
              <p>Deposit Log</p>
            </Link>

            <Link to="/investLog" className="log-inner">
              {' '}
              <GiTwoCoins className="log-icon" />
              <p>Invest Log</p>
            </Link>
          </article>

          <div className="coin-first">
            <div className="coin-second">
              <iframe
                src="https://widget.coinlib.io/widget?type=chart&theme=light&coin_id=859&pref_coin_id=1505"
                width="100%"
                height="536px"
                scrolling="auto"
                marginWidth="0"
                marginHeight="0"
                frameBorder="0"
                border="0"
                className="iframe1"
              ></iframe>
            </div>
            <div className="iframe2">
              <a href="https://coinlib.io" target="_blank" className="iframe3">
                Cryptocurrency Prices
              </a>
              &nbsp;by Coinlib
            </div>
          </div>

          <article className="upgrade-main">
            <h3>Your Current Level</h3>
            <div className="upgrade">
              <p style={{ maxWidth: '10rem' }}>
                {mainBalance.status === 'paid' ? mainBalance.plan : 'N/A'}
              </p>

              <button onClick={upgrade} type="btn" className="upgrade-btn">
                Upgrade
              </button>
            </div>
          </article>
          <article className="upgrade-main">
            <h3>Invitation Link</h3>
            <div className="upgrade">
              <p>{userIdd}</p>
              <button type="btn" onClick={copyReferral} className="upgrade-btn">
                Copy
              </button>
            </div>
          </article>

          <article className="ref-tree">
            <h4>Reference tree (You have {filterUser.length} referral)</h4>

            <div className="main-tree">
              {filterUser
                ? filterUser.map((item) => {
                    const { _id: id, username } = item;

                    return <p>{username}</p>;
                  })
                : '<p>You dont have any referral yet. PLease invite a user and earn</p>'}
            </div>
          </article>

          <div className="pending">
            <article>
              <span className="pend-icon" id="icon1">
                <IoIosFlash className="icon-main" />
              </span>
              <h5>Current Plan</h5>
              <h4>
                {mainBalance.status === 'paid' ? mainBalance.plan : 'N/A'}
              </h4>
            </article>

            <article>
              <span className="pend-icon" id="icon2">
                <IoIosWallet className="icon-main" />
              </span>
              <h5>Pending Invest</h5>
              {filterBalancePending ? (
                <h4>
                  {formatter.format(
                    Number(filterBalancePendingReduce).toFixed(2)
                  )}
                </h4>
              ) : (
                <h4>{formatter.format(Number(0).toFixed(2))}</h4>
              )}
            </article>

            <article>
              <span className="pend-icon" id="icon3">
                <MdHourglassEmpty className="icon-main" />
              </span>
              <h5>Pending Withdrawal</h5>
              {filterWithdrawProcessing ? (
                <h4>
                  {formatter.format(Number(totalWithdrawProcessing).toFixed(2))}
                </h4>
              ) : (
                <h4>{formatter.format(Number(0).toFixed(2))}</h4>
              )}
            </article>

            <article>
              <span className="pend-icon" id="icon4">
                <GiTwoCoins className="icon-main" id="icon4" />
              </span>
              <h5>Referral Earn</h5>
              {earning.length !== 0 ? (
                <h4>{formatter.format(Number(percentageReduce).toFixed(2))}</h4>
              ) : (
                <h4>{formatter.format(Number(0).toFixed(2))}</h4>
              )}
            </article>
          </div>
        </section>
      </div>

      <FooterMobile />
    </Wrapper>
  );
};
export default Dashboard;
