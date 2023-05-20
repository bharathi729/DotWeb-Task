import React from 'react'
import TextField from "@mui/material/TextField"
import { InputAdornment } from '@mui/material'
import "./Register.css"
const Register=() => {
  return (
    <div className='main-container'>
        
            <div className='left'>
                <h2 className='heading'>RENTAL APP</h2>
                <h3 className='para'>Welcome to ...</h3>
                <p className='para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</p>
            </div>
            <div className='right'>
                <p className='right-para'>LOGIN</p>
                <p className='right-para1'>Easily Using</p>
                <button className='btn'><i class="zmdi zmdi-google"></i></button> 
                <p className='right-para2'>OR Using Account Details</p>
                <div className='input'>
                    <TextField 
                        id="username"
                        className='ip'
                        placeholder='Your Username'
                    />
                </div>
                <div className='input2'>
                    <TextField 
                        id="password"
                        className='ip'
                        placeholder='Enter Password'
                        InputProps={{
                            endAdornment:(
                                <InputAdornment position='end'>
                                    <i class="zmdi zmdi-eye"></i>
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>
                <div className='forgot'>
                <label>
                    <input type="checkbox" /><b className='text'>Remember Me</b>
                </label>
                <p className='fp'><b>Forgot Password?</b></p>
                </div>
                <button className='btn1'><i class="zmdi zmdi-lock-outline"></i> LOGIN</button>
                <p className='right-para3'>New to RentalApp ?</p>
                <button className='btn2'><i class="zmdi zmdi-account-o"></i> Register</button>
            </div> 
    </div>
  )
}
export default Register;
