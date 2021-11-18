import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Details from "./containers/Details";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/details/:id" component={Details} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
