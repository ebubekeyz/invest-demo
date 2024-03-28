import { Form, Link, useNavigation, useParams } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Login';
import { useState } from 'react';
import logo from '../assets/logo.png';
import { toast } from 'react-toastify';
import { mainFetch } from '../utils';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const params = window.location.search;
  const id = new URLSearchParams(params).get('id');
  console.log(id);

  const resetUrl = 'api/v1/auth';
  try {
    const response = await mainFetch.patch(`/api/v1/auth/${id}`, data);
    console.log(data);
    toast.success('Password successfully reset. Please login');
    return redirect('/login');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    console.log(error);
    return error;
  }
};

const ResetPassword = () => {
  const [date, setDate] = useState(new Date());
  const mainDate = date.getFullYear();

  const navigation = useNavigation();
  const submitting = navigation.state === 'submitting';
  return (
    <Wrapper>
      <div
        style={{
          position: 'relative',
          height: '100vh',
          width: '100vw',
          background: 'rgb(39, 37, 37)',
        }}
      >
        <Form
          method="PATCH"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <h2
            className="logo"
            style={{
              zIndex: '4',
              textAlign: 'center',
              fontSize: '2rem',
              marginBottom: '1rem',
            }}
          >
            <Link to="/">
              <img src={logo} alt="logo" className="logo2" />
            </Link>
          </h2>
          <h4 style={{ color: 'var(--grey-400)' }}>Reset Password </h4>
          <div className="form-control">
            <input
              type="text "
              className="form-input"
              name="newPassword"
              placeholder="New Password"
            />
            <input
              type="password "
              className="form-input"
              name="password"
              placeholder="Confirm Password"
            />
            <button type="submit" className="btn">
              {submitting ? 'submitting' : 'Reset Password'}
            </button>
            <p>
              <Link to="/login" className="reg">
                Login{' '}
              </Link>
            </p>
            <p style={{ marginTop: '1rem' }}>
              © Copyright &nbsp;<span>{mainDate}&nbsp;</span> Trexhoding.com
              &nbsp; All Rights Reserved.
            </p>
          </div>
        </Form>
      </div>
    </Wrapper>
  );
};
export default ResetPassword;
