import '../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from '../components/Header'
import Home from '../pages/Home'
import About from '../pages/About'
import Career from '../pages/Career'
import Contact from '../pages/Contact'
import Partners from '../pages/Partners'
import References from '../pages/References'
import Solutions from '../pages/Solutions'
import Footer from '../components/Footer';
function AppRouter() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/anasayfa">
          <Home/>
        </Route>
        <Route exact path="/hakkımızda">
          <About/>
        </Route>
        <Route exact path="/çözümlerimiz">
          <Solutions/>
        </Route>
        <Route exact path="/partnerlerimiz">
          <Partners/>
        </Route>
        <Route exact path="/referanslarımız">
          <References/>
        </Route>
        <Route exact path="/kariyer">
          <Career/>
        </Route>
        <Route exact path="/iletişim">
          <Contact/>
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default AppRouter;
