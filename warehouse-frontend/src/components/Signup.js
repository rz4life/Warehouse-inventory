import React, { useState } from "react";
import axios from 'axios';

function Signup(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profilepicture, setProfilepicture] = useState("");
    const [manager, setManager] = useState(false)


    const submitform = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:3001/signup`, {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            profilepicture: profilepicture,
            manager: manager
        }).then((response) => {
            console.log(response.User.dataValues)
            props.setUser(response.User.dataValues)

            // localStorage.setItem('userId', response.data.userId)
        }).catch((error) => {
            console.log(error)
        })

    }
    return (
        <div className='signuppage'>
            <div className='signup'>

                <form onSubmit={submitform}>
                    
                    <h3>Signup for your Account</h3>
                   
                    <div className='input'>
                        <input placeholder='firstName' value={firstName} onChange={(e) => (setFirstName(e.target.value))} />
                    </div>

                    <div className='input'>
                        <input placeholder='lastName' value={lastName} onChange={(e) => (setLastName(e.target.value))} />
                    </div>


                    <div className='input'>
                        <input placeholder='email' value={email} onChange={(e) => (setEmail(e.target.value))} />
                    </div>

                    <div className='input'>
                        <input placeholder='password' type='password' value={password} onChange={(e) => (setPassword(e.target.value))} />
                    </div>

                    <div className='input'>
                        <input placeholder='profilepicture' value={profilepicture} onChange={(e) => (setProfilepicture(e.target.value))} />
                    </div>

                    <div className='input'>
                        <input placeholder='manager' value={manager} onChange={(e) => (setManager(e.target.value))} />
                    </div>

                    <div className='input'>
                        <input type='submit' value='Signup!' />
                    </div>

                </form>
            </div>
        </div>
    )
}


export default Signup;



















