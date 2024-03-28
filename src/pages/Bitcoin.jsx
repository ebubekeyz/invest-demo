import { LiaTimesSolid } from 'react-icons/lia';
import Wrapper from '../assets/wrappers/Bitcoin';
import FooterMobile from '../components/FooterMobile';
import { FaArrowLeft } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { mainFetch } from '../utils';
import copy from 'copy-to-clipboard';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar2 from '../components/Navbar2';
import Sidebar from '../components/Sidebar';

const Bitcoin = () => {
  const [copyText, setCopyText] = useState({
    bitcoin: '16xNKb45QAydgWGBH5a6MWMyRiWEHgHv25',
    etherium: '0xdcfde8b9f4a1926b9154dd630779bc79a7701dce',
    usdt: 'TKxYyuuUFKhmxKXy9SsPkd3dhzxP3NcvfT',
    tron: 'THTEEzjYRxQtfF6UhrQVstzW7Gv5XeiBg3',
    bnb: '0xdcfde8b9f4a1926b9154dd630779bc79a7701dce',
  });

  const nav = useNavigate();

  const [amountId, setAmountId] = useState('');

  const showAmountId = async () => {
    try {
      const res = await mainFetch.get('/api/v1/amount', {
        withCredentials: true,
      });
      const amountMajor = res.data.amount;
      const num = amountMajor.length - 1;
      const { _id } = amountMajor[num];
      setAmountId(_id);
    } catch (error) {
      console.log(error);
      console.log(error.res.data.msg);
    }
  };

  useEffect(() => {
    showAmountId();
  }, [showAmountId]);

  const copyBitcoin = () => {
    copy(copyText.bitcoin);
    toast.success(`You have copied ${copyText.bitcoin}`);
  };
  const copyEtherium = () => {
    copy(copyText.etherium);
    toast.success(`You have copied ${copyText.etherium}`);
  };
  const copyUsdt = () => {
    copy(copyText.usdt);
    toast.success(`You have copied ${copyText.usdt}`);
  };
  const copyTron = () => {
    copy(copyText.tron);
    toast.success(`You have copied ${copyText.tron}`);
  };
  const copyBnb = () => {
    copy(copyText.bnb);
    toast.success(`You have copied ${copyText.bnb}`);
  };
  let [receipt, setReceipt] = useState();
  let [imageValue, setImageValue] = useState(null);
  const [isLoading, setIsLoading] = useState('Send Receipt');

  const submitReceipt = async (e) => {
    e.preventDefault();
    const imageFile = e.target.files[0];

    const formData = new FormData();

    formData.append('image', imageFile);
    try {
      const response = await mainFetch.post('/api/v1/receipt', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const { src } = response.data.image;
      setImageValue(src);
    } catch (error) {
      setImageValue(null);
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading('Sending Receipt...');
      const response = await mainFetch.post(
        '/api/v1/payReceipt',
        { receipt: imageValue, amount: amountId },
        { withCredentials: true }
      );

      const { receipt } = response.data.payReceipt;

      setIsLoading('Receipt Sent');
      toast.success('Receipt Sent Successfully');
    } catch (error) {
      // nav('/investment');
      console.log(error);
      setIsLoading('Send Receipt');
      toast.error(error.response.data.msg);
    }
  };

  const backHandler = () => {
    window.history.back();
  };
  return (
    <Wrapper>
      <Navbar2 />
      <div className="container">
        <Sidebar />
        <div className="section-center">
          <article className="top2 top">
            <h4>Payment Informations</h4>

            <div className="top-inner">
              <span className="space">
                {' '}
                <FaArrowLeft onClick={backHandler} className="back-icon" />
              </span>
              <span className="back">Back</span>
            </div>
          </article>

          <article className="withdraw-pending">
            <div className="pending">
              <h3>Pending Information</h3>
              <p>To guarantee a smooth and continuous service experience,</p>
              <p>
                We kindly ask that all forthcoming deposits be directed to one
                of the subsequent wallet addresses:
              </p>
            </div>

            <div className="pending">
              <h3 className="coin">BITCOIN ADDRESS</h3>
              <p id="address">{copyText.bitcoin}</p>
              <button onClick={copyBitcoin} type="button" className="btn">
                Copy
              </button>
            </div>

            <div className="pending">
              <h3 className="coin">ETHERIUM ADDRESS</h3>

              <p id="address">{copyText.etherium}</p>
              <button onClick={copyEtherium} type="button" className="btn">
                Copy
              </button>
            </div>

            <div className="pending">
              <h3 className="coin">usdt ADDRESS</h3>
              <p id="address">{copyText.usdt}</p>
              <button onClick={copyUsdt} type="button" className="btn">
                Copy
              </button>
            </div>

            <div className="pending">
              <h3 className="coin">TRON ADDRESS</h3>
              <p id="address">{copyText.tron}</p>
              <button onClick={copyTron} type="button" className="btn">
                Copy
              </button>
            </div>
            <div className="pending">
              <h3 className="coin">BNB ADDRESS</h3>
              <p id="address">{copyText.bnb}</p>
              <button onClick={copyBnb} type="button" className="btn">
                Copy
              </button>
            </div>

            <div className="pending">
              <h3>Requirements</h3>
            </div>

            <div className="pending">
              <form onSubmit={handleSubmit} className="receipt-form">
                <input
                  onChange={submitReceipt}
                  type="file"
                  name="receipt"
                  value={receipt}
                />
                <button type="submit" className="receipt-btn btn">
                  {isLoading}
                </button>
              </form>
            </div>
          </article>
        </div>
      </div>
      <FooterMobile />
    </Wrapper>
  );
};
export default Bitcoin;
