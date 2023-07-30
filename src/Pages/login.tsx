import axios from "axios";
import React, {useState, SyntheticEvent} from "react";
import { Navigate } from "react-router-dom";
import { SetStateAction, Dispatch } from 'react';

interface LoginProps {
    setToken: (accessToken: string) => void;  
    setAccessToken: Dispatch<SetStateAction<string>>;
  };

const Login = ({ setToken, setAccessToken }: LoginProps) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
  
    const submit = async (e: SyntheticEvent) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:3000/api/auth/login', {
          username,
          password
        }, { withCredentials: true });
  
        console.log("Login response:", response.data);
  
        // Check if the response contains a token
        
        if (response.data.token) {
          setToken(response.data.token);
          setAccessToken(response.data.token);
        }
  
        setRedirect(true);
      }
      catch (error) {
        console.error('Login failed:', error);
      }
    };
  
    if (redirect) {
      return <Navigate to="/" replace />;
    }

    return (
      <div>
          <main className="form-signin w-100 m-auto">
              <form onSubmit={submit}>
                {/* <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/> */}
                <h1 className="h3 mb-3 fw-normal">Login Here</h1>
                
                <div className="form-floating">
                <input type="text" className="form-control" id="floatingInput" placeholder="UserName"
                onChange={e => setUsername(e.target.value)}/>
                <label>UserName</label>
                </div>

                <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                onChange={e => setPassword(e.target.value)}/>
                <label>Password</label>
                </div>

                <div className="form-check text-start my-3">
                <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
                <label className="form-check-label">
                    Remember me
                </label>
                </div>
                <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2023</p>
              </form>
          </main>
      </div>  
    );
    }

export default Login;