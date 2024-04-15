import { useEffect, useState } from 'react';
import Wrapper from '../assets/wrappers/Withdraw';
import FooterMobile from '../components/FooterMobile';
import Navbar2 from '../components/Navbar2';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { mainFetch } from '../utils';
import { toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query';
import Sidebar from '../components/Sidebar';

const Withdraw = () => {
  const [userId, setUserId] = useState('');
  let [coins, setCoins] = useState('');
  let [walletAddress, setWalletAddress] = useState('');

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
  }, [fetchUserId]);

  const userFunc = async () => {
    try {
      const response = await mainFetch.get(`/api/v1/users/${userId}`, {
        withCredentials: true,
      });

      setCoins(response.data.user.coins);
      setWalletAddress(response.data.user.walletAddress);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userFunc();
  }, [userFunc]);

  coins = coins ? coins : 'N/A';
  walletAddress = walletAddress ? walletAddress : 'N/A';

  const [isLoading, setIsLoading] = useState('withdraw');

  const [withdraw, setWithdraw] = useState({
    withdrawalMethod: '',
    amount: '',
    currentBalance: '',
    walletAddress: '',
    status: '',
  });

  const [code, setCode] = useState('');
  const [chargePercentage, setChargePercentage] = useState('');

  const [withdrawAmt, setWithdrawAmt] = useState({
    amount: '',
    status: '',
  });

  const withdrawalFetch = async () => {
    try {
      const response = await mainFetch.get(`api/v1/withdraw/showUserWithdraw`, {
        withCredentials: true,
      });

      const withdrawal = response.data.withdraw;

      if (withdrawal.length !== 0) {
        // console.log('hi');
        const num = withdrawal.length - 1;

        const { amount, status } = withdrawal[num];

        setWithdrawAmt({
          status: status,
          amount: amount,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    withdrawalFetch();
  }, [withdrawalFetch]);

  const formatter = new Intl.NumberFormat('en-DE', {
    style: 'currency',
    currency: 'EUR',
  });

  const [withdrawAmount, setWithdrawAmount] = useState([]);

  const withdrawMainFetch = async () => {
    try {
      const response = await mainFetch.get(`api/v1/withdraw/showUserWithdraw`, {
        withCredentials: true,
      });

      const withdrawal = response.data.withdraw;

      setWithdrawAmount(withdrawal);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    withdrawMainFetch();
  }, [withdrawMainFetch]);

  const reduceWithdrawal = withdrawAmount.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  const [balance, setBalance] = useState('');
  // const [balanceId, setBalanceId] = useState('');

  const fetchBalance = async () => {
    try {
      const response = await mainFetch.get(
        `/api/v1/payReceipt/${userId}/showUserPayReceipt`,
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

  const bal = JSON.parse(localStorage.getItem('accBalance'));

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { withdrawalMethod, amount, currentBalance, walletAdd, status } =
      withdraw;

    if (amount > balance) {
      toast.success('Insufficient Balance');
      return;
    }

    //new
    try {
      setIsLoading('submitting');
      const res = await mainFetch.post(
        '/api/v1/withdraw',
        {
          withdrawalMethod: coins,
          amount: amount,
          currentBalance: currentBalance,
          walletAddress: walletAddress,
        },
        { withCredentials: true }
      );
      setIsLoading('success');

      toast.success('Withdrawal Successful');
      const data = res.data.withdraw;
      setWithdraw({
        withdrawalMethod: '',
        amount: '',
        currentBalance: '',
        walletAddress: '',
        status: '',
      });
    } catch (error) {
      console.log(error);
      setIsLoading('withdraw');
      toast.error(error.res.data.msg);
    }
  };

  // console.log(mainBalance);

  const navigation = useNavigation();
  const submitting = navigation.state === 'submitting';

  const [user, setUser] = useState('');

  const getUsers = async () => {
    try {
      const response = await mainFetch.get('/api/v1/users/showMe', {
        withCredentials: true,
      });

      setUser(response.data.user.userId);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const userIdd = user;
  const [user2, setUser2] = useState([]);

  const getUsers2 = async () => {
    try {
      const response = await mainFetch.get(`/api/v1/users/${user}`, {
        withCredentials: true,
      });

      // setUser2(response.data.user.city);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUsers2();
  }, [getUsers2]);

  // const bal = JSON.parse(localStorage.getItem('accBalance'));
  // console.log(bal.balance);

  return (
    <Wrapper>
      <Navbar2 />

      <div className="container">
        <Sidebar />
        <section className="withdraw">
          <article>
            <form className="withdrawForm" onSubmit={handleSubmit}>
              <div className="withdrawForm-inner">
                <h4>
                  Current balance {formatter.format(Number(balance).toFixed(2))}
                </h4>
                <h6 style={{ marginTop: '2rem', color: 'yellow' }}>
                  Please fill your Wallet address details from your settings
                  before making withdrawal
                </h6>
                <h5>Coins</h5>
                {/* <select
                  className="form-input"
                  id="select"
                  name="withdrawalMethod"
                  style={{ color: 'var(--grey-400)' }}
                  value={withdraw.withdrawalMethod}
                  onChange={(e) => {
                    setWithdraw({
                      ...withdraw,
                      [e.target.name]: e.target.value,
                    });
                  }}
                >
                  <option>Select Options</option>
                  <option value="Bitcoin">BTC</option>
                  <option value="ETH">ETH</option>
                  <option value="TRON">TRON</option>
                  <option value="BNB">BNB</option>
                  <option value="USDT">USDT</option>
                </select> */}
                <input
                  readOnly
                  type="text"
                  name="withdrawalMethod"
                  className="form-input input"
                  value={coins}
                  onChange={(e) => {
                    setWithdraw({
                      ...withdraw,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />

                <div className="bank">
                  <h5>Withdraw Amount</h5>
                  <input
                    type="text"
                    name="amount"
                    className="form-input input"
                    value={withdraw.amount}
                    onChange={(e) => {
                      setWithdraw({
                        ...withdraw,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                  <span
                    style={{
                      color: 'var(--primary-700)',
                      fontSize: '1rem',
                    }}
                  >
                    Min amount & 0.00 Max amount 59999
                  </span>

                  <h5 className="wall">Wallet Address</h5>
                  <input
                    readOnly
                    type="text"
                    name="walletAddress"
                    className="form-input input"
                    value={walletAddress}
                    onChange={(e) => {
                      setWithdraw({
                        ...withdraw,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                </div>

                <button type="submit" className="btn">
                  {isLoading}
                </button>
              </div>
            </form>
          </article>

          <article className="withdraw-pending">
            <div className="pending">
              <h3>Pending withdrawal</h3>
              {withdrawAmt.status === 'processing' ? (
                <p>{formatter.format(Number(withdrawAmt.amount).toFixed(2))}</p>
              ) : (
                <p>{formatter.format(Number(0).toFixed(2))}</p>
              )}
            </div>

            <div className="pending">
              <h3>Withdraw Instruction</h3>
            </div>

            <div className="pending">
              <h3>Payment may take 15 Minutes to process. Thank you!</h3>
            </div>
          </article>
        </section>
      </div>
      <FooterMobile />
    </Wrapper>
  );
};
export default Withdraw;
