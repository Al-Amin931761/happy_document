import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Game from '../Game/Game';
import './MiddlePart.css';
import { MdDoubleArrow } from 'react-icons/md';

const MiddlePart = () => {
    const [games, setGames] = useState([]);
    useEffect(() => {
        fetch('allgames.json')
            .then(res => res.json())
            .then(data => setGames(data))
    }, []);
    return (
        <section className='m-3 row'>
            <div className='col-9'>
                <div className='games'>
                    <div className='d-flex genre-title'>
                        <h6 className='game-title'>all games</h6>
                        <h6 className='text'><Link className='text-decoration-none text-dark text-opacity-75' to='#'>war strategy |</Link></h6>
                        <h6 className='text'><Link className='text-decoration-none text-dark text-opacity-75' to='#'>Sports management |</Link></h6>
                        <h6 className='text'><Link className='text-decoration-none text-dark text-opacity-75' to='#'>social game</Link></h6>
                    </div>
                    <div className='all-game'>
                        {
                            games.map(data => <Game key={data._id} data={data}></Game>)
                        }
                    </div>
                </div>
            </div>
            <div className='col-3'>
                <div style={{ border: '1px solid #ccc', borderRadius: '8px' }}>
                    <h6 className='genre-title'>News Announcement</h6>
                    <ul style={{ fontSize: "12px" }} className='news-list'>
                        <li><MdDoubleArrow className='me-2' /><Link className='text-decoration-none' style={{ color: '#4d4646' }} to='#'>[Battle of the Quartet] Happy First Server - Yellow Turban Rebellion</Link></li>
                        <li><MdDoubleArrow className='me-2' /><Link className='text-decoration-none' style={{ color: '#4d4646' }} to='#'>[Dragon General] Hot 8 Servers Eight Gates Gold</Link></li>
                        <li><MdDoubleArrow className='me-2' /><Link className='text-decoration-none' style={{ color: '#4d4646' }} to='#'>[Dandantang] 41 servers open · 10,000 people competition</Link></li>
                        <li><MdDoubleArrow className='me-2' /><Link className='text-decoration-none' style={{ color: '#4d4646' }} to='#'>[Mortal Cultivation 2] March 08 · King of the Four Seas</Link></li>
                        <li><MdDoubleArrow className='me-2' /><Link className='text-decoration-none' style={{ color: '#4d4646' }} to='#'>[One ride first] Happy 2 server online to send gold</Link></li>
                        <li><MdDoubleArrow className='me-2' /><Link className='text-decoration-none' style={{ color: '#4d4646' }} to='#'>[Palace Plan] March 06 · The Secret History of Xi Shi</Link></li>
                        <li><MdDoubleArrow className='me-2' /><Link className='text-decoration-none' style={{ color: '#4d4646' }} to='#'>[Mortal Cultivation 2] March 08 · King of the Four Seas</Link></li>
                    </ul>
                </div>
            </div>
        </section >
    );
};

export default MiddlePart;