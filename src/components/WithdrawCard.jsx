import { Form } from 'react-router-dom';
import Wrapper from '../assets/wrappers/FooterMobile';
import { useState } from 'react';

const WithdrawCard = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <Wrapper>
      <article>
        <Form Formmethod="POST" className="withdrawForm">
          <div className="withdrawForm-inner">
            <h4>Current balance $ 200.00</h4>
            <h4>Withdraw Method</h4>
            <select
              className="form-input"
              id="select"
              name="bankName"
              style={{ color: 'var(--grey-400)' }}
            >
              <option value="Select Options">Select Options</option>
              <option value="Bank Transfer">Bank Transfer</option>
              <option value="Bitcoin">Bitcoin</option>
            </select>

            <div className="bank">
              <h5>Withdraw Amount</h5>
              <input type="text" name="amount" className="form-input input" />
              <span>Min amount & 5000.00 Max amount 100000.00</span>

              <h5>Bank Name</h5>
              <input type="text" name="bankName" className="form-input input" />

              <h5>Account Name</h5>
              <input
                type="text"
                name="accountName"
                className="form-input input"
              />

              <h5>Account Number</h5>
              <input
                type="text"
                name="accountNumber"
                className="form-input input"
              />

              <h5>Withdrawal Code</h5>
              <input
                type="text"
                name="withdrawalCode"
                className="form-input input"
              />

              <h5>Withdraw Charge</h5>
              <input
                type="text"
                name="charge"
                value=""
                className="form-input input"
              />
            </div>

            <div className="bitcoin">
              <h5>Withdraw Amount</h5>
              <input type="text" name="amount" className="form-input input" />

              <h5>Wallet Address</h5>
              <input
                type="text"
                name="walletAddress"
                className="form-input input"
              />

              <h5>Withdraw Code</h5>
              <input
                type="text"
                name="withdrawalCode"
                value=""
                className="form-input input"
              />

              <h5>Withdraw Charge</h5>
              <input
                type="text"
                name="charge"
                value=""
                className="form-input input"
              />
            </div>

            <button type="submit" className="btn">
              Withdraw now
            </button>
          </div>
        </Form>
      </article>
    </Wrapper>
  );
};
export default WithdrawCard;
