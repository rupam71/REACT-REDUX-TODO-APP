import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from './../actions/index';
import history from '../history';

class Login extends Component {
    state = { 
        email : '',
        password : ''
     }
     onFormSubmit = event => {
        event.preventDefault();
        const {email,password} = this.state;
        console.log(email,password);
        this.props.login(this.state)
     }

    render() { 
        console.log(this.props.auth)
        if(this.props.auth.user) {
            history.push('/profile');
        }
        return ( 
            <div>
                <h1 className="text-center mt-5">Login</h1>
                <p className="text-center mt-5" style={{color:'red'}}>{this.props.auth.message}</p>
                <form onSubmit={this.onFormSubmit} className="lgnform">
                    <div className="form-group my-3 mx-5">
                        <label>Email Address</label>
                        <input 
                        value = {this.state.email}                        
                        onChange={ e => this.setState({email: e.target.value})}
                        type="email" class="form-control" required placeholder="Enter email"></input>
                    </div>
                    <div className="form-group my-3 mx-5">
                        <label> Password</label>
                        <input 
                        value = {this.state.password}                        
                        onChange={ e => this.setState({password: e.target.value})}
                        type="password" class="form-control" required placeholder="Enter password"></input>
                    </div>
                    <div className="ms-5">
                        <button type="submit" class="btn btn-primary m-3">Submit</button><br/>
                        <Link to="/signup">Create Account Here</Link>
                    </div>
                </form>
                
                
            </div>
         );
    }
}
 

const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth : state.auth
    }
}
export default connect(mapStateToProps,{login})(Login);