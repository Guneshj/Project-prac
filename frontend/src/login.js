import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Validation from './LoginValidations';
import axios from 'axios'

function Login() {
    const[values,setValues] = useState({
        email: '',
        password:''
    })
    const navigate = useNavigate();
    const [errors,setErrors] =useState({})

    const handleInput = (event) => {
        setValues(prev => ({...prev,[event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.email === "" && errors.password === ""){
            axios.post('http://localhost:8081/login',values)
            .then(res=> {
                if(res.data === "Success")
                {
                    navigate('/home');
                }
                else{
                    alert("No Record Existed");
                }

            })
            .catch(err => console.log(err));
        }
    }
    
  return (
    <div className='d-flex justify-content-center align-items-center ng-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <form action="" onSubmit={handleSubmit}>
                <h2>Sign-In</h2>
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" placeholder='Enter Email' name='email'
                    onChange={handleInput} className='form-control rounded-0'/>
                    {errors.email && <span className='text-denger'>{errors.email}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type="password" placeholder='Enter Password' name='password'
                     onChange={handleInput} className='form-control rounded-0'/>
                     {errors.password && <span className='text-denger'>{errors.password}</span>}
                </div>
                <button type='submit' className='btn btn-success'>Log in</button>
              <p>You are agree to our terms and Policies</p>
                <Link to="/signup" className='btn btn-default border text-decoration-none'>Create Account</Link>
            </form>
        </div>
    </div>
  )
}

export default Login