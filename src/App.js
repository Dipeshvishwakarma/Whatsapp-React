import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Login';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import { auth } from './firebase';


function App() {
  const [{ user },dispatch]= useStateValue();
  
  useEffect(() => {
    auth.onAuthStateChanged(user=>{
      dispatch(
        {
          type:"SET_USER",
          user: user
        }
      )
    })
  }, [])
  
  return (
    <Router>
      {!user?<Login/>:
    <div className="App">
       <div className="app__body">
       
       <Sidebar/>
       <Switch>
       <Route exact path="/">
       <Chat/>
       </Route>
       <Route exact path="/rooms/:roomId">
       <Chat/>
       </Route>
       </Switch>
         
       </div>
    </div>
       }

    </Router>
  );
}

export default App;
