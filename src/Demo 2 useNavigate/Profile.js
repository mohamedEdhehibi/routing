
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            navigate('/');
        }, 5000);

        return () => clearTimeout(timeoutId);
    }, [navigate]);

    return (
        <div>
            <h1>Profile Page</h1>
            <p>
                Count down: <span>{timer}</span>
            </p>
        </div>
    );
};

export default Profile;