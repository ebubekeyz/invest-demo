import { useEffect, useState } from 'react';
import Wrapper from '../assets/wrappers/AdminDeposit';
import FooterMobile2 from '../components/FooterMobile2';
import Sidebar2 from '../components/Sidebar2';
import { mainFetch } from '../utils';
import { Link } from 'react-router-dom';
import Navbar3 from '../components/Navbar3';
import DisplayDeposit from '../components/DisplayDeposit';
import DisplayButtons from '../components/DisplayButtons';

const AdminDeposit = () => {
  let [pages, setPages] = useState([]);
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);

  const paginate = (data) => {
    const itemsPerPage = 10;
    const numberOfPages = Math.ceil(data.length / itemsPerPage);

    const newData = Array.from({ length: numberOfPages }, (_, index) => {
      const start = index * itemsPerPage;
      return data.slice(start, start + itemsPerPage);
    });
    return newData;
  };

  const [deposit, setDeposit] = useState([]);
  const payReceiptFunc = async () => {
    try {
      const res = await mainFetch.get('/api/v1/payReceipt', {
        withCredentials: true,
      });

      setDeposit(res.data.payReceipt);
    } catch (error) {
      console.log(error);
      console.log(error.res.data.msg);
    }
  };

  useEffect(() => {
    payReceiptFunc();
  }, [payReceiptFunc]);

  //new

  let idd = 0;
  const filterPending = deposit.filter((item) => item.status === 'pending');
  const filterPaid = deposit.filter((item) => item.status === 'paid');

  const setPage = () => {
    setPages(paginate(filterPaid));
  };
  useEffect(() => {
    setPage();
  }, []);

  console.log(pages);

  let [btns, setBtns] = useState([]);

  btns = pages.map((_, pageIndex) => {
    return (
      <button
        id="page-btn"
        className={index === pageIndex ? 'active-btn' : 'null '}
        data-index={pageIndex}
      >
        {pageIndex + 1}
      </button>
    );
  });

  btns.push(<button className="next-btn">next</button>);
  btns.unshift(<button className="prev-btn">prev</button>);

  console.log(btns);

  return (
    <Wrapper>
      <Navbar3 />
      <div className="container">
        <Sidebar2 />
        <section className="deposit">
          <div className="table-wrapper">
            <table className="fl-table">
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Username</th>
                  <th>Coin</th>
                  <th>Plan</th>
                  <th>Amount</th>

                  <th>Receipt</th>
                  <th>status</th>
                  <th>Edit</th>
                  <th>Decline</th>
                </tr>
              </thead>
              <DisplayDeposit deposit={deposit} />
            </table>

            <div>{btns}</div>
          </div>
        </section>
      </div>
    </Wrapper>
  );
};
export default AdminDeposit;
