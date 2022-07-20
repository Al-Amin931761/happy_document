import React from 'react';
import './TopPart.css';
import image from '../../../images/xdtgg_frxz2_44.jpg'
import image1 from '../../../images/sub-2.gif';
import image2 from '../../../images/sub-3.gif';
import image3 from '../../../images/sub-4.gif';
import image4 from '../../../images/sub-5.gif';
import image5 from '../../../images/sub-6.gif';
import image6 from '../../../images/sub-7.gif';
import image7 from '../../../images/sub-8.gif';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Login from '../../Login/Login';


const TopPart = () => {
    return (
        <section className='row ms-4 me-4'>
            <div className='col-3 left-part mt-4'>
                <div className='row game-nav pt-2'>
                    <Link className='col-10 game-nav-link' to='#'><img src={image1} alt=''></img> conquer the quartet</Link>
                    <p className='col-2 text-end'><MdOutlineKeyboardArrowRight /></p>
                </div>

                <div className='row game-nav pt-2'>
                    <Link className='col-10 game-nav-link' to='#'><img src={image2} alt=''></img> dragon general</Link>
                    <p className='col-2 text-end'><MdOutlineKeyboardArrowRight /></p>
                </div>

                <div className='row game-nav pt-2'>
                    <Link className='col-10 game-nav-link' to='#'><img src={image3} alt=''></img> dangdangtang</Link>
                    <p className='col-2 text-end'><MdOutlineKeyboardArrowRight /></p>
                </div>

                <div className='row game-nav pt-2'>
                    <Link className='col-10 game-nav-link' to='#'><img src={image4} alt=''></img> mortal comprehension 2</Link>
                    <p className='col-2 text-end'><MdOutlineKeyboardArrowRight /></p>
                </div>

                <div className='row game-nav pt-2'>
                    <Link className='col-10 game-nav-link' to='#'><img src={image5} alt=''></img> ride first</Link>
                    <p className='col-2 text-end'><MdOutlineKeyboardArrowRight /></p>
                </div>

                <div className='row game-nav pt-2'>
                    <Link className='col-10 game-nav-link' to='#'><img src={image6} alt=''></img> court plan</Link>
                    <p className='col-2 text-end'><MdOutlineKeyboardArrowRight /></p>
                </div>

                <div className='row game-nav pt-2'>
                    <Link className='col-10 game-nav-link' to='#'><img src={image7} alt=''></img> fairy way</Link>
                    <p className='col-2 text-end'><MdOutlineKeyboardArrowRight /></p>
                </div>
            </div>


            <div style={{ position: 'relative' }} className='col-6 middle-image mt-4'>
                <img src={image} alt=''></img>
                <ul style={{ position: 'absolute', color: 'tomato', bottom: "0px", right: '70px' }}>
                    <Link className='text-decoration-none fs-2 text-center ms-4 text-white' to='#'><span id='one-color'>1</span></Link>
                    <Link className='text-decoration-none fs-2 text-center ms-4 text-black' to='#'><span className='rest-numbers'>2</span></Link>
                    <Link className='text-decoration-none fs-2 text-center ms-4 text-black' to='#'><span className='rest-numbers'>3</span></Link>
                    <Link className='text-decoration-none fs-2 text-center ms-4 text-black' to='#'><span className='rest-numbers'>4</span></Link>
                </ul>
            </div>


            <div style={{ backgroundColor: 'rgba(243, 243, 243, 0.46)', border: '1px solid #ccc', borderRadius: '8px' }} className='col-3 p-1 mt-4'>
                <Login></Login>
            </div>
        </section >
    );
};

export default TopPart;