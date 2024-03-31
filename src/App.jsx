import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  About,
  HomeLayout,
  Landing,
  Login,
  Register,
  SinglePageError,
  Error,
  Faqs,
  Contact,
  Investment,
  Terms,
  Privacy,
  Referral,
  Reset,
  ResetPassword,
  Dashboard,
  Withdraw,
  Settings,
  ChangePassword,
  Deposit,
  Bitcoin,
  InvestLog,
  SignUp,
  InvestDash,
  WithdrawLog,
  DepositLog,
  AdminDash,
  EditUser,
  DeleteUser,
  AdminDeposit,
  EditDeposit,
  DeleteDeposit,
  RefBonus,
  AdminWithdraw,
  EditWithdraw,
  DeleteWithdraw,
  Messages,
  DeleteMessage,
  AdminSettings,
  Members,
  UserDash,
} from './pages';

import { action as actionLoader } from './pages/Login.jsx';
// import { action as actionLoader2 } from './pages/Register.jsx';
import { action as actionLoader5 } from './pages/SignUp.jsx';
import { action as actionLoader3 } from './pages/Reset.jsx';
import { action as actionLoader4 } from './pages/ResetPassword.jsx';
// import { loader as withdrawLoader } from './pages/Withdraw.jsx';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
      },
      {
        path: '/about',
        element: <About />,
        // loader: aboutLoader,
      },
      {
        path: '/faqs',
        element: <Faqs />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/investment',
        element: <Investment />,
      },
      {
        path: '/terms',
        element: <Terms />,
      },
      {
        path: '/privacy',
        element: <Privacy />,
      },
      {
        path: '/referral',
        element: <Referral />,
      },
      {
        path: '/signUp',
        element: <SignUp />,
        errorElement: <SinglePageError />,
        action: actionLoader5,
      },
      {
        path: '/register/:id',
        element: <Register />,
        errorElement: <SinglePageError />,
        // action: actionLoader2,
      },
      {
        path: '/login',
        element: <Login />,
        errorElement: <SinglePageError />,
        action: actionLoader,
      },
      {
        path: '/reset',
        element: <Reset />,
        errorElement: <SinglePageError />,
        action: actionLoader3,
      },
      {
        path: '/resetPassword',
        element: <ResetPassword />,
        errorElement: <SinglePageError />,
        action: actionLoader4,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    errorElement: <SinglePageError />,
  },
  {
    path: '/withdraw',
    element: <Withdraw />,
    errorElement: <SinglePageError />,
    // loader: withdrawLoader,
  },
  {
    path: '/settings',
    element: <Settings />,
    errorElement: <SinglePageError />,
  },
  {
    path: '/changePassword',
    element: <ChangePassword />,
    errorElement: <SinglePageError />,
  },
  {
    path: '/deposit',
    element: <Deposit />,
    errorElement: <SinglePageError />,
  },
  {
    path: '/bitcoin',
    element: <Bitcoin />,
    errorElement: <SinglePageError />,
  },
  {
    path: '/investLog',
    element: <InvestLog />,
    errorElement: <SinglePageError />,
  },
  {
    path: '/investDash',
    element: <InvestDash />,
    errorElement: <SinglePageError />,
  },
  {
    path: '/WithdrawLog',
    element: <WithdrawLog />,
    errorElement: <SinglePageError />,
  },
  {
    path: '/depositLog',
    element: <DepositLog />,
    errorElement: <SinglePageError />,
  },
  {
    path: '/adminDash',
    element: <AdminDash />,
    errorElement: <SinglePageError />,
  },
  {
    path: '/editUser',
    element: <EditUser />,
    errorElement: <SinglePageError />,
  },
  {
    path: '/deleteUser',
    element: <DeleteUser />,
    errorElement: <SinglePageError />,
  },
  {
    path: '/adminDeposit',
    element: <AdminDeposit />,
    errorElement: <SinglePageError />,
  },
  {
    path: '/editDeposit',
    element: <EditDeposit />,
    errorElement: <SinglePageError />,
  },
  {
    path: '/deleteDeposit',
    element: <DeleteDeposit />,
    errorElement: <SinglePageError />,
  },
  {
    path: '/refBonus',
    element: <RefBonus />,
    errorElement: <SinglePageError />,
  },
  {
    path: '/adminWithdraw',
    element: <AdminWithdraw />,
    errorElement: <SinglePageError />,
  },
  {
    path: '/editWithdraw',
    element: <EditWithdraw />,
    errorElement: <SinglePageError />,
  },
  {
    path: '/deleteWithdraw',
    element: <DeleteWithdraw />,
    errorElement: <SinglePageError />,
  },
  {
    path: '/messages',
    element: <Messages />,
    errorElement: <SinglePageError />,
  },
  {
    path: '/deleteMessage',
    element: <DeleteMessage />,
    errorElement: <SinglePageError />,
  },
  {
    path: '/adminSettings',
    element: <AdminSettings />,
    errorElement: <SinglePageError />,
  },
  {
    path: '/members',
    element: <Members />,
    errorElement: <SinglePageError />,
  },
  {
    path: '/userDash',
    element: <UserDash />,
    errorElement: <SinglePageError />,
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
};
export default App;
