import Wrapper from '../assets/wrappers/Deposit';
import img1 from '../assets/bitcoin-img.png';
import img2 from '../assets/etherum-img.png';
import img3 from '../assets/usdt.png';
import img4 from '../assets/tron.png';
import img5 from '../assets/bnb.png';
import Navbar2 from '../components/Navbar2';
import Sidebar from '../components/Sidebar';
import { LiaTimesSolid } from 'react-icons/lia';
import { useEffect, useState } from 'react';
import { mainFetch } from '../utils';
import { toast } from 'react-toastify';
import { FaArrowLeft } from 'react-icons/fa';
import FooterMobile from '../components/FooterMobile';
import { useNavigate } from 'react-router-dom';

const Deposit = () => {
  const [coinType, setCoinType] = useState({
    btc: 'BTC',
    eth: 'ETH',
    usdt: 'usdt',
    tron: 'TRON',
    bnb: 'BNB',
  });

  const [open, setOpen] = useState(false);
  const nav = useNavigate();

  const [investId, setInvestId] = useState('');
  const [investAmount, setInvestAmount] = useState('');
  const [max, setMax] = useState('');

  const showInvestId = async () => {
    try {
      const res = await mainFetch.get('/api/v1/invest', {
        withCredentials: true,
      });
      const investment = res.data.invest;
      const num = investment.length - 1;
      const { _id, amount, max } = investment[num];
      setInvestId(_id);
      setInvestAmount(amount);
      setMax(max);
    } catch (error) {
      console.log(error);
      console.log(error.res.data.msg);
    }
  };

  useEffect(() => {
    showInvestId();
  }, [showInvestId]);

  const [coinId, setCoinId] = useState('');
  const showCoinId = async () => {
    try {
      const res = await mainFetch.get('/api/v1/coin', {
        withCredentials: true,
      });
      const coinMain = res.data.coin;
      const num = coinMain.length - 1;
      const { _id } = coinMain[num];
      setCoinId(_id);
    } catch (error) {
      console.log(error);
      console.log(error.res.data.msg);
    }
  };

  useEffect(() => {
    showCoinId();
  }, [showCoinId]);

  const handleCoin1 = async (e) => {
    e.preventDefault();
    try {
      const response = await mainFetch.post(
        '/api/v1/coin',
        { coinType: coinType.btc, invest: investId },
        { withCredentials: true }
      );

      setOpen(true);
    } catch (error) {
      toast.error('Please select an investment plan');
      nav('/investDash');
      console.log(error);
      console.log(error.response.data.msg);
    }
  };

  const handleCoin2 = async (e) => {
    e.preventDefault();
    try {
      const response = await mainFetch.post(
        '/api/v1/coin',
        { coinType: coinType.eth, invest: investId },
        { withCredentials: true }
      );

      setOpen(true);
    } catch (error) {
      toast.error('Please select an investment plan');
      nav('/investDash');
      console.log(error);
      console.log(error.response.data.msg);
    }
  };

  const handleCoin3 = async (e) => {
    e.preventDefault();
    try {
      const response = await mainFetch.post(
        '/api/v1/coin',
        { coinType: coinType.usdt, invest: investId },
        { withCredentials: true }
      );

      setOpen(true);
    } catch (error) {
      nav('/investDash');
      toast.error('Please select an investment plan');
      console.log(error);
      console.log(error.response.data.msg);
    }
  };

  const handleCoin4 = async (e) => {
    e.preventDefault();
    try {
      const response = await mainFetch.post(
        '/api/v1/coin',
        { coinType: coinType.tron, invest: investId },
        { withCredentials: true }
      );

      setOpen(true);
    } catch (error) {
      nav('/investDash');
      toast.error('Please select an investment plan');
      console.log(error);
      console.log(error.response.data.msg);
    }
  };

  const handleCoin5 = async (e) => {
    e.preventDefault();
    try {
      const response = await mainFetch.post(
        '/api/v1/coin',
        { coinType: coinType.bnb, invest: investId },
        { withCredentials: true }
      );

      setOpen(true);
    } catch (error) {
      nav('/investDash');
      toast.error('Please select an investment plan');
      console.log(error);
      console.log(error.response.data.msg);
    }
  };

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  const [isLoading, setIsLoading] = useState('Deposit now');
  const [amountMain, setAmountMain] = useState({
    amount: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (amountMain.amount < investAmount) {
      toast.error('Wrong Amount Selected');
      return;
    }
    if (amountMain.amount > max) {
      toast.error('Wrong Amount Selected');
      return;
    }
    try {
      setIsLoading('Depositing..');
      const response = await mainFetch.post(
        '/api/v1/amount',
        { amount: amountMain.amount, coin: coinId },
        { withCredentials: true }
      );

      setAmountMain({
        amount: '',
      });
      setIsLoading('Deposited..');
      toast.success('Deposit Successful');
      nav('/bitcoin');
    } catch (error) {
      console.log(error);
      toast.success(error.response.data.msg);
    }
  };

  const backHandler = () => {
    window.history.back();
  };

  const condition = `Min Amount: ${investAmount}, Max Amount: ${max}`;
  return (
    <Wrapper>
      <Navbar2 />
      <div className="container">
        <Sidebar />
        <section className="deposit">
          <article className="top2 top">
            <h4>Deposit</h4>

            <div className="top-inner">
              <span className="space">
                {' '}
                <FaArrowLeft className="back-icon" onClick={backHandler} />
              </span>
              <span className="back">Back</span>
            </div>
          </article>
          <div id="card">
            <article>
              <img src={img1} className="deposit-img img" alt="bitcoin" />
              <h3 className="deposit-text">BITCOIN</h3>
              <button onClick={handleCoin1} className="btn">
                Pay now
              </button>
            </article>

            <article>
              <img src={img2} alt="etherum" className="deposit-img img" />
              <h3 className="deposit-text">ETHERUM</h3>
              <button onClick={handleCoin2} className="btn">
                Pay now
              </button>
            </article>
            <article>
              <img src={img3} alt="USDT" className="deposit-img img" />
              <h3 className="deposit-text">usdtCOIN</h3>
              <button onClick={handleCoin3} className="btn">
                Pay now
              </button>
            </article>
            <article>
              <img src={img4} alt="TRON" className="deposit-img img" />
              <h3 className="deposit-text">TRON</h3>
              <button onClick={handleCoin4} className="btn">
                Pay now
              </button>
            </article>
            <article>
              <img src={img5} alt="bnb" className="deposit-img img" />
              <h3 className="deposit-text">BNB</h3>
              <button onClick={handleCoin5} className="btn">
                Pay now
              </button>
            </article>
          </div>

          {open && (
            <div className="deposit-form section-center">
              <article className="form-main">
                <article className="top">
                  <h4>Deposit amount</h4>

                  <div className="top-inner">
                    <span className="space">
                      {' '}
                      <LiaTimesSolid
                        onClick={closeModal}
                        className="close-icon"
                      />
                    </span>
                  </div>
                </article>

                <form onSubmit={handleSubmit}>
                  <div className="form-container">
                    <label htmlFor="amount" className="label">
                      Amount
                    </label>

                    <input
                      type="text"
                      className="input"
                      name="amount"
                      placeholder={condition}
                      value={amountMain.amount}
                      onChange={(e) => {
                        setAmountMain({
                          ...amountMain,
                          [e.target.name]: e.target.value,
                        });
                      }}
                    />
                  </div>

                  <div className="btn-info">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="deposit-btn btn"
                    >
                      close
                    </button>

                    <button type="submit" className="deposit-btn btn">
                      {isLoading}
                    </button>
                  </div>
                </form>
              </article>
            </div>
          )}
        </section>
      </div>

      <FooterMobile />
    </Wrapper>
  );
};
export default Deposit;
