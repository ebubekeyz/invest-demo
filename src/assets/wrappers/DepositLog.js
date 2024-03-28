import styled from 'styled-components';

const Wrapper = styled.section`
 background: rgb(39, 37, 37);
  padding-bottom: 15rem;
  
  .back {
    color: var(--grey-400);
  }
.receipt {
    width: 1rem;
}
  .space {
    margin-right: 0.6rem;
  }

  .top-inner {
    display: flex;
    align-self: center;
  }
  .top {
    display: flex;
    justify-content: space-between;
    place-items: center;
    align-self: center;
    border-bottom: 1px solid var(--grey-800);
    padding-bottom: 1.2rem;
  }

  .back-icon,
  .back {
    color: white;
  }
  .top-inner {
    cursor: pointer;
  }
  .top h4 {
    color: white;
    font-size: 1rem;
  }
  .top2 {
    display: flex;
    justify-content: space-between;

    border-bottom: 1px solid var(--grey-800);
    padding-top: 2rem;
    width: 90vw;
    margin: 0 auto;
  }
  .withdraw-pending {
    border: 0.1px solid var(--grey-600);
    padding-bottom: 2rem;
    color: white;

    background: rgb(19, 17, 17);
    border-radius: 0.4rem;
  }
  .pending h4 {
    font-weight: 700;
  }
  .pending h3 {
    font-size: 1rem;
  }
  .pending {
    border-bottom: 1px solid var(--grey-700);
    padding: 1rem 1rem;
    padding-bottom: 0;
  }
  
  .header h4 {
    font-size: 0.5rem;
    padding: 0.6rem;
    
  }
  .header {
      border-bottom: 1px solid var(--grey-400);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr ;
    padding: 0.5rem 0;
    place-items: center;
    background:linear-gradient(
      to right,
      rgba(69, 179, 54, 0.7),
      rgba(29, 201, 143, 0.7)
    );linear-gradient(
      to right,
      rgba(69, 179, 54, 0.7),
      rgba(29, 201, 143, 0.7)
    );
  }
  .pending p {
    margin-top: 1rem;
    font-size: 1rem;
    color: white;
  }
  .empty{
    text-align: center;
    padding: 6rem;
    font-size: 1rem;
  }

    @media screen and (min-width: 800px) {
      .top2 {
        width: 95%;
      }
    .section-center {
      width: 100%;
      margin: 0;
    }
    .container {
      display: grid;
      grid-template-columns: 25% 70%;
      gap: 2rem;
    }
    .header h4 {
      font-size: 0.8rem
    }
  }

   .table-wrapper {
    margin: 1rem auto;
    width: 90%;
    box-shadow: 0px 35px 50px rgba(0, 0, 0, 0.2);
  }

  .fl-table {
    border-radius: 5px;
    font-size: 12px;
    font-weight: normal;
    border: none;
    border-collapse: collapse;
    width: 100%;
    max-width: 100%;
    white-space: nowrap;
    background-color: white;
  }

  .fl-table td,
  .fl-table th {
    text-align: center;
    padding: 8px;
  }

  .fl-table td {
    border-right: 1px solid #f8f8f8;
    font-size: 12px;
  }

  .fl-table thead th {
    color: #ffffff;
    background: #4fc3a1;
  }

  .fl-table thead th:nth-child(odd) {
    color: #ffffff;
    background: #324960;
  }

  .fl-table tr:nth-child(even) {
    background: #f8f8f8;
  }

  /* Responsive */

  @media (max-width: 767px) {
    .fl-table {
      display: block;
      width: 100%;
    }

    .table-wrapper:before {
      content: 'Scroll horizontally >';
      display: block;
      text-align: right;
      font-size: 11px;
      color: white;
      padding: 0 0 10px;
    }
    .fl-table thead,
    .fl-table tbody,
    .fl-table thead th {
      display: block;
    }
    .fl-table thead th:last-child {
      border-bottom: none;
    }
    .fl-table thead {
      float: left;
    }
    .fl-table tbody {
      width: auto;
      position: relative;
      overflow-x: auto;
    }
    .fl-table td,
    .fl-table th {
      padding: 20px 0.625em 0.625em 0.625em;
      height: 60px;
      vertical-align: middle;
      box-sizing: border-box;
      overflow-x: hidden;
      overflow-y: auto;
      width: 120px;
      font-size: 13px;
      text-overflow: ellipsis;
    }
    .fl-table thead th {
      text-align: left;
      border-bottom: 1px solid #f7f7f9;
    }
    .fl-table tbody tr {
      display: table-cell;
    }
    .fl-table tbody tr:nth-child(odd) {
      background: none;
    }
    .fl-table tr:nth-child(even) {
      background: transparent;
    }
    .fl-table tr td:nth-child(odd) {
      background: #f8f8f8;
      border-right: 1px solid #e6e4e4;
    }
    .fl-table tr td:nth-child(even) {
      border-right: 1px solid #e6e4e4;
    }
    .fl-table tbody td {
      display: block;
      text-align: center;
    }
  }
`;

export default Wrapper;
