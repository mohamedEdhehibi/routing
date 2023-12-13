import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Home page</h1>
            <button onClick={() => navigate('/profile')}>Navigate to Profile</button>
        </div>
    );
}

export default Home;