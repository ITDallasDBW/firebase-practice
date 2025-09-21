import React from 'react';
import './App.css';
import { auth, db } from './firebase/init';
import {  
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
 } from "firebase/auth";

function App() {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);

React.useEffect(() => {
  onAuthStateChanged(auth, (user ) => {
    setLoading(false);
    console.log(user); 
    if (user) {
      setUser(user)
    }
  })
}, []);

  function register() {
    console.log('register');
    createUserWithEmailAndPassword(auth, '2email@email.com', 'test123')
    .then((user) => {
      console.log(user)
    })
    .catch ((error ) => {
      console.log(error)
    })
  }

  function login() {
signInWithEmailAndPassword(auth, '2email@email.com', 'test123')
    .then(({user}) => {
      setUser(user);
      console.log(user)
    })
    .catch ((error ) => {
      console.log(error.message);
    })
  }


  function logout() {
    signOut(auth);
    setUser({});
    console.log('logout')
  }
  return (
    <div className="App">
      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
      {loading ? 'Loading...' : user.email}
    </div>
  );
}

export default App;
