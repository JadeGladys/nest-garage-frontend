import React, {Component, SyntheticEvent} from "react";
import '../login.css';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

class Register extends Component {
    firstName = '';
    lastName = '';
    userName = '';
    email = '';
    password = '';
    passwordConfirm = '';
    state = {
        redirect: false
    };
    submit = async (e:SyntheticEvent) => {
        e.preventDefault();
        
        const reponse = await axios.post('http://localhost:3000/api/register', {
            username: this.userName,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
            retypedPassword: this.passwordConfirm,
        });
        console.log(reponse.data);
        this.setState({
            redirect: true
        })
    }
    render() {
        if (this.state.redirect) {
            return <Navigate to="/login" replace />;
        }
        
        return(
            <div>
                <main className="form-signin w-100 m-auto">
                    <form onSubmit={this.submit}>
                        {/* <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/> */}
                        <h1 className="h3 mb-3 fw-normal">SignUP Here</h1>
                        <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInput" placeholder="firstName"
                            onChange={e => this.firstName = e.target.value}
                        />
                        <label>First Name</label>
                        </div>
                        <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInput" placeholder="lastName"
                            onChange={e => this.lastName = e.target.value}
                        />
                        <label>Last Name</label>
                        </div>
                        <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInput" placeholder="lastName"
                            onChange={e => this.userName = e.target.value}
                        />
                        <label>UserName</label>
                        </div>
                        <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                            onChange={e => this.email = e.target.value}
                        />
                        <label>Email</label>
                        </div>
                        <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                            onChange={e => this.password = e.target.value}
                        />
                        <label>Password</label>
                        </div>
                        <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Confirm Password"
                            onChange={e => this.passwordConfirm = e.target.value}
                        />
                        <label>Confirm Password</label>
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
}

export default Register;