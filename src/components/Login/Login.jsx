import React, { useContext, useState } from 'react';
import './Login.css'
import { ContextContext } from '../../context/ContextContext'


const Login = () => {

    const { checkUsername } = useContext(ContextContext);
    const [name, setName] = useState('');

    return (
        < div className="login" data-testid="login">
            <div>What's your name :</div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => { checkUsername(name) }}>submit  </button>
        </div >
    )
}

export default Login
