import BreakingNews from '@/components/shared/BreakingNews/BreakingNews';
import Header from '@/components/shared/Header/Header';
import Navbar from '@/components/shared/Navbar/Navbar';
import React from 'react';

const MainLayout = ({children}) => {
    return <>
        <Header></Header>
        <BreakingNews></BreakingNews>
        <Navbar></Navbar>

        
    {children}</>;
};

export default MainLayout;