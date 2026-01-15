import GamificationDemo from '../../components/interactive/GamificationDemo';
import React from 'react';
import LiveCollabDemo from '../../components/interactive/LiveCollabDemo';
import DragDropDemo from '../../components/interactive/DragDropDemo';
import Spinner from '../../components/common/Spinner/Spinner';
import DashboardSummary from '../../components/common/DashboardSummary/DashboardSummary';

const Dashboard = () => {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <Spinner />;

    return (
        <div>
            <h1>Dashboard</h1>
            <p>View your stats and activity here.</p>
            <DashboardSummary />
            <LiveCollabDemo />
            <DragDropDemo />
            <GamificationDemo />
        </div>
    );
};

export default Dashboard;
