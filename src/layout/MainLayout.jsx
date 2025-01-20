import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/shared/Navbar';

const MainLayout = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className=''>
                <Outlet />
            </div>

        </div>
    );
};

export default MainLayout;