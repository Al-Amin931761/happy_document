import React from 'react';
import image from '../../images/xdtgg_frxz2_44.jpg';
import image1 from '../../images/sub-2.gif';
import image2 from '../../images/sub-3.gif';
import image3 from '../../images/sub-4.gif';
import image4 from '../../images/sub-5.gif';
import image5 from '../../images/sub-6.gif';
import image6 from '../../images/sub-7.gif';
import image7 from '../../images/sub-8.gif';
import rightA from '../../images/rightA.png';


const TopPart = () => {
    return (
        <section className='row m-4'>
            <div className='col-3 border p-0'>
                <p> <img src={image1} alt=''></img> conquer the quartet <img src={rightA} alt=''></img></p>
                <p> <img src={image2} alt=''></img> dragon general <img src={rightA} alt=''></img></p>
                <p> <img src={image3} alt=''></img> dangdangtang <img src={rightA} alt=''></img></p>
                <p> <img src={image4} alt=''></img> mortal comprehension 2 <img src={rightA} alt=''></img></p>
                <p> <img src={image5} alt=''></img> ride first <img src={rightA} alt=''></img></p>
                <p> <img src={image6} alt=''></img> court plan <img src={rightA} alt=''></img></p>
                <p> <img src={image7} alt=''></img> fairy way <img src={rightA} alt=''></img></p>
            </div>
            <div className='col-6'>
                <img src={image} alt=''></img>
            </div>
            <div className='col-3 border rounded'>
                <h5>Happy net user login</h5>
                <p>Account: <input style={{ width: '78%', marginLeft: '8px' }} type="text" placeholder='six characters of letters, numbers'></input></p>
                <p>Password: <input style={{ width: '78%' }} type="password" placeholder='four digits'></input></p>
                <input className='d-block w-25 mx-auto' type='submit' value='Log in'></input>
                <a href="https://google.com">Sign up now</a>
                <a href="https://google.com">Forgot Password</a>
            </div>
        </section >
    );
};

export default TopPart;