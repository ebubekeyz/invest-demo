import { toast } from 'react-toastify';
import { mainFetch } from '../utils';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DeleteUser = () => {
  const params = window.location.search;
  const id = new URLSearchParams(params).get('id');
  console.log(id);
  const nav = useNavigate();

  const deleteFunc = async (e) => {
    await mainFetch.delete(`/api/v1/users/${id}`, {
      withCredentials: true,
    });
    nav('/adminDash');
    toast.success('User Deleted Successfully');
  };

  useEffect(() => {
    deleteFunc();
  }, [deleteFunc]);

  return <div style={{ background: 'rgb(39, 37, 37)' }}></div>;
};
export default DeleteUser;
