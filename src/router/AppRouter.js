import '../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from '../components/Header'
import Home from '../pages/Home'
import About from '../pages/About'
function AppRouter() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/home">
          <Home/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
      </Switch>
    </Router>
  )
}

export default AppRouter;
