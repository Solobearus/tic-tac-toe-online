import React, { useContext } from 'react'
import './Lobby.css'
import { ContextContext } from '../../context/ContextContext'


const Lobby = () => {
    const { checkForPlayers } = useContext(ContextContext);
    return (
        < div className="lobby" data-testid="lobby">
            <button onClick={() => checkForPlayers()}>play with random</button>
            <button>play with friend</button>
        </div >
    )
}

export default Lobby
