import React from 'react';
import './FloatingAd.css';
import { Link } from 'react-router-dom';
import ad from '../../../images/ad3.jpg';

const FloatingAd = () => {
    return (
        <div className='adRight'>
            <Link to='#' className='icon text-decoration-none text-dark'>X</Link>
            <Link to='#'><img className='w-100' src={ad} alt=''></img></Link>
        </div>
    );
};

export default FloatingAd;