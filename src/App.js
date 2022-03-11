import "./App.css";
import HomePage from "./pages/homePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Shop from "./pages/shop/shop";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/shop" component={Shop} />
          <Route path="/" exact={true} component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
