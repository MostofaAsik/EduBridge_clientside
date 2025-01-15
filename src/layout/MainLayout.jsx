import React from 'react';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>

            <div className=''>
                <Outlet />
            </div>

        </div>
    );
};

export default MainLayout;