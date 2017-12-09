import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Management from "./pages/Management";
import restaurantsignup from "./pages/restaurantsignup";
import Trivia from "./pages/Trivia";
import Restaurants from "./pages/Restaurants";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";


const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Management" component={Management} />
        <Route exact path="/restaurantsignup" component={restaurantsignup} />
        {/*<Route exact path="/CusSignIn" component={CusSignIn} />*/}
        <Route exact path="/Trivia" component={Trivia} />
        <Route exact path="/restaurants" component={Restaurants} />
        <Route exact path="/checkin/:id" component={Detail} />
        <Route exact path="/management/:id" component={Management} />
        <Route exact path="/signup" component={SignupForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
