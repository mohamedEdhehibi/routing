import React from 'react'

import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import Profile from './Profile';
import Account from './Account';

const User = () => {
    return (
        <div>
            <h1>User</h1>

            <nav>
                <Link to="profile">Profile</Link>
                <Link to="account">Account</Link>
             
            </nav>
            {/* <Routes>
                <Route path="profile" element={<Profile />} />
                <Route path="account" element={<Account />} />
            </Routes> */}
            <div>
                <Outlet/>
            </div>

        </div>

    );
}

export default User