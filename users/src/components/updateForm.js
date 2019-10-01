import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {updateUser, formUpdate} from '../actions/actions';

const UpdateForm = (props) => {
  const form = useSelector(state=>state.form);
  const dispatch = useDispatch();


  const updateForm = e => {
    dispatch(formUpdate(e.target.name,e.target.value));
  }

  return (
    <form onSubmit={e=>{
      e.preventDefault();
      dispatch(updateUser(form.id,{
        ...form
      }));
      props.history.push('/');
    }}>
      <div>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          value={form.name}
          name='name'
          id='name'
          onChange={updateForm}
        />
      </div>
      <div>
        <label htmlFor='bio'>Bio:</label>
        <input
          type='text'
          value={form.bio}
          name='bio'
          id='bio'
          onChange={updateForm}
        />
      </div>
      <button>Update User</button>
    </form>
  );

}

export default UpdateForm;