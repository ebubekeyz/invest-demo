import { useEffect, useState } from 'react';
import Wrapper from '../assets/wrappers/EditUser';
import Navbar2 from '../components/Navbar2';
import Sidebar2 from '../components/Sidebar2';
import { mainFetch } from '../utils';
import { toast } from 'react-toastify';
import FooterMobile2 from '../components/FooterMobile2';

const AdminSettings = () => {
  const [isLoad1, setIsLoad1] = useState('update');

  const [id, setId] = useState('');
  const showUser = async () => {
    try {
      const response = await mainFetch.get('/api/v1/users/showMe', {
        withCredentials: true,
      });
      const { userId } = response.data.user;
      setId(userId);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    showUser();
  }, []);

  console.log(id);

  const [update, setUpdate] = useState({
    fullName: '',
    username: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    state: '',
  });
  const [pass, setPass] = useState({
    newPassword: '',
    password: '',
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoad1('updating...');
      const response = await mainFetch.patch(
        `/api/v1/users/${id}`,
        {
          fullName: update.fullName,
          username: update.username,
          //   email: update.email,
          phone: update.phone,
          city: update.city,
          state: update.state,
          country: update.country,
        },
        {
          withCredentials: true,
        }
      );
      toast.success('Update Successful');
      setUpdate({
        fullName: '',
        username: '',
        email: '',
        phone: '',
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
        <Sidebar2 />
        <section className="edit">
          <form onSubmit={handleSubmit} className="updateForm">
            <h4>Update User</h4>
            <div className="inner">
              <label htmlFor="fullName" className="label">
                FullName
              </label>
              <input
                type="text"
                className="input"
                name="fullName"
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
        </section>
      </div>

      <FooterMobile2 />
    </Wrapper>
  );
};
export default AdminSettings;
