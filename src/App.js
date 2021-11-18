import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Details from "./containers/Details";
import Search from "./containers/Search";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/details/:id" component={Details} />
        <Route path="/results" exact component={Home} />
        <Route path="/" exact component={Search} />
      </Switch>
    </Router>
  );
}

export default App;
