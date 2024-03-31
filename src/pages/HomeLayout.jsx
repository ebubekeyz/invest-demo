import { Outlet, useNavigation, useOutletContext } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SubNav from '../components/SubNav';
import Line from '../components/Line';
import { useState } from 'react';
import Whatsapp from '../components/Whatsapp';
import { questions as data } from '../utils';
import Navbar3 from '../components/Navbar3';
import Navbar01 from '../components/Navbar01';

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';

  return (
    <div>
      {/* <SubNav />
      <Line /> */}
      <Navbar01 />
      <div style={{ textAlign: 'center' }} id="google_translate_element"></div>
      <section className="page">
        {isPageLoading ? (
          <aside className="loading-cont">
            <div className="loading"></div>
          </aside>
        ) : (
          <Outlet />
        )}
      </section>
      {/* <Whatsapp /> */}
      <Footer />
    </div>
  );
};
export default HomeLayout;
