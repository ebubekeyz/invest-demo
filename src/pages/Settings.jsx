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
  const [id, setId] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [coins, setCoins] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [isLoad1, setIsLoad1] = useState('update');
  const [isLoadUsername, setIsLoadUsername] = useState('update');
  const [isLoadCity, setIsLoadCity] = useState('update');
  const [isLoadState, setIsLoadState] = useState('update');
  const [isLoadPhone, setIsLoadPhone] = useState('update');
  const [isLoadAddress, setIsLoadAddress] = useState('update');
  const [isLoadCountry, setIsLoadCountry] = useState('update');
  const [isLoadEmail, setIsLoadEmail] = useState('update');

  const backHandler = () => {
    window.history.back();
  };

  const showFunc = async () => {
    try {
      const response = await mainFetch.get(`/api/v1/users/showMe`, {
        withCredentials: true,
      });

      setId(response.data.user.userId);
      setUsername(response.data.user.username);
      setFullName(response.data.user.fullName);
      setEmail(response.data.user.email);
      setCity(response.data.user.city);
      setState(response.data.user.state);
      setCountry(response.data.user.country);
      setPhone(response.data.user.phone);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    showFunc();
  }, []);

  const userFunc = async () => {
    try {
      const response = await mainFetch.get(`/api/v1/users/${id}`, {
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
      setIsLoadUsername('updating...');
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
      setIsLoadUsername('update complete');
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };

  const handleSubmitEmail = async (e) => {
    e.preventDefault();

    try {
      setIsLoadEmail('updating...');
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
      setIsLoadEmail('update complete');
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };

  const handleSubmitPhone = async (e) => {
    e.preventDefault();

    try {
      setIsLoadPhone('updating...');
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
      setIsLoadPhone('update complete');
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };

  // const handleSubmitCoins = async (e) => {
  //   e.preventDefault();

  //   try {
  //     setIsLoad1('updating...');
  //     const response = await mainFetch.patch(
  //       `/api/v1/users/${id}`,
  //       {
  //         coins: update.coins,
  //       },
  //       {
  //         withCredentials: true,
  //       }
  //     );
  //     toast.success('Update Successful');
  //     setUpdate({
  //       coins: '',
  //     });
  //     setIsLoad1('update complete');
  //   } catch (error) {
  //     console.log(error);
  //     toast.error(error.response.data.msg);
  //   }
  // };

  const handleSubmitWalletCoins = async (e) => {
    e.preventDefault();

    try {
      setIsLoadAddress('updating...');
      const response = await mainFetch.patch(
        `/api/v1/users/${id}`,
        {
          coins: update.coins,
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
      setIsLoadAddress('update complete');
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };

  const handleSubmitCity = async (e) => {
    e.preventDefault();

    try {
      setIsLoadCity('updating...');
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
      setIsLoadCity('update complete');
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };

  const handleSubmitState = async (e) => {
    e.preventDefault();

    try {
      setIsLoadState('updating...');
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
      setIsLoadState('update complete');
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };

  const handleSubmitCountry = async (e) => {
    e.preventDefault();

    try {
      setIsLoadCountry('updating...');
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
      setIsLoadCountry('update complete');
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

            <article className="adjust">
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
                  {isLoadUsername}
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
                  {isLoadEmail}
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
                  {isLoadPhone}
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
                  {isLoadCountry}
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
                  {isLoadCity}
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
                  {isLoadState}
                </button>
              </form>

              <form onSubmit={handleSubmitWalletCoins} className="updateForm">
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
                  {isLoadAddress}
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
