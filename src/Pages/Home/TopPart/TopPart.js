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
import { Button } from 'react-bootstrap';


const TopPart = () => {
    return (
        <section className='row ms-4 me-4'>
            <div className='col-lg-3 col-md-12 col-sm-12 left-part mt-4'>
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


            <div className='col-lg-6 col-md-12 col-sm-12 middle-image mt-4'>
                <img src={image} alt=''></img>
                {/* <ul style={{ position: 'absolute', bottom: '100px', right: '30px' }}>
                    <Link to='#'>1</Link>
                    <Link to='#'>2</Link>
                    <Link to='#'>3</Link>
                    <Link to='#'>4</Link>
                </ul> */}
            </div>


            <div className='col-lg-3 col-md-12 col-sm-12 border rounded p-1 mt-4'>
                <form className='mt-5 mb-5'>
                    <h4 className='fw-bold'>Happy net user login</h4>
                    <p>Account: <input style={{ width: '76%', marginLeft: '9px' }} type="text" placeholder='six characters of letters, numbers'></input></p>
                    <p>Password: <input style={{ width: '76%' }} type="password" placeholder='four digits'></input></p>
                    <Button className='d-block w-25 mx-auto border border-success' variant="danger" type='submit'>Log in</Button>
                    <div className='d-flex justify-content-evenly mt-3'>
                        <a className='text-decoration-none' href="https://google.com">Sign up now</a>
                        <a className='text-decoration-none' href="https://google.com">Forgot Password</a>
                    </div>
                </form>
            </div>
        </section >
    );
};

export default TopPart;