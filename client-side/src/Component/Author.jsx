import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAuthor } from './../actions/index';

class Author extends Component {
    state = {  }
    componentDidUpdate(prevProps) {
        if (this.props.userId !== prevProps.userId){
            this.props.getAuthor(this.props.userId)
        }
    }

    render() { 
        console.log("CDM33: ",this.props.userId)
        // this.props.getAuthor(this.props.userId)
        return ( 
            <div>
                {this.props.author.name}
            </div>
         );
    }
}
 
const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth : state.auth,
        author : state.author
    }
}
 
export default connect(mapStateToProps,{getAuthor})(Author);