import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Game from '../Game/Game';
import './MiddlePart.css';

const MiddlePart = () => {
    const [games, setGames] = useState([]);
    useEffect(() => {
        fetch('allgames.json')
            .then(res => res.json())
            .then(data => setGames(data))
    }, []);
    return (
        <section className='m-4 games-container'>
            <div className='d-flex genre-title'>
                <h6 className='game-title'>all games</h6>
                <h6 className='text'><Link className='text-decoration-none text-dark text-opacity-75' to='#'>war strategy |</Link></h6>
                <h6 className='text'><Link className='text-decoration-none text-dark text-opacity-75' to='#'>Sports management |</Link></h6>
                <h6 className='text'><Link className='text-decoration-none text-dark text-opacity-75' to='#'>social game</Link></h6>
            </div>
            <div className='d-flex all-game'>
                {
                    games.map(data => <Game key={data._id} data={data}></Game>)
                }
            </div>
        </section>
    );
};

export default MiddlePart;