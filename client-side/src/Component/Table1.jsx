import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { newTask,clearTask } from './../actions/index';
import history from '../history';

class Table1 extends Component {
    state = { 
        task : ''
     }
     onFormSubmit = event => {
        event.preventDefault();
        const task = this.state.task 
        const id = (this.props.task.length)+1 
        const date = moment().format('MMMM Do YYYY, h:mm:ss a');
        const Task = {
            id,
            task,
            date
        }
        this.props.newTask(Task)
        this.setState({task:''})
     }
     renderButton = () => {
        if(this.props.task.length != 0)  return (
        <button className="btn btn-danger" onClick={()=>this.props.clearTask()}>
                    Clear All Task
        </button>
        )
     }
    render() { 
        if(!this.props.auth.user) history.push("/")
        return ( 
            <div>
                <h1 className="text-center mt-5">Task (Static)</h1>
                    <form onSubmit={this.onFormSubmit} className="lgnform">
                        <div className="form-group my-3 mx-5">
                            <label>Add your task here</label>
                            <input 
                            value = {this.state.task}                        
                            onChange={ e => this.setState({task: e.target.value})}
                            type="text" class="form-control" required placeholder="Enter Your Task"></input>
                        </div>
                    </form>
                {this.renderButton()}
                <table className="table table-borderless">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Number</th>
                            <th scope="col">Task</th>
                            <th scope="col">Time</th>
                        </tr>
                    </thead>
                    <tbody>                    
                        {this.props.task.map(tasks =>{
                                return (
                                    <tr key={tasks.id}>
                                        <th scope="row">{tasks.id}</th>
                                        <td>{tasks.task}</td>
                                        <td>{tasks.date}</td>
                                    </tr>
                                )
                            })
                        }                 
                    </tbody>
                </table>
            </div>
         );
    }
}
 

const mapStateToProps = (state) => { 
    return {
        auth : state.auth,
        task : state.task
    }
}
export default connect(mapStateToProps,{newTask,clearTask})(Table1);