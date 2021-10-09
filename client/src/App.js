import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./style.css"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/register" exact component={Register}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
