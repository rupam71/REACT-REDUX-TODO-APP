import React, { Component } from 'react';
import left from './welcome-left.png';
import right from './welcome-right.png';
import './home.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
    state = {  }
    renderButton = () => {
        if(this.props.user){
            return (
                <div>
                    <Link to="/table1" className="btn btn-primary m-3">Create Your task</Link>
                    <Link to="/table2" className="btn btn-primary m-3">JSON PlaceHolder</Link>
                </div>
            )
        } else {
            return (
                <div>
                    <Link to="/signup" className="btn btn-primary m-3">Sign Up</Link>
                    <Link to="/login" className="btn btn-info m-3">Login</Link>
                </div>
            )
        }
    }
    render() { 
        return ( 
            <div>
                <div className="row header">
                    <div className="col-md-4" style={{padding: "102px 16px 0"}}>
                        <img className="image-left" src={left} alt="left" />
                    </div>
                    <div className="col-md-4" style={{alignSelf: "center"}}>
                        <div className="text-center">
                            <h1><i className="fas fa-clipboard-list "></i></h1>
                            <h1>Todo Land</h1>
                            <h4>Create Todo, Save Time</h4> 
                                {this.renderButton()}
                        </div>
                    </div>
                    <div className="col-md-4" style={{padding: "44px 0 0 100px"}}>
                        <img className="image-right" src={right} alt="right" />
                    </div>
                </div>
            </div>
         );
    }
}
 
const mapStateToProps = (state) => {
    return {
        user : state.auth.user
    }
}
export default connect(mapStateToProps,{})(Home);