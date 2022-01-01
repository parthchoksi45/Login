import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import Login from "./components/pages/Login";
function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Homepage} />
        <Switch>
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
