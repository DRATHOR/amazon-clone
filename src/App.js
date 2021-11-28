
import './App.css';
import Header from './Header';
import Home from './Home'
import {BrowserRouter as Router, Switch , Route } from 'react-router-dom'
import Checkout from './Checkout';

function App() {
  return (
    <Router>
        <div>
          <Switch>
            <Route path="/" exact>
                <Header/>
                <Home/>
            </Route>
            <Route path="/checkout">
                <Header/>
                <Checkout/>
            </Route>
          </Switch>
      
      {/* home */}

       </div>
    </Router>
    
  );
}

export default App;
