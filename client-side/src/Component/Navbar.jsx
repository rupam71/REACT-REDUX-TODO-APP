import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout,clearTask } from './../actions/index';

class Navbar extends Component {
    state = {  }
    handleLogout = () => {
        this.props.logout()
        this.props.clearTask()
    }
    rendernavbar = () => {
        if(this.props.user){
            return (
                <ul className="navbar-nav justify-content-end">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/profile">Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/table1">Table 1</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/table2">Table 2</Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={this.handleLogout}            
                        className="nav-link" >Logout</Link>
                    </li>
                </ul>
            )
        } else {
            return (
                <ul className="navbar-nav justify-content-end">
                    <li className="nav-item">
                        <Link className="nav-link" to="/signup">Sign Up</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                </ul>
            )
        }
    }
    render() { 
        return ( 
            <div>
                <nav className="navbar navbar-expand-sm navbar-light bg-white my-3">
                    <div className="container-fluid">
                        <Link className="navbar-brand ms-5" to="/">Todo</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse d-flex justify-content-end me-5" id="navbarNav">
                            {this.rendernavbar()}
                        </div>
                    </div>
                </nav>
            </div>
         );
    }
}
 

const mapStateToProps = (state) => {
    return {
        user : state.auth.user
    }
}
export default connect(mapStateToProps,{logout,clearTask})(Navbar);