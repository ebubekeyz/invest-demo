import { useEffect, useState } from 'react';
import Wrapper from '../assets/wrappers/AdminDeposit';
import FooterMobile2 from '../components/FooterMobile2';
import Sidebar2 from '../components/Sidebar2';
import { mainFetch } from '../utils';
import { Link } from 'react-router-dom';
import Navbar2 from '../components/Navbar2';

const Messages = () => {
  const [message, setMessage] = useState([]);

  const messageFunc = async () => {
    try {
      const res = await mainFetch.get('/api/v1/contact', {
        withCredentials: true,
      });

      setMessage(res.data.contact);
    } catch (error) {
      console.log(error);
      console.log(error.res.data.msg);
    }
  };

  useEffect(() => {
    messageFunc();
  }, [messageFunc]);

  let idd = 0;
  return (
    <Wrapper>
      <Navbar2 />
      <div className="container">
        <Sidebar2 />
        <section className="deposit">
          <div className="table-wrapper">
            <table class="fl-table">
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Enquiry Type</th>
                  <th>Enquiry Description</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {message
                  ? message.map((item) => {
                      const {
                        _id: id,
                        name,
                        email,
                        enquiryType,
                        enquiryDescription,
                      } = item;

                      item.idd = idd++;
                      // const update = `/editWithdraw?id=${withdrawId}`;
                      const del = `/deleteMessage?id=${id}`;
                      return (
                        <tr>
                          <td>{idd}</td>
                          <td>{name}</td>
                          <td>{email}</td>
                          <td>{enquiryType}</td>
                          <td>{enquiryDescription}</td>

                          <td>
                            <Link
                              to={del}
                              type="button"
                              style={{ background: 'red' }}
                              className="btn"
                            >
                              delete
                            </Link>
                          </td>
                        </tr>
                      );
                    })
                  : 'No Message'}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <FooterMobile2 />
    </Wrapper>
  );
};
export default Messages;
