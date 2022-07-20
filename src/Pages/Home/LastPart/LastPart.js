import React, { useEffect, useState } from 'react';
import Games from './Games/Games';
import './LastPart.css'

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
                <div className='border col-3'>
                    <p className='text-danger'>For example, here are two grid layouts that apply to every device and viewport, from xs to xxl. Add any number of unit-less classes for each breakpoint you need and every column will be the same width.</p>
                </div>
            </div>
        </section>
    );
};

export default LastPart;