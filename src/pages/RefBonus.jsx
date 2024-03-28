import { useState } from 'react';
import Wrapper from '../assets/wrappers/EditUser';
import Navbar2 from '../components/Navbar2';
import Sidebar2 from '../components/Sidebar2';
import { mainFetch } from '../utils';
import { toast } from 'react-toastify';

const RefBonus = () => {
  const [amt, setAmt] = useState({
    amount: '',
    bonus: '',
  });
  const [isLoad, setIsLoad] = useState('change');

  const params = window.location.search;
  const id = new URLSearchParams(params).get('id');
  console.log(id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoad('changing...');
      const response = await mainFetch.patch(
        `/api/v1/amount/${id}`,
        {
          amount: amt.amount,
          bonus: amt.bonus,
        },
        { withCredentials: true }
      );

      setIsLoad('changed');
      toast.success('Amount and Bonus successfully updated');
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
              <label htmlFor="amount" className="label">
                Amount
              </label>
              <input
                type="text"
                className="input"
                name="amount"
                value={amt.amount}
                onChange={(e) => {
                  setAmt({ ...amt, [e.target.name]: e.target.value });
                }}
              />
            </div>

            <div className="inner">
              <label htmlFor="bonus" className="label">
                Bonus
              </label>
              <input
                type="text"
                className="input"
                name="bonus"
                value={amt.bonus}
                onChange={(e) => {
                  setAmt({ ...amt, [e.target.name]: e.target.value });
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
export default RefBonus;
