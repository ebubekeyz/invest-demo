import { useEffect, useRef, useState } from 'react';
import Wrapper from '../assets/wrappers/AdminDeposit';
import FooterMobile2 from '../components/FooterMobile2';
import Sidebar2 from '../components/Sidebar2';
import { mainFetch } from '../utils';
import { Link } from 'react-router-dom';
import Navbar2 from '../components/Navbar2';
import Navbar3 from '../components/Navbar3';

const AdminWithdraw = () => {
  const [withdraw, setWithdraw] = useState([]);
  const withdrawFunc = async () => {
    try {
      const res = await mainFetch.get('/api/v1/withdraw', {
        withCredentials: true,
      });

      setWithdraw(res.data.withdraw);
    } catch (error) {
      console.log(error);
      console.log(error.res.data.msg);
    }
  };

  useEffect(() => {
    withdrawFunc();
  }, []);
  console.log(withdraw);

  let idd = 0;

  //new
  return (
    <Wrapper>
      <Navbar3 />
      <div className="container">
        <Sidebar2 />
        <section className="deposit">
          <div className="table-wrapper">
            <table class="fl-table">
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Username</th>
                  <th>WithdrawalMethod</th>
                  <th>WalletAddress</th>
                  <th>Amount</th>
                  <th>status</th>
                  <th>Edit</th>
                  <th>Decline</th>
                </tr>
              </thead>
              <tbody>
                {withdraw
                  ? withdraw.map((item) => {
                      const {
                        _id: withdrawId,
                        withdrawalMethod,
                        amount,
                        walletAddress,
                        status,
                        user: { username },
                      } = item;
                      console.log(username);
                      item.idd = idd++;
                      const update = `/editWithdraw?id=${withdrawId}`;
                      const del = `/deleteWithdraw?id=${withdrawId}`;

                      return (
                        <tr>
                          <td>{idd}</td>
                          <td>{username}</td>
                          <td>{withdrawalMethod}</td>
                          <td>{walletAddress}</td>
                          <td>€{amount}</td>

                          <td
                            style={{
                              color: status === 'sent' ? 'green' : 'red',
                            }}
                          >
                            {status}
                          </td>
                          <td>
                            <Link to={update} type="button" className="btn">
                              Acknowledge
                            </Link>
                          </td>
                          <td>
                            <Link
                              to={del}
                              type="button"
                              style={{ background: 'red' }}
                              className="btn"
                            >
                              decline
                            </Link>
                          </td>
                        </tr>
                      );
                    })
                  : 'No Deposit'}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </Wrapper>
  );
};
export default AdminWithdraw;
