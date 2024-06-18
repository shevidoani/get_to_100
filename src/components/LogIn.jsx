import { useState } from 'react'

export default function LogIn({ players, setPlayers ,goToSignUp, setCurrentComponent}) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    function chekLogIn() {
        let nameExist = JSON.parse(localStorage.getItem(name));
        
        if (nameExist != null&& password!='') {
            if (nameExist.password == password) {
                setPlayers([...players, nameExist]);
                setCurrentComponent('GamePage');
            }
        } else {
            alert('There is a problem receiving the data, please insert another username');
            return;
        }
    }

    return (
        <div>
            <h1>LogIn:</h1>
            <form action="">
                <input
                    onChange={(event) => setName(event.target.value)}
                    type="text"
                    id='signUpName'
                    name='signUpName'
                    placeholder='Enter your name:'
                />
                <br />
                <input
                    onChange={(event) => setPassword(event.target.value)}
                    type="password"
                    id='password'
                    name='password'
                    placeholder='Enter your password:'
                />
                <button onClick={chekLogIn}>Login</button>
            </form>
            <button onClick={goToSignUp}>SignUp</button>
        </div>
    );
}