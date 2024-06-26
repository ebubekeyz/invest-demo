import { useState } from 'react';
import Wrapper from '../assets/wrappers/EditUser';
import Navbar2 from '../components/Navbar2';
import Sidebar2 from '../components/Sidebar2';
import { mainFetch } from '../utils';
import { toast } from 'react-toastify';

const EditWithdraw = () => {
  const [isLoad, setIsLoad] = useState('confirm');
  const [update, setUpdate] = useState({
    status: 'sent',
    withdrawalCode: '',
  });

  const params = window.location.search;
  const id = new URLSearchParams(params).get('id');
  console.log(id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoad('confirming...');

      const response = await mainFetch.patch(
        `/api/v1/withdraw/${id}`,
        {
          status: update.status,
          withdrawalCode: update.withdrawalCode,
        },
        { withCredentials: true }
      );

      setIsLoad('confirmed');
      toast.success('withdrawal Successfully confirmed');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Wrapper>
      <Navbar2 />
      <div className="container">
        <Sidebar2 />
        <section className="edit">
          <form onSubmit={handleSubmit} className="updateForm">
            <h4>Confirm Withdrawal</h4>
            <div className="inner">
              <label htmlFor="status" className="label">
                Status
              </label>
              <input
                type="text"
                className="input"
                name="status"
                value={update.status}
                onChange={(e) => {
                  setUpdate({ ...update, [e.target.name]: e.target.value });
                }}
              />
            </div>

            <div className="inner">
              <label htmlFor="withdrawalCode" className="label">
                WithdrawalBatch
              </label>
              <input
                type="text"
                className="input"
                name="withdrawalCode"
                value={update.withdrawalCode}
                onChange={(e) => {
                  setUpdate({ ...update, [e.target.name]: e.target.value });
                }}
              />
            </div>

            <button type="submit" className="btn">
              {isLoad}
            </button>
          </form>
        </section>
      </div>
    </Wrapper>
  );
};
export default EditWithdraw;
