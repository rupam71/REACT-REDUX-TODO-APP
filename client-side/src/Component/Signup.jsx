import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup,clearMessage } from './../actions/index';
import history from '../history';

class Signup extends Component {
    state = { 
        name : '',
        email : '',
        password : '',
        phoneNumber : ''
     }

     onFormSubmit = event => {
        event.preventDefault();
        this.props.signup(this.state)
     }

    render() { 
        if(this.props.message === "Success") {
            history.push('/login');
            this.props.clearMessage()
        }

        return ( 
            <div>
                <h1 className="text-center mt-5">Signup</h1>
                <p className="text-center mt-5" style={{color:'red'}}>{this.props.message}</p>
                <form onSubmit={this.onFormSubmit} className="lgnform">
                    <div className="form-group my-3 mx-5">
                        <label>Name</label>
                        <input 
                        value = {this.state.name}                        
                        onChange={ e => this.setState({name: e.target.value})}
                        type="text" class="form-control" required placeholder="Enter Your Name"></input>
                    </div>
                    <div className="form-group my-3 mx-5">
                        <label>Email Address</label>
                        <input 
                        value = {this.state.email}                        
                        onChange={ e => this.setState({email: e.target.value})}
                        type="email" class="form-control" required placeholder="Enter Your Email"></input>
                    </div>
                    <div className="form-group my-3 mx-5">
                        <label> Password</label>
                        <input 
                        value = {this.state.password}                        
                        onChange={ e => this.setState({password: e.target.value})}
                        type="password" class="form-control" required placeholder="Enter Your Password"></input>
                    </div>
                    <div className="form-group my-3 mx-5">
                        <label>Phone Number</label>
                        <input 
                        value = {this.state.phoneNumber}                        
                        onChange={ e => this.setState({phoneNumber: e.target.value})}
                        type="text" class="form-control" required placeholder="Enter Your Phone Number"></input>
                    </div>
                    <div className="ms-5">
                        <button type="submit" class="btn btn-primary m-3">Sign Up</button><br/>
                        <Link to="/login">Already Have An Account?</Link>
                    </div>
                </form>
            </div>
         );
    }
}
 
const mapStateToProps = (state) => {
    return {
        message : state.auth.message
    }
}
export default connect(mapStateToProps,{signup,clearMessage})(Signup);