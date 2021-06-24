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
        return ( 
            <div>
                {this.props.author.name}
            </div>
         );
    }
}
 
const mapStateToProps = (state) => {
    return {
        auth : state.auth,
        author : state.author
    }
}
 
export default connect(mapStateToProps,{getAuthor})(Author);