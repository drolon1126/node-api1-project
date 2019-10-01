import React from 'react';
import { useDispatch } from 'react-redux';
import {deleteUser, popForm} from '../actions/actions';

const User = props => {
  const dispatch = useDispatch();

  return (
    <>
      <h3>{props.user.name}</h3>
      <p>{props.user.bio}</p>
      <button onClick = {e=>{
        e.preventDefault();
        dispatch(deleteUser(props.user.id));
      }}>Delete</button>
      <button onClick = {e=>{
        e.preventDefault();
        dispatch(popForm(props.user));
        props.history.push('/update');
      }}>Update</button>
    </>
  );
}

export default User;