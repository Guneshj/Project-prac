import React from 'react'

function login() {
  return (
    <div className='d-flex justify-content-center align-items-center ng-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <form action="">
                <div className='mb-3'>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='Enter Email'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='Enter Password'/>
                </div>
                <button className='btn btn-success'>Log in</button>
                <p>You are agree to our terms and Policies</p>
                <button className='btn btn-default border'>Create Account</button>
            </form>
        </div>
    </div>
  )
}

export default login