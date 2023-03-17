import React,{useState} from 'react';
import './App.css';
import AddUser from './component/AddUser';
import UserList from './component/UserList';

function App() {
  const [userDetails,setUserDeails]=useState([]);

  const addUserDetailsHandler = (uName,uAge) =>{
    setUserDeails((prevUserDetails)=>{
      return [{id:Math.random().toString(),
               name:uName,
              age:uAge },...prevUserDetails];
    });
  };


  return (
    <div className="App">
    <AddUser  onAddUserDetails={addUserDetailsHandler} />
    <UserList users={userDetails}></UserList>
    </div>
  );
}

export default App;
