import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import MoreCars from './Components/MoreCars/MoreCars/MoreCars';
import Footer from './Components/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/explore">
            <MoreCars/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
