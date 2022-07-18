import React from 'react';
import image from '../../images/xdtgg_frxz2_44.jpg';

const TopPart = () => {
    return (
        <section className='row'>
            <div className='col-3'>
                <p>The preliminary report describes “systemic failures and egregious poor decision making”: how police disregarded department active-shooter training, how the school district did not adhere fully to its safety plan and how the shooter's family did not recognize warning signs before the rampage.</p>
            </div>
            <div className='col-6'>
                <img src={image} alt=''></img>
            </div>
            <div className='col-3'>
                <h5>Happy net user login</h5>
                <p>Account: <input style={{ width: '79%', marginLeft: '8px' }} type="text" placeholder='six characters of letters, numbers'></input></p>
                <p>Password: <input style={{ width: '79%' }} type="password" placeholder='four digits'></input></p>
                <input className='d-block w-25 mx-auto' type='submit' value='Log in'></input>
                <a href="https://google.com">Sign up now</a>
                <a href="https://google.com">Forgot Password</a>
            </div>
        </section >
    );
};

export default TopPart;