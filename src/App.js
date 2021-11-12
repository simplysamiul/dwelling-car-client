import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import MoreCars from './Components/MoreCars/MoreCars/MoreCars';
import Footer from './Components/Shared/Footer/Footer';
import CarDetails from './Components/CarDetails/CarDetails';
import Menubar from './Components/Shared/Menubar/Menubar';

function App() {
  return (
    <div className="App">
      <Router>
        <Menubar />
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
          <Route path="/boking_order/:id">
            <CarDetails />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
