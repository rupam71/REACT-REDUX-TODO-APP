import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../history';
import { singlePost } from './../actions/index';
import Author from './Author';
import {Helmet} from "react-helmet";

class Posts extends Component {
    state = {  }
    componentDidMount() {
        this.props.singlePost(this.props.match.params.id)
        
    }
    render() { 
        if(!this.props.auth.user) history.push("/")
        return ( 
            <div>
                <Helmet>
                    <title>{this.props.post.title}</title>
                    <meta name="description" content={this.props.post.body} />
                </Helmet>
                <div className="card" style={{width: "100%", margin:"50px"}}>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.post.title}</h5>
                        {/* {document.title = this.props.post.title} */}
                        <h6 className="card-subtitle mb-2 text-muted">
                            <Author userId={this.props.post.userId}/>
                        </h6>
                        <p className="card-text">{this.props.post.body}</p>
                    </div>
                </div>
            </div>
         );
    }
}
 
const mapStateToProps = (state) => { 
    return {
        auth : state.auth,
        post : state.singlePost
    }
}
 
export default connect(mapStateToProps,{singlePost})(Posts);