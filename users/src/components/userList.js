import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {getUsers} from '../actions/actions';
import User from './user';

const UserList = (props) => {
  const users = useSelector(state=>state.users);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getUsers());
  },[users])

  return (
    <>
    <h2>List of Users</h2>
    {users && 
    users.map(user=>
      <User key={user.id} user={user} history={props.history}/>  
    )}
    </>
  );
}

export default UserList;