import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Games from './Games/Games';
import './LastPart.css'
import ad1 from '../../../images/ad1.jpg';
import ad2 from '../../../images/ad2.jpg';
import image1 from '../../../images/img-1.jpg';
import image2 from '../../../images/img-2.jpg';

const LastPart = () => {
    const [gameData, setGameData] = useState([]);
    useEffect(() => {
        fetch('gameData.json')
            .then(res => res.json())
            .then(data => setGameData(data));
    }, []);
    return (
        <section className='last-container m-4'>
            <h5>role play</h5>
            <div className='row p-4'>
                <div className='col-9'>
                    <div className='games-container'>
                        {
                            gameData.map(data => <Games key={data._id} data={data}></Games>)
                        }
                    </div>
                </div>
                <div className='col-3'>
                    <div className='mb-3'>
                        <Link to='#'><img className='w-100 mb-3' src={ad1} alt=''></img></Link>
                        <Link to='#'><img className='w-100' src={ad2} alt=''></img></Link>
                    </div>
                    <div style={{ border: "1px solid #ccc", borderRadius: '8px' }}>
                        <h6 style={{ backgroundImage: "linear-gradient(#fafafa, #f8f7f9, #f6f7f6, #f5f4f4, #f3f4f3, #f1f2f1, #eeefef)", fontWeight: 'bold', color: '#7d0808', padding: '10px' }}>game video</h6>
                        <div>
                            <div className='p-1' style={{ borderBottom: "1px dashed #ccc" }}>
                                <div className='row'>
                                    <div className='col-6'>
                                        <img className='w-100' src={image1} alt=''></img>
                                    </div>
                                    <div className='col-6'>
                                        <Link style={{ fontSize: '12px' }} to='' className='text-decoration-none'>
                                            "King of Sailing" is spicy, cool and anti-travelling, and the hero fashion has been transformed!
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className='row p-1'>
                                <div className='col-6'>
                                    <img className='w-100' src={image2} alt=''></img>
                                </div>
                                <div className='col-6'>
                                    <Link to='' className='text-decoration-none' style={{ fontSize: '12px' }}>"Dandantang" Wu Kequn's passion theme MV of the same name, experience the fun of self-cultivation</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LastPart;