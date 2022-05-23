
import dashboard from './components/dashboard';
import Login from './components/Login';
import adminadd from './components/adminadd';

import './CSS/Login.css';


import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
  
       <Switch>

        
        <Route path="/dashboard" exact component={dashboard}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/adminadd" exact component={adminadd}/>
        
         
      
       </Switch>
     
       
    </div>
    </Router>
  );
}

export default App;