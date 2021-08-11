import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login';
import {useStateValue} from './StateProvider';


function App() {
  const [{user} , disatch ] = useStateValue();
  
  return (
    <div className="App">
      {!user ?
      (
        <Login />
       ) : ( 
      <>
     <Header />

     <div className="app-body">
       <Sidebar />
       <Feed />
       <Widgets />

     </div>
     </>
      )}
      
    </div>
  );
}

export default App;