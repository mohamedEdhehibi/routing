import { useEffect } from 'react';
import { useMatch, useParams } from 'react-router-dom';

const Profile = () => {
    const match = useMatch('/profile/:userId');
    useEffect(() => {
        console.log("🚀 ~ file: App.js ~ line 23 ~ Profile ~ params", match)

    })

    return (
        <div>
            <h1>Profile Page</h1>
            <p>
                this page is for {match.params.userId}
            </p>
        </div>
    );
}

export default Profile;
