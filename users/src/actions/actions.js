import axios from 'axios';

export const START = 'START';
export const FAIL = 'FAIL';

export const GET_USER = 'GET_USER';
export const GET_USERS = 'GET_USERS';

export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const UPDATE_USER = 'UPDATE_USER';

export const UPDATE_FORM = 'UPDATE_FORM';
export const POP_FORM = 'POP_FORM';

export const getUsers = () => {
  return dispatch => {
    dispatch({type: START});
    axios
      .get('http://localhost:8000/api/users')
      .then(res=>{
        dispatch({type:GET_USERS, payload:res.data})
      })
      .catch(err=>{
        dispatch({type:FAIL, payload:err.response})
      })
  }
}

export const addUser = (user) => {
  return dispatch => {
    dispatch({type: START});
    axios
      .post('http://localhost:8000/api/users', user)
      .then(res=>{

        dispatch({type:ADD_USER, payload: {...res.data}})
      })
      .catch(err=>{
        dispatch({type:FAIL, payload:err.response})
      })
  }
}

export const deleteUser = (id) => {
  return dispatch => {
    dispatch({type: START});
    axios
      .delete(`http://localhost:8000/api/users/${id}`)
      .then(res=>{
        dispatch({type:DELETE_USER, payload:res.data.id})
      })
      .catch(err=>{
        dispatch({type:FAIL, payload:err.response})
      })
  }
}

export const updateUser = (id, user) => {
  return dispatch => {
    dispatch({type: START});
    axios
      .put(`http://localhost:8000/api/users/${id}`, user)
      .then(res=>{
        dispatch({type:UPDATE_USER, payload:res.data})
      })
      .catch(err=>{
        dispatch({type:FAIL, payload:err.response})
      })
  }
}

export const formUpdate = (key,value) => {
  return {
    type: UPDATE_FORM,
    payload: {key:key,value:value}
  }
}

export const popForm = (user) => {
  return {
    type: POP_FORM,
    payload: user
  }
}