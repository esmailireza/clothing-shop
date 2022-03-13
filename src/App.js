import "./App.css";
import HomePage from "./pages/homePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Shop from "./pages/shop/shop";
import CartProvider from "./providers/cartProvider";
import CartPage from "./pages/cartPage";
function App() {
  return (
    <Router>
      <CartProvider>
        <div className="App">
          <Switch>
            <Route path="/cart" component={CartPage} />
            <Route path="/shop" component={Shop} />
            <Route path="/" exact={true} component={HomePage} />
          </Switch>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
