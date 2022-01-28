import React, { useState} from "react";
import axios from 'axios';
import ".//Login.css";
function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    
    function refreshPage() {
        window.location.reload(false);
    }

    const submitform = (e) =>{
        e.preventDefault()
            axios.post (`http://localhost:3001/user/login`, {
                email: email,
                password: password
            }).then ((response) =>{
                setError(response.data.error)
                 props.setUser(response.data.user)
                 if(response.data.user){
                     refreshPage()
                 }
                 localStorage.setItem('userId', response.data.user.id)
            }).catch((error) =>{
                    console.log(error)
                })             
    }
     return(
    <div className = 'backgroundpic'>
        <div className = 'login'>
                <div class = 'login-container'>

                <form onSubmit = {submitform}>
                    <h3>Login to your Account</h3>
                    <div className = 'input'>
                        
                        <input placeholder = 'email' value = {email} onChange = {(e) =>(setEmail(e.target.value))}/>
                    </div>

                    <div className = 'input'>
                        
                        <input placeholder = 'password' type = 'password' value = {password} onChange = {(e) =>(setPassword(e.target.value))}/>
                    </div>

                    <div className = 'input'>
                       
                        <button type = 'submit' value = 'Login!'>Login</button>
                    </div>

                </form>

                <p>{error}</p>
                </div>
        </div>
    </div>
)
}


export default Login;



















