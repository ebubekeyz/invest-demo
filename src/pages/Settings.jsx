import { useEffect, useState } from 'react';
import Wrapper from '../assets/wrappers/Settings';
import { FaArrowLeft } from 'react-icons/fa6';
import { GoShieldLock } from 'react-icons/go';
import FooterMobile from '../components/FooterMobile';
import { mainFetch } from '../utils';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar2 from '../components/Navbar2';

const Settings = () => {
  const [isLoad1, setIsLoad1] = useState('update');
  const [update, setUpdate] = useState({
    fullName: '',
    username: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    state: '',
    coins: '',
    walletAddress: '',
  });

  const backHandler = () => {
    window.history.back();
  };

  const [userId, setUserId] = useState('');

  const showId = async () => {
    try {
      const response = await mainFetch.get('/api/v1/users/showMe', {
        withCredentials: true,
      });

      console.log(response.data.user);
      setUserId(response.data.user.userId);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    showId();
  }, [showId]);

  const [info, setInfo] = useState({
    fullName: '',
    city: '',
    state: '',
    walletAddress: '',
    coins: '',
    country: '',
    phone: '',
  });

  console.log(userId);

  const infoFetch = async () => {
    try {
      const response = await mainFetch.get(`/api/v1/users/${userId}`, {
        withCredentials: true,
      });

      setInfo({
        fullName: response.data.user.fullName,
        city: response.data.user.city,
        state: response.data.user.state,
        walletAddress: response.data.user.walletAddress,
        coins: response.data.user.coins,
        country: response.data.user.country,
        phone: response.data.user.phone,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    infoFetch();
  }, [infoFetch]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoad1('updating...');
      const response = await mainFetch.patch(
        `/api/v1/users/${userId}`,
        {
          fullName: update.fullName,
          // username: update.username,
          //   email: update.email,
          phone: update.phone,
          city: update.city,
          state: update.state,
          country: update.country,
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
        fullName: '',
        // username: '',
        // email: '',
        phone: '',
        coins: '',
        walletAddress: '',
        country: '',
        city: '',
        state: '',
      });
      setIsLoad1('update complete');
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };

  return (
    <Wrapper>
      <Navbar2 />

      <div className="container">
        <Sidebar />
        <section className="settings">
          <div className="section-center">
            <article className="top">
              <h4>Profile Settings</h4>

              <div className="top-inner">
                <span className="space">
                  {' '}
                  <FaArrowLeft className="back-icon" onClick={backHandler} />
                </span>
                <span className="back">Back</span>
              </div>
            </article>

            <article className="top">
              <Link to="/changePassword" className="top-inner">
                <span className="change">
                  {' '}
                  <GoShieldLock className="back-icon" onClick={backHandler} />
                  Change Password
                </span>
              </Link>
            </article>

            <article>
              <form onSubmit={handleSubmit} className="updateForm">
                <h4>Update User</h4>
                <div className="inner">
                  <label htmlFor="fullName" className="label">
                    FullName
                  </label>
                  <input
                    type="text"
                    className="input"
                    placeholder={info.fullName}
                    name="fullName"
                    value={update.name}
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
                    placeholder={info.phone}
                    name="phone"
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
                    placeholder={info.country}
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
                    placeholder={info.city}
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
                    placeholder={info.state}
                    name="state"
                    value={update.state}
                    onChange={(e) => {
                      setUpdate({ ...update, [e.target.name]: e.target.value });
                    }}
                  />
                </div>

                <div className="inner">
                  <label htmlFor="state" className="label">
                    Coins
                  </label>
                  <input
                    type="text"
                    className="input"
                    placeholder={info.coins}
                    name="coins"
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
                    placeholder={info.walletAddress}
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
            </article>
          </div>
        </section>
      </div>

      <FooterMobile />
    </Wrapper>
  );
};
export default Settings;
