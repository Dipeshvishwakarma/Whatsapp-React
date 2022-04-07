import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <Router>
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
 

    </Router>
  );
}

export default App;
