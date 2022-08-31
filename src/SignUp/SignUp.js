import React from 'react'
import { Link } from 'react-router-dom'
import "./SignUp.css"
const SignUp = () => {
    return (
        <div className='signUpbody'>
            <div className='form-body'>
                <div className='second-bar'>
                    <h1>Create Your Account</h1>
                    <form>
                        <input type='text' placeholder='Name'></input>
                        <input type='text' placeholder='E-mail'></input>
                        <input type='text' placeholder='Password'></input>
                        <input type='text' placeholder='Confirm Password'></input>
                        <button >Sign Up</button>
                    </form>
                </div>


            </div>
            <Link to="/oceansite"></Link>

        </div>
    )
}

export default SignUp