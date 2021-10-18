import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./style.css"
import Main from "./pages/Main";
import PublicRouting from "./utils/PublicRouting";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PublicRouting path="/" exact component={Home}/>
          <PublicRouting path="/login" exact component={Login}/>
          <PublicRouting path="/register" exact component={Register}/>
          <Route path="/main" exact component={Main}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
