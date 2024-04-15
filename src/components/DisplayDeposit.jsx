const DisplayDeposit = ({ deposit }) => {
  return (
    <tbody>
      {deposit
        ? deposit.map((item) => {
            const {
              _id: id,
              createdAt,
              status,
              receipt,
              user: { username },
              amount: {
                _id: amountId,
                amount: amt,
                coin: {
                  coinType: coin,
                  invest: { percent: percent, days: days, plan: plan },
                },
              },
            } = item;
            console.log(username);
            item.idd = idd++;
            const update = `/editDeposit?id=${id}`;
            const del = `/deleteDeposit?id=${id}`;
            const bon = `/refBonus?id=${amountId}`;

            const url = 'https://trex-holding-server.com';

            const img = `${url}/${receipt}`;

            return (
              <tr>
                <td>{idd}</td>
                <td>{username}</td>
                <td>{coin}</td>
                <td>{plan}</td>
                <td>€{amt}</td>

                <td>
                  <img
                    src={img}
                    style={{
                      width: '5rem',
                      height: '2rem',
                      objectFit: 'contain',
                    }}
                  />
                </td>
                <td
                  style={{
                    color: status === 'paid' ? 'green' : 'red',
                  }}
                >
                  {status}
                </td>
                <td>
                  <Link
                    to={update}
                    type="button"
                    style={{ background: 'red' }}
                    className="btn"
                  >
                    Edit
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
  );
};
export default DisplayDeposit;
