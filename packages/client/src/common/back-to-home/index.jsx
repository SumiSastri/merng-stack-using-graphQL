import React from 'react';
import { NavLink } from 'react-router-dom';

const BackToHome = () => (
    <div>
        <NavLink to='/' className='btn btn-dark btn-sm w-25 d-inline ms-auto'>
            Back to Home Page
        </NavLink>
        </div>
);

export default BackToHome;