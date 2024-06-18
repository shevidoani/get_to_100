import React, { useState } from 'react';

export default function SignUp({players,setPlayers, goToLogIn, setCurrentComponent}) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    function chekSignUp() {
        let nameExist = localStorage.getItem(name);
        if (nameExist === null&& password!='' &&name!='') {
        
            let currentUser = {
                name: name,
                highestScore: 0,
                password: password
            };
            localStorage.setItem(name, JSON.stringify(currentUser));
            setPlayers([...players,currentUser]);
            setCurrentComponent('GamePage');
        } 
        else {
            alert('There is a problem receiving the data, please insert another username');
            return;
        }
    }

    return (
        <div>
            <h1>SignUp:</h1>
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
                <button onClick={chekSignUp}>Sign up</button>
            </form>
            <button onClick={goToLogIn}>Sign up</button>
        </div>
    );
}


 // function updateStorage() {
    //     let userEmail = document.querySelector("#userEmail").value;
    //     if (localStorage.getItem(userEmail) === null) {
    //         let currentUser = {
    //             firstName: document.getElementById("firstName").value,
    //             lastName: document.getElementById("lastName").value,
    //             email: document.getElementById("userEmail").value,
    //             highestScore: 0,
    //             password: document.getElementById("userPassword").value,
    //             profile: document.querySelector(".profile-pic").innerText
    //         };
    //         if (currentUser.password !== document.getElementById("userPasswordCheck").value) {
    //             document.getElementById("userPasswordCheck").setCustomValidity("הסיסמאות אינם שוים");
    //             return;
    //         }
    //         localStorage.setItem(userEmail, JSON.stringify(currentUser));
    //         localStorage.setItem("thisUser", JSON.stringify(userEmail));
    //     }
    //     else {
    //         document.getElementById("userEmail").setCustomValidity("יש בעיה בכתובת האימייל");
    //         return;
    //     }
    //     location.replace("./set.html");
    // }