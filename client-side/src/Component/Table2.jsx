import React, { Component } from 'react';
import { connect } from 'react-redux';
import { allPost } from './../actions/index';
import history from '../history';
import { Link } from 'react-router-dom';

class Table2 extends Component {
    state = {  }

    componentDidMount() {
        this.props.allPost();
    }
    render() { 
        if(!this.props.auth.user) history.push("/")
        
        return ( 
            <div>
                <h1 className="text-center m-5">Json placeholder</h1>
                <table className="table table-borderless mt-3 my-5">
                    <thead className="thead my-5">
                        {
                            this.props.post.map(posts=>{
                                return (
                                    <tr key={posts.id} style={{backgroundColor:'#F8F9FA',border:'1px solid black'}}>
                                        <th scope="col">
                                            <Link to={"posts/"+posts.id} style={{color:'black',textDecoration:'none',fontSize:'18px',margin:'20px'}}>{posts.title}</Link>
                                        </th>
                                    </tr>
                                )
                            })
                        }                        
                    </thead>
                </table>
            </div>
         );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth : state.auth,
        post : state.post
    }
}
 
export default connect(mapStateToProps,{allPost})(Table2);