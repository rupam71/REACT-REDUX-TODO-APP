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
                    <Link to="/table1" class="btn btn-primary m-3">Create Your task</Link>
                    <Link to="/table2" class="btn btn-primary m-3">JSON PlaceHolder</Link>
                </div>
            )
        } else {
            return (
                <div>
                    <Link to="/signup" class="btn btn-primary m-3">Sign Up</Link>
                    <Link to="/login" class="btn btn-info m-3">Login</Link>
                </div>
            )
        }
    }
    render() { 
        return ( 
            <div>
                <div class="row header">
                    <div class="col-md-4" style={{padding: "102px 16px 0"}}>
                        <img class="image-left" src={left} alt="left" />
                    </div>
                    <div class="col-md-4" style={{alignSelf: "center"}}>
                        <div class="text-center">
                            <h1><i class="fas fa-clipboard-list "></i></h1>
                            <h1>Todo Land</h1>
                            <h4>Create Todo, Save Time</h4>
                            
                            {this.renderButton()}
                        </div>
                    </div>
                    <div class="col-md-4" style={{padding: "44px 0 0 100px"}}>
                        <img class="image-right" src={right} alt="right" />
                    </div>
                </div>
            </div>
         );
    }
}
 
const mapStateToProps = (state) => {
    console.log(state)
    return {
        user : state.auth.user
    }
}
export default connect(mapStateToProps,{})(Home);