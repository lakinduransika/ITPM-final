import './App.css';
import CounterFunction from './components/CounterFunction';
import Header from './components/header';

import Images from './components/image';
import AllDetails from './components/AllDetails';
import ViewDetail from './components/ViewDetail';

import Footter from './components/footer';
import {BrowserRouter as Router, Route} from "react-router-dom"
import EditDetail from './components/EditDetail';
import AddDetail from './components/AddDetail';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Images/>
        
        <Route path="/add" exact component={AddDetail} />      
        <Route path="/" exact component={AllDetails} /> 
        <Route path="/viewdetail/:id" exact component={ViewDetail} /> 
        <Route path="/update/:id" exact component={EditDetail} />
          
        <Footter/> 
      </div>
    </Router>
  );
}

export default App;

