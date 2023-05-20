import React from 'react'
import "./Login.css"
import TextField from "@mui/material/TextField"
import { InputAdornment } from '@mui/material'
import { useState, useRef } from 'react';
import Axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

import bgimage from "./bgimage.jpg"

const Login=()=> {

  const [SuccessMsg, setSuccessMsg] = useState("")
  const [ErrorMsg, setErrorMsg] = useState("")
  const [valid_token, setValidToken] = useState([]);
  const captchaRef = useRef(null);

  const SITE_KEY = process.env.REACT_APP_reCAPTCHA_SITE_KEY;
  const SECRET_KEY = process.env.REACT_APP_reCAPTCHA_SECRET_KEY;



  const handleSubmit = async (e) => {
    e.preventDefault();
    let token = captchaRef.current.getValue();
    captchaRef.current.reset();

   
    if(token){
      
      let valid_token = await verifyToken(token);
      setValidToken(valid_token);

      if(valid_token[0].success === true){
        console.log("verified");
        setSuccessMsg("You have Registered Successfully")
       
      }else{
        console.log("not verified");
        setErrorMsg(" Sorry!! Verify you are not a bot")
      }

  }
}

const verifyToken = async (token) => {
  let APIResponse = [];

  try {
    let response = await Axios.post(`http://localhost:8000/verify-token`, {
      reCAPTCHA_TOKEN: token,
      Secret_Key: SECRET_KEY,
    });
    APIResponse.push(response['data']);
    return  APIResponse;
  } catch (error) {
    console.log(error);
  }
};



  return (
    <div className='login-container' style={{backgroundImage:`url(${bgimage})`,backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
        <div className='form'>
        <form onSubmit={handleSubmit}>
             {valid_token.length > 0 && valid_token[0].success === true ? <h3 className="textSuccess">{SuccessMsg}</h3>: <h3 className="textError">{ErrorMsg} </h3> }         
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
                
                  <ReCAPTCHA
                    className="recaptcha"
                    sitekey="6LeTHx8mAAAAAHAWlIUNV0NRWQOXbBpF9gR3nr1B"
                    ref={captchaRef}
                  />
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
