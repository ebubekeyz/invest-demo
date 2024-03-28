import { useEffect, useState } from 'react';
import Wrapper from '../assets/wrappers/ChangePassword';
import { mainFetch } from '../utils';
import { toast } from 'react-toastify';
import FooterMobile from '../components/FooterMobile';
import { FaArrowLeft } from 'react-icons/fa';

const ChangePassword = () => {
  const [isLoading, setIsLoading] = useState('Update Password');
  const [password, setPassword] = useState({
    oldPassword: '',
    newPassword: '',
  });

  const [id, setId] = useState({
    userId: '',
  });

  const showId = async () => {
    try {
      const response = await mainFetch.get('/api/v1/users/showMe', {
        withCredentials: true,
      });

      const { userId } = response.data.user;
      setId({
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
      setIsLoading('updating...');
      const response = await mainFetch.patch(
        '/api/v1/users/updateUserPassword',
        {
          oldPassword: password.oldPassword,
          newPassword: password.newPassword,
        },
        { withCredentials: true }
      );

      setPassword({
        oldPassword: '',
        newPassword: '',
      });
      setIsLoading('Updated');
      toast.success('password updated successfully');
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };

  const backHandler = () => {
    window.history.back();
  };
  return (
    <Wrapper>
      <section className="section-center">
        <article className="top">
          <h4>Password</h4>

          <div className="top-inner">
            <span className="space">
              {' '}
              <FaArrowLeft className="back-icon" onClick={backHandler} />
            </span>
            <span className="back">Back</span>
          </div>
        </article>
        <article className="form-main">
          <h3>Change password</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-container">
              <label htmlFor="oldPassword" className="label">
                Old Password
              </label>
              <input
                type="password"
                className="input"
                name="oldPassword"
                value={password.oldPassword}
                onChange={(e) => {
                  setPassword({
                    ...password,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </div>

            <div className="form-container">
              <label htmlFor="newPassword" className="label">
                New Password
              </label>
              <input
                type="password"
                className="input"
                name="newPassword"
                value={password.newPassword}
                onChange={(e) => {
                  setPassword({
                    ...password,
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
      </section>
      <FooterMobile />
    </Wrapper>
  );
};
export default ChangePassword;
