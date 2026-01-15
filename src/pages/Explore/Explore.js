import React from 'react';
import RealTimeChart from '../../components/interactive/RealTimeChart';
import Spinner from '../../components/common/Spinner/Spinner';

const Explore = () => {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 900);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <Spinner />;

    return (
        <div aria-label="Explore page">
            <h1>Explore</h1>
            <p>Discover new content and features here.</p>
            <RealTimeChart />
        </div>
    );
};

export default Explore;
