import { useState, useEffect } from 'react';
import Wrapper from '../assets/wrappers/Members';
import FooterMobile from '../components/FooterMobile';
import Navbar2 from '../components/Navbar2';
import Sidebar2 from '../components/Sidebar2';
import { mainFetch } from '../utils';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Navbar3 from '../components/Navbar3';
import MembersNavbar from '../components/MembersNavbar';

const Members = () => {
  const [user, setUser] = useState([]);

  const userFunc = async () => {
    try {
      const response = await mainFetch.get('/api/v1/users', {
        withCredentials: true,
      });

      setUser(response.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userFunc();
  }, [userFunc]);

  //new
  let idd = 0;

  // search
  const [search, setSearch] = useState('');

  let filterUser = user.filter((item) => item.username === search);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Wrapper>
      <Navbar3 />

      <div className="container">
        <Sidebar2 />
        <section className="admin">
          <div class="search__container" id="search">
            <p class="search__title">Search Users</p>
            <input
              class="search__input"
              type="text"
              name="search"
              value={search}
              onChange={handleChange}
              placeholder="Search"
              id="search-input"
            />
          </div>

          <div className="table-wrapper">
            <table class="fl-table">
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                {search
                  ? filterUser.map((item) => {
                      item.idd = idd++;
                      const {
                        _id: id,
                        fullName,
                        username,
                        email,
                        phone,
                        city,
                        country,
                        status,
                        referralId,
                      } = item;
                      const dash = `/userDash?id=${id}`;

                      return (
                        <tr>
                          <td>{idd}</td>

                          <td className="td-pointer">
                            <Link to={dash} className="td-link">
                              {username}
                            </Link>
                          </td>

                          {/* <td
                            style={{
                              color: status === 'verified' ? 'green' : 'red',
                            }}
                          >
                            {status}
                          </td> */}
                        </tr>
                      );
                    })
                  : user.map((item) => {
                      item.idd = idd++;
                      const {
                        _id: id,
                        fullName,
                        username,
                        email,
                        phone,
                        city,
                        country,
                        status,
                        referralId,
                      } = item;
                      const dash = `/userDash?id=${id}`;

                      return (
                        <tr>
                          <td>{idd}</td>

                          <td className="td-pointer">
                            <Link to={dash} className="td-link">
                              {username}
                            </Link>
                          </td>

                          {/* <td
                            style={{
                              color: status === 'verified' ? 'green' : 'red',
                            }}
                          >
                            {status}
                          </td> */}
                        </tr>
                      );
                    })}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </Wrapper>
  );
};
export default Members;
