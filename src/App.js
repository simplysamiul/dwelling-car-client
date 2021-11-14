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
import Login from './Components/Login/Login/Login';
import Register from './Components/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <AuthProvider>
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
          <PrivateRoute path="/boking_order/:id">
            <CarDetails />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <PrivateRoute path ="/dashboard">
            <Dashboard />
          </PrivateRoute>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;
