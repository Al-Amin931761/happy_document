import React from 'react';
import LastPart from './LastPart';
import MiddlePart from './MiddlePart/MiddlePart/MiddlePart';
import TopPart from './TopPart/TopPart';

const Home = () => {
    return (
        <div>
            <TopPart></TopPart>
            <MiddlePart></MiddlePart>
            <LastPart></LastPart>
        </div>
    );
};

export default Home;