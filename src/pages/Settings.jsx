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
  const [isLoading, setIsLoading] = useState('update');
  const [user, setUser] = useState({
    // fullName: '',
    // username: '',
    // email: '',
    // phone: '',
    // country: '',
    coins: '',
    walletAddress: '',
    // city: '',
    // zip: '',
    // state: '',
  });

  const [id, setId] = useState({
    fullName: '',
    username: '',
    email: '',
    phone: '',
    country: '',
    coins: '',
    walletAddress: '',
    city: '',
    zip: '',
    state: '',
    userId: '',
  });
  const backHandler = () => {
    window.history.back();
  };

  const showId = async () => {
    try {
      const response = await mainFetch.get('/api/v1/users/showMe', {
        withCredentials: true,
      });

      const {
        userId,
        fullName,
        username,
        email,
        phone,
        country,
        city,
        coins,
        walletAddress,
        zip,
        state,
      } = response.data.user;
      setId({
        fullName: fullName,
        username: username,
        email: email,
        phone: phone,
        country: country,
        coins: coins,
        walletAddress: walletAddress,
        city: city,
        zip: zip,
        state: state,
        userId: userId,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    showId();
  }, [showId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading('Updating..');
      const response = await mainFetch.patch(
        `/api/v1/users/${id.userId}`,
        {
          fullName: user.fullName,
          username: user.username,
          //   email: user.email,
          // phone: user.phone,
          coins: user.coins,
          walletAddress: user.walletAddress,
          // country: user.country,
          // city: user.city,
          // zip: user.zip,
          // state: user.state,
        },
        {
          withCredentials: true,
        }
      );
      setIsLoading('Updated');
      setUser({
        // fullName: id.fullName,
        // username: id.username,
        // email: '',
        // phone: id.phone,
        // country: id.country,
        coins: id.coins,
        walletAddress: id.walletAddress,
        // city: id.city,
        // zip: id.zip,
        // state: id.state,
        // userId: id.userId,
      });
      toast.success('Update Successful');
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
      setIsLoading('update');
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
              <h4>Authentication</h4>

              <div className="top-inner">
                <span className="space">
                  {' '}
                  <FaArrowLeft className="back-icon" onClick={backHandler} />
                </span>
                <span className="back">Back</span>
              </div>
            </article>

            <article className="top2 top">
              <h3>Profile setting</h3>

              <Link to="/changePassword" className="top-inner">
                <span className="space">
                  {' '}
                  <GoShieldLock className="back-icon" onClick={backHandler} />
                </span>
                <span className="change">Change Password</span>
              </Link>
            </article>

            <article className="form-main">
              <form onSubmit={handleSubmit}>
                {/* <div className="form-container">
                  <label htmlFor="firstName" className="label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="input"
                    name="fullName"
                    placeholder={id.fullName}
                    value={user.fullName}
                    onChange={(e) => {
                      setUser({
                        ...user,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                </div>

                <div className="form-container">
                  <label htmlFor="username" className="label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="input"
                    name="username"
                    placeholder={id.username}
                    value={user.username}
                    onChange={(e) => {
                      setUser({
                        ...user,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                </div>

                <div className="form-container">
                  <label htmlFor="email" className="label">
                    Email
                  </label>
                  <input
                    readOnly
                    type="text"
                    className="input"
                    name="email"
                    placeholder={id.email}
                    value={user.email}
                    onChange={(e) => {
                      setUser({
                        ...user,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                </div>

                <div className="form-container">
                  <label htmlFor="phone" className="label">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="input"
                    name="phone"
                    placeholder={id.phone}
                    value={user.phone}
                    onChange={(e) => {
                      setUser({
                        ...user,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                </div>

                <div className="form-container">
                  <label htmlFor="country" className="label">
                    Country
                  </label>
                  <input
                    type="text"
                    className="input"
                    name="country"
                    placeholder={id.country}
                    value={user.country}
                    onChange={(e) => {
                      setUser({
                        ...user,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                </div>

                <div className="form-container">
                  <label htmlFor="city" className="label">
                    City
                  </label>
                  <input
                    type="text"
                    className="input"
                    name="city"
                    placeholder={id.city}
                    value={user.city}
                    onChange={(e) => {
                      setUser({
                        ...user,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                </div>

                <div className="form-container">
                  <label htmlFor="zip" className="label">
                    Zip
                  </label>
                  <input
                    type="text"
                    className="input"
                    name="zip"
                    placeholder={id.zip}
                    value={user.zip}
                    onChange={(e) => {
                      setUser({
                        ...user,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                </div>

                <div className="form-container">
                  <label htmlFor="state" className="label">
                    State
                  </label>
                  <input
                    type="text"
                    className="input"
                    name="state"
                    placeholder={id.state}
                    value={user.state}
                    onChange={(e) => {
                      setUser({
                        ...user,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                </div> */}

                <div className="form-container">
                  <label htmlFor="state" className="label">
                    Coins
                  </label>
                  <input
                    type="text"
                    className="input"
                    name="coins"
                    placeholder={id.coins}
                    value={user.coins}
                    onChange={(e) => {
                      setUser({
                        ...user,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                </div>

                <div className="form-container">
                  <label htmlFor="state" className="label">
                    Wallet Address
                  </label>
                  <input
                    type="text"
                    className="input"
                    name="walletAddress"
                    placeholder={id.walletAddress}
                    value={user.walletAddress}
                    onChange={(e) => {
                      setUser({
                        ...user,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                </div>

                <div className="btn-info">
                  <button type="submit" className="update-btn btn">
                    {isLoading}
                  </button>
                </div>
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
