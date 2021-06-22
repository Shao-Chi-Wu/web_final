import './App.css';
import SignIn from './start_page';
import Louisa from './Louisa';
import Navbar from './Navbar';
import SD from './Drinks';
import SF from './Foods';
import LD from './L_Drinks';
import LF from './L_Foods';
import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import ReactGA from 'react-ga';

function initizeAnalytics(){
  ReactGA.initialize("G-80TLZDV7KD")
  ReactGA.pageview('/')
}

function App() {
  initizeAnalytics();
  return (
      <Router>
          <Switch>
            <Route path="/" component={SignIn} exact={true}/>
            <Route path="/starbucks" component={Navbar}/>
            <Route path="/louisa" component={Louisa}/>
            <Route path="/starbucks_drinks" component={SD}/>
            <Route path="/starbucks_foods" component={SF}/>
            <Route path="/louisa_drinks" component={LD}/>
            <Route path="/louisa_foods" component={LF}/>
          </Switch>
      </Router>
  );
}



export default App;

