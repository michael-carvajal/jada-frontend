import React from 'react';
import MobileNavbar from './MobileNavbar';
import DesktopNavbar from './DesktopNavbar';

const Navbar: React.FC = () => {
    return (
        <>
            <MobileNavbar />
            <DesktopNavbar />
        </>
    );
};

export default Navbar;
