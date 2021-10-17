// import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./style.css"
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/register" exact component={Register}/>
          <Route path="/main" exact component={Main}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
