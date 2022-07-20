import React from 'react';
import FloatingAd from './FloatingAd/FloatingAd';
import LastPart from './LastPart/LastPart';
import MiddlePart from './MiddlePart/MiddlePart/MiddlePart';
import TopPart from './TopPart/TopPart';

const Home = () => {
    return (
        <div>
            <TopPart></TopPart>
            <MiddlePart></MiddlePart>
            <LastPart></LastPart>
            <FloatingAd></FloatingAd>
        </div>
    );
};

export default Home;