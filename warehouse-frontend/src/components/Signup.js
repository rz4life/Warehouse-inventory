import React, { useState } from "react";
import axios from 'axios';
import ".//Signup.css";
function Signup(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profilepicture, setProfilepicture] = useState("");
    const [manager, setManager] = useState(false)

    function refreshPage() {
        window.location.reload(false);
    }
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
            props.setUser(response.data.user)
            localStorage.setItem('userId', response.data.user.id)
            refreshPage()
        }).catch((error) => {
            console.log(error)
        })

    }
    return (
        <div className='backgroundpicS'>
            <div className='signup'>
                <div class='signup-container'>

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
                        <label for = "manager"> Are you a manager?</label>
                        <select name = "manager" onChange={(e)  => (setManager(e.target.value))}>
                            <option value= "true"> Yes i am a manager</option>
                            <option value="false"> No i am not a manager</option>
                        </select>
                    </div>

                    <div className='input'>
                       <button type='submit' value='Signup!'>Signup!</button>
                    </div>

                </form>
                </div>
            </div>
        </div>
    )
}


export default Signup;



















