import React from 'react';
import { Route } from 'react-router-dom';
import UserList from './components/userList';
import AddForm from './components/addForm';
import UpdateForm from './components/updateForm';
import NavBar from './components/navBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>NODE EXPRESS USER API</h1>
      <NavBar/>

      <Route exact path='/' component={UserList}/>
      <Route path = '/add' component={AddForm} />
      <Route path = '/update' component={UpdateForm} />
      
    </div>
  );
}

export default App;
