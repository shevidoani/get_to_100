import React, { useState } from 'react';
import LogIn from './LogIn';
import SignUp from './SignUp';
import GamePage from './GamePage';
export default function GetInGame() {
    const [players, setPlayers] = useState([]);
    const [currentComponent, setCurrentComponent] = useState('login');

    function goToSignUp() {
        setCurrentComponent('signup');
    }

    function goToLogIn() {
        setCurrentComponent('login');
    }

    return (
        <>
            {currentComponent === 'login' && (
                <LogIn players={players} setPlayers={setPlayers} goToSignUp={goToSignUp} setCurrentComponent={setCurrentComponent}/>
            )}
            {currentComponent === 'signup' && (
                <SignUp players={players} setPlayers={setPlayers} goToLogIn={goToLogIn} setCurrentComponent={setCurrentComponent}/>
            )}
            {currentComponent === 'GamePage' && (
                <GamePage />
            )}
        </>
    );
}
