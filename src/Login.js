import React from 'react'
import "./Login.css"
import TextField from "@mui/material/TextField"
import { InputAdornment } from '@mui/material'


import bgimage from "./bgimage.jpg"
const Login=()=> {
  return (
    <div className='login-container' style={{backgroundImage:`url(${bgimage})`,backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
        <div className='form'>
        <form>
        <div className='login-from'>
            <h2>Login</h2>
            <div className='form-control'>
                <div className='inputs'>
                    <TextField 
                        id="username"
                        label="Username"
                        placeholder='Type Your username'
                        InputProps={{
                            startAdornment:(
                                <InputAdornment position='start'>
                                    <i class="zmdi zmdi-account material-icons-name"></i>
                                </InputAdornment>
                            ),
                        }}
                        variant='standard'
                    />
                </div>
                <div className='input'>
                    <TextField 
                        id="password"
                        label="Password"
                        placeholder='Type Your password'
                        InputProps={{
                            startAdornment:(
                                <InputAdornment position='start'>
                                    <i class="zmdi zmdi-lock material-icons-name"></i>
                                </InputAdornment>
                            ),
                        }}
                        variant='standard'
                    />
                </div>
                <div className='fp'><p>Forgot Password?</p></div>
                <div className='button'>
                    <button type="submit" className='btn'>LOGIN</button>
                </div>
                <div className='sp-text'>
                    <p>Or sign up using</p>
                </div>
                <div className='social-media'>
                <i class="zmdi zmdi-facebook-box" style={{paddingRight:"1rem"}}></i>
                <i class="zmdi zmdi-twitter-box" style={{paddingRight:"1rem"}}></i>
                <i class="zmdi zmdi-google"></i>
                    
                </div>
            </div>
            
        </div>
        </form>
        </div>
     </div>
    
  )
}
export default Login
