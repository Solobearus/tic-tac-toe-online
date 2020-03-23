import React, { createContext, useState, useRef } from 'react'
import io from 'socket.io-client';

const ContextContext = createContext(null);
const { Provider } = ContextContext;

const ContextProvider = ({ children }) => {

    const [username, setUsername] = useState(null);
    const [age, setAge] = useState(0);
    const [roomId, setRoomId] = useState(null);
    const socket = useRef(null);

    const checkUsername = (username) => {

        fetch(`http://localhost:3001/`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username
                })
            })
            .then((res) => {
                if (res.status === 200) {
                    setUsername(username);
                    startSocket(username);
                }
            })
            .catch(err => console.error(err))
    }

    const startSocket = (username) => {
        socket.current = io(`http://localhost:3001`, { query: { username } });
        socket.current.on('queued', () => {
            console.log('queued');
        })
        socket.current.on('roomCreated', () => {
            console.log('roomCreated');
        })


    }
    const checkForPlayers = () => {
        socket.current.emit('checkForPlayers', { username })
    }
    // state = values to display
    const state = {
        username,
        age,
        socket
    };

    // actions = functions to invoke
    const actions = {
        setUsername,
        setAge,
        checkUsername,
        checkForPlayers
    };
    return < Provider value={{ ...state, ...actions }}>{children}</Provider >
}


export { ContextContext, ContextProvider }
