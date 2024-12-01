import React from 'react'
import { useState } from 'react';

const Form = () => {
    const[user,setUser]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    });
    const changeHandler =(e)=>{
        setUser((user)=>({...user,[e.target.name]: e.target.value}))}
    return (
        <div>
            <form>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" name="firstName" onChange={(e) => changeHandler(e)}/>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" name="lastName" onChange={(e) => changeHandler(e)}/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" onChange={(e) => changeHandler(e)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" onChange={(e) => changeHandler(e)}
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassord">Confirm Password:</label>
                    <input type="password" name="confirmPassword" onChange={(e) => changeHandler(e)}/>
                </div>
            </form>
            <p>First Name: {user.firstName}</p>
            <p>Last Name: {user.lastName}</p>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
            <p>Confirm Password: {user.confirmPassword}</p>
        </div>
    )
}

export default Form