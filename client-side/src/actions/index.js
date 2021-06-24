import axios from 'axios'
import history from '../history'

export const signup = (value) => async dispatch => {
    await axios.post('/api/users/signup', value)
    .then(res => 
        dispatch({
            type: 'SIGN_UP',
            payload: {
                message : "Success"
            }
        })
    )
    .catch(err => {
        console.log(err.message)
        console.log("Daci")
        dispatch({
            type: 'SIGN_UP_ERROR',
            payload: {
                message : "Email Password Have Problem"
            }
        })
    })
     
    //  .catch(error => {
    //     console.log(error)
    //     console.log("Daci")
    //     dispatch({
    //         type: 'SIGN_UP_ERROR',
    //         payload: "Something Wrong"
    //     })
    //   });

    // history.push('/login');
}

// export const signup = (value) => async dispatch => {
//     const res = await axios.post('/api/users/signup', value)
    
//     dispatch({
//          type: 'SIGN_UP',
//          payload: res.data
//      })
//      history.push('/login');
// }


export const clearMessage = () => dispatch => {
    dispatch({
         type: 'SIGN_UP_ERROR',
         payload: {
            message : ""
        }
     })
     history.push('/login');
}


export const login = (value) => async dispatch => {
    await axios.post('/api/users/login', value)
    .then(res => 
        dispatch({
            type: 'LOGIN',
            payload: res.data
        })
    )
    .catch(err => {
        console.log(err)
        dispatch({
            type: 'LOGIN_ERROR',
            payload: {
                message : "Email and Password Not Match"
            }
        })
    })
}

export const logout = () => dispatch => {
    dispatch({
         type: 'LOGOUT',
         payload: ""
     })
     history.push('/');
}

export const newTask = (value) => dispatch => {
    dispatch({
         type: 'NEWTASK',
         payload: value
     })
}

export const clearTask = () => dispatch => {
    dispatch({
         type: 'CLEARTASK',
         payload: []
     })
}

export const  allPost = () => async dispatch => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        
        dispatch({
             type: 'ALLPOST',
             payload: res.data 
         })
    }

export const  singlePost = (value) => async dispatch => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${value}`)
        
        dispatch({
             type: 'SINGLEPOST',
             payload: res.data 
         })
    }

  

    export const getAuthor = (value) => async dispatch => {
        await axios.get(`https://jsonplaceholder.typicode.com/users/${value}`)
        .then(res => 
            dispatch({
                type: 'GETAUTHOR',
                payload: res.data
            })
        )
        .catch(err => {
            dispatch({
                type: 'GETAUTHOR',
                payload: []
            })
        })
    }

   

    // export const allPost = () => async dispatch => {  
    //     await axios.post('/api/users/login')
    //     .then(res => 
    //         dispatch({
    //             type: 'LOGIN',
    //             payload: res.data
    //         })
    //     )
    //     .catch(err => {
    //         console.log(err)
    //         dispatch({
    //             type: 'LOGIN_ERROR',
    //             payload: {
    //                 message : "Email and Password Not Match"
    //             }
    //         })
    //     })
    // }