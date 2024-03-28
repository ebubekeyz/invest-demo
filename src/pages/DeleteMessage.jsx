import { useNavigate } from 'react-router-dom';
import { mainFetch } from '../utils';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const DeleteMessage = () => {
  const params = window.location.search;
  const id = new URLSearchParams(params).get('id');
  console.log(id);
  const nav = useNavigate();

  const deleteFunc = async (e) => {
    await mainFetch.delete(`/api/v1/contact/${id}`, {
      withCredentials: true,
    });
    nav('/messages');
    toast.success('Message Deleted Successfully');
  };

  useEffect(() => {
    deleteFunc();
  }, [deleteFunc]);
  return <div></div>;
};
export default DeleteMessage;
