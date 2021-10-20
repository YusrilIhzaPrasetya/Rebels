import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./style.css"
import Main from "./pages/Main";
import PublicRouting from "./utils/PublicRouting";
import PrivateRouting from "./utils/PrivateRouting";
import Crypto from "./pages/Crypto-currency";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PublicRouting path="/" exact component={Home}/>
          <PublicRouting path="/login" exact component={Login}/>
          <PublicRouting path="/register" exact component={Register}/>
          <PrivateRouting path="/crypto" exact component={Crypto}/>
          <PrivateRouting path="/main" exact component={Main}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
