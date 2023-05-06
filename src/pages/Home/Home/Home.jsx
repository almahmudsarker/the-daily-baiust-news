import React from 'react';
import useTitle from '../../../hooks/useTitle';

const Home = () => {
    useTitle("Home");
    return (
        <div>
            <h2>This is Home</h2>
        </div>
    );
};

export default Home;