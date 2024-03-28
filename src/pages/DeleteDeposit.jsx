import { useNavigate } from 'react-router-dom';
import { mainFetch } from '../utils';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const DeleteDeposit = () => {
  const params = window.location.search;
  const id = new URLSearchParams(params).get('id');
  console.log(id);
  const nav = useNavigate();

  const deleteFunc = async (e) => {
    await mainFetch.delete(`/api/v1/payReceipt/${id}`, {
      withCredentials: true,
    });
    nav('/adminDeposit');
    toast.success('Payment Deleted Successfully');
  };

  useEffect(() => {
    deleteFunc();
  }, [deleteFunc]);
  return <div></div>;
};
export default DeleteDeposit;
