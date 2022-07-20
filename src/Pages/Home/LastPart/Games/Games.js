import React from 'react';
import { Link } from 'react-router-dom';
import './Games.css';

const Games = ({ data }) => {
    const { image, popularity, status, button1, button2 } = data;
    return (
        <div className=' image'>
            <img className='w-100' src={image} alt=''></img>
            <div className='mb-2 mt-2'>
                <p className='m-0'>Game popularity: {popularity}</p>
                <p className='m-0'>Game status: <span style={{ color: '#7d0808' }}>{status}</span></p>
                <Link to='#' className='btn1 text-decoration-none text-black'>{button1}</Link>
                <Link to='#' className='btn2 text-decoration-none text-white'>{button2}</Link>
            </div>
        </div>
    );
};

export default Games;