import React, { useState } from "react";
import axios from 'axios';

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    
   

    const submitform = (e) =>{
        e.preventDefault()
            axios.post (`http://localhost:3001/user/login`, {
                email: email,
                password: password
            }).then ((response) =>{
                console.log(response.User.dataValues)
                 props.setUser(response.User.dataValues)
                 
                // localStorage.setItem('userId', response.data.userId)
            }).catch((error) =>{
                console.log(error)
            })

    }
    return(
    <div className = 'loginpage'>
        <div className = 'login'>

                <form onSubmit = {submitform}>
                    <h3>Login to your Account</h3>
                    <div className = 'input'>
                        
                        <input placeholder = 'email' value = {email} onChange = {(e) =>(setEmail(e.target.value))}/>
                    </div>

                    <div className = 'input'>
                        
                        <input placeholder = 'password' type = 'password' value = {password} onChange = {(e) =>(setPassword(e.target.value))}/>
                    </div>

                    <div className = 'input'>
                        <input type = 'submit' value = 'Login!'/>
                    </div>

                </form>
        </div>
    </div>
)
}


export default Login;



















