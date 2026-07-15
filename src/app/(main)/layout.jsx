import BreakingNews from '@/components/shared/BreakingNews/BreakingNews';
import Header from '@/components/shared/Header/Header';
import Navbar from '@/components/shared/Navbar/Navbar';
import React from 'react';

const MainLayout = ({children}) => {
    return (
      <>
        <Header></Header>
        <div className="w-11/12 mx-auto">
          <BreakingNews />
          <Navbar />
        </div>

        {children}
      </>
    );
};

export default MainLayout;