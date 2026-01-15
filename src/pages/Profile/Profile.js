import React from 'react';
import GestureDemo from '../../components/interactive/GestureDemo';
import Spinner from '../../components/common/Spinner/Spinner';

const Profile = () => {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <Spinner />;

    return (
        <div>
            <h1>Profile</h1>
            <p>Manage your profile and preferences here.</p>
            <GestureDemo />
        </div>
    );
};

export default Profile;
