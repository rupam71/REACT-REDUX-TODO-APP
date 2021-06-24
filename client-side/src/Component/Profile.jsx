import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component {
    state = {  }
    render() { 
        console.log(this.props.user)
        return ( 
            <div>
                <h3 className="text-center m-3">Name : {this.props.user.name}</h3>
                <h3 className="text-center m-3">Email : {this.props.user.email}</h3>
                <h3 className="text-center m-3">Phone Number : {this.props.user.phoneNumber}</h3>
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
export default connect(mapStateToProps,{})(Profile);