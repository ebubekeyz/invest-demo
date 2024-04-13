import { useEffect, useState } from 'react';
import { mainFetch } from '../utils';
import { toast } from 'react-toastify';
import Wrapper from '../assets/wrappers/WalletAddress';
import Navbar3 from '../components/Navbar3';
import Sidebar2 from '../components/Sidebar2';

const WalletAddress = () => {
  const [isLoad1, setIsLoad1] = useState('update');
  const [isLoad2, setIsLoad2] = useState('update');
  const [isLoad3, setIsLoad3] = useState('update');
  const [isLoad4, setIsLoad4] = useState('update');
  const [isLoad5, setIsLoad5] = useState('update');
  const [copyText, setCopyText] = useState({
    bitcoin: '',
    etherium: '',
    usdt: '',
    tron: '',
    bnb: '',
    id: '',
  });

  const [copyText2, setCopyText2] = useState({
    bitcoin: '',
    etherium: '',
    usdt: '',
    tron: '',
    bnb: '',
  });

  const walletFunc = async () => {
    try {
      const response = await mainFetch.get('/api/v1/wallet', {
        withCredentials: true,
      });

      const wall = response.data.wallet;
      const num = wall.length - 1;

      const { _id, btc, eth, usdt, tron, bnb } = wall[num];

      setCopyText({
        bitcoin: btc,
        etherium: eth,
        usdt: usdt,
        tron: tron,
        bnb: bnb,
        id: _id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    walletFunc();
  }, []);

  const handleSubmit1 = async (e) => {
    e.preventDefault();

    try {
      setIsLoad1('updating...');
      const response = await mainFetch.patch(
        `/api/v1/wallet/${copyText.id}`,
        {
          btc: copyText2.bitcoin,
        },
        {
          withCredentials: true,
        }
      );

      toast.success('Update Successful');

      setIsLoad1('update complete');
    } catch (error) {
      console.log(error);
      toast.error('Network error');
      setIsLoad1('update');
    }
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();

    try {
      setIsLoad2('updating...');
      const response = await mainFetch.patch(
        `/api/v1/wallet/${copyText.id}`,
        {
          eth: copyText2.etherium,
        },
        {
          withCredentials: true,
        }
      );

      toast.success('Update Successful');

      setIsLoad2('update complete');
    } catch (error) {
      console.log(error);
      toast.error('Network error');
      setIsLoad2('update');
    }
  };

  const handleSubmit3 = async (e) => {
    e.preventDefault();

    try {
      setIsLoad2('updating...');
      const response = await mainFetch.patch(
        `/api/v1/wallet/${copyText.id}`,
        {
          usdt: copyText2.usdt,
        },
        {
          withCredentials: true,
        }
      );

      toast.success('Update Successful');

      setIsLoad3('update complete');
    } catch (error) {
      console.log(error);
      toast.error('Network error');
      setIsLoad3('update');
    }
  };

  const handleSubmit4 = async (e) => {
    e.preventDefault();

    try {
      setIsLoad4('updating...');
      const response = await mainFetch.patch(
        `/api/v1/wallet/${copyText.id}`,
        {
          tron: copyText2.tron,
        },
        {
          withCredentials: true,
        }
      );

      toast.success('Update Successful');

      setIsLoad4('update complete');
    } catch (error) {
      console.log(error);
      toast.error('Network error');
      setIsLoad4('update');
    }
  };

  const handleSubmit5 = async (e) => {
    e.preventDefault();

    try {
      setIsLoad5('updating...');
      const response = await mainFetch.patch(
        `/api/v1/wallet/${copyText.id}`,
        {
          bnb: copyText2.bnb,
        },
        {
          withCredentials: true,
        }
      );

      toast.success('Update Successful');

      setIsLoad5('update complete');
    } catch (error) {
      console.log(error);
      toast.error('Network error');
      setIsLoad5('update');
    }
  };

  console.log();
  return (
    <Wrapper>
      <Navbar3 />

      <div className="container">
        <Sidebar2 />
        <section className="admin">
          <div className="balance">
            <form onSubmit={handleSubmit1} className="updateForm">
              <h4>Change BTC Address</h4>
              <div className="inner">
                <label htmlFor="bitcoin" className="label">
                  Bitcoin
                </label>
                <input
                  type="text"
                  className="input"
                  name="bitcoin"
                  placeholder={copyText.bitcoin}
                  value={copyText2.bitcoin}
                  onChange={(e) => {
                    setCopyText2({
                      ...copyText2,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
              </div>

              <button type="submit" className="btn">
                {isLoad1}
              </button>
            </form>

            <form onSubmit={handleSubmit2} className="updateForm">
              <h4>Change Etherium Address</h4>

              <div className="inner">
                <label htmlFor="etherium" className="label">
                  Etherium
                </label>
                <input
                  type="text"
                  className="input"
                  name="etherium"
                  placeholder={copyText.etherium}
                  value={copyText2.etherium}
                  onChange={(e) => {
                    setCopyText2({
                      ...copyText2,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
              </div>

              <button type="submit" className="btn">
                {isLoad2}
              </button>
            </form>

            <form onSubmit={handleSubmit3} className="updateForm">
              <h4>Change USDT Address</h4>

              <div className="inner">
                <label htmlFor="usdt" className="label">
                  USDT
                </label>
                <input
                  type="text"
                  className="input"
                  name="usdt"
                  placeholder={copyText.usdt}
                  value={copyText2.usdt}
                  onChange={(e) => {
                    setCopyText2({
                      ...copyText2,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
              </div>

              <button type="submit" className="btn">
                {isLoad3}
              </button>
            </form>

            <form onSubmit={handleSubmit4} className="updateForm">
              <h4>Change TRON Address</h4>

              <div className="inner">
                <label htmlFor="tron" className="label">
                  TRON
                </label>
                <input
                  type="text"
                  className="input"
                  name="tron"
                  placeholder={copyText.tron}
                  value={copyText2.tron}
                  onChange={(e) => {
                    setCopyText2({
                      ...copyText2,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
              </div>

              <button type="submit" className="btn">
                {isLoad4}
              </button>
            </form>

            <form onSubmit={handleSubmit5} className="updateForm">
              <h4>Change BNB Address</h4>

              <div className="inner">
                <label htmlFor="bnb" className="label">
                  BNB
                </label>
                <input
                  type="text"
                  className="input"
                  name="bnb"
                  placeholder={copyText.bnb}
                  value={copyText2.bnb}
                  onChange={(e) => {
                    setCopyText2({
                      ...copyText2,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
              </div>

              <button type="submit" className="btn">
                {isLoad5}
              </button>
            </form>
          </div>
        </section>
      </div>
    </Wrapper>
  );
};
export default WalletAddress;
