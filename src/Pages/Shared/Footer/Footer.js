import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='m-4'>
            <div className='row'>
                <div className='col-6'>
                    <Link className='ms-2 text-black text-decoration-none' to='#'> <span className='footer-link'>about us</span></Link>
                    <Link className='ms-2 text-black text-decoration-none' to='#'> <span className='footer-link'>mobile version</span></Link>
                    <Link className='ms-2 text-black text-decoration-none' to='#'> <span className='footer-link'>open platform</span></Link>
                    <Link className='ms-2 text-black text-decoration-none' to='#'> <span className='footer-link'>self-service advertising</span></Link>
                    <Link className='ms-2 text-black text-decoration-none' to='#'> <span className='footer-link'>recruitment</span></Link>
                    <Link className='ms-2 text-black text-decoration-none' to='#'> <span className='footer-link'>customer service</span></Link>
                    <Link className='ms-2 text-black text-decoration-none' to='#'> <span className='footer-link'>help</span></Link>
                </div>
                <div className='col-6'>
                    <p className='text-center'><small><AiOutlineCopyrightCircle />{year} <span className='ms-2'>Happy Network</span> <span className='ms-2'>Yunwangwen [2022] No. 000</span> <span className='ms-2'>Cloud ICP Certificate No. 00000</span> <span className='ms-2'>Cloud Public Network Security No. 000000000000 Parental guardianship of minors</span></small></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;