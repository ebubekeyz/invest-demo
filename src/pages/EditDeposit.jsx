import { useState } from 'react';
import Wrapper from '../assets/wrappers/EditUser';
import Navbar2 from '../components/Navbar2';
import Sidebar2 from '../components/Sidebar2';
import { mainFetch } from '../utils';
import { toast } from 'react-toastify';

const EditDeposit = () => {
  const [update, setUpdate] = useState({
    status: 'paid',
  });
  const [isLoad, setIsLoad] = useState('Approve');

  const params = window.location.search;
  const id = new URLSearchParams(params).get('id');
  console.log(id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoad('Approving...');
      const response = await mainFetch.patch(
        `/api/v1/payReceipt/${id}`,
        {
          status: update.status,
        },
        { withCredentials: true }
      );

      setIsLoad('Payment Approved');
      toast.success('Payment Successfully Approved');
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
            <h4>Approve Payment</h4>
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

            <button type="submit" className="btn">
              {isLoad}
            </button>
          </form>
        </section>
      </div>
    </Wrapper>
  );
};
export default EditDeposit;
