import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../history';
import { singlePost } from './../actions/index';
import Author from './Author';

class Posts extends Component {
    state = {  }
    componentDidMount() {
        this.props.singlePost(this.props.match.params.id)
        console.log(this.props.match.params.id)
    }
    render() { 
        if(!this.props.auth.user) history.push("/")
        return ( 
            <div>
                <div class="card" style={{width: "100%", margin:"50px"}}>
                    <div class="card-body">
                        <h5 class="card-title">{this.props.post.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">
                            <Author userId={this.props.post.userId}/>
                        </h6>
                        <p class="card-text">{this.props.post.body}</p>
                    </div>
                </div>
            </div>
         );
    }
}
 
const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth : state.auth,
        post : state.singlePost
    }
}
 
export default connect(mapStateToProps,{singlePost})(Posts);