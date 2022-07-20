import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import ad from '../../../images/ad3.jpg';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='m-4'>
            <div className='row'>
                <div className='col-6'>
                    <Link className='ms-2 text-black text-decoration-none' to='#'>about us</Link>
                    <Link className='ms-2 text-black text-decoration-none' to='#'>mobile version</Link>
                    <Link className='ms-2 text-black text-decoration-none' to='#'>open platform</Link>
                    <Link className='ms-2 text-black text-decoration-none' to='#'>self-service advertising</Link>
                    <Link className='ms-2 text-black text-decoration-none' to='#'>recruitment</Link>
                    <Link className='ms-2 text-black text-decoration-none' to='#'>customer service</Link>
                    <Link className='ms-2 text-black text-decoration-none' to='#'>help</Link>
                </div>
                <div className='col-6'>
                    <p className='text-center'><small><AiOutlineCopyrightCircle />{year} <span className='ms-2'>Happy Network</span> <span className='ms-2'>Yunwangwen [2022] No. 000</span> <span className='ms-2'>Cloud ICP Certificate No. 00000</span> <span className='ms-2'>Cloud Public Network Security No. 000000000000 Parental guardianship of minors</span></small></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;