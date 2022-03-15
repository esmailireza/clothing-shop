import "./App.css";
import HomePage from "./pages/homePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Shop from "./pages/shop/shop";
import CartProvider from "./providers/cartProvider";
import CartPage from "./pages/cartPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Checkout from "./pages/checkout/checkout";
import SignupPage from "./pages/signupPage";
import LoginPage from "./pages/loginPage";
function App() {
  return (
    <Router>
      <CartProvider>
        <ToastContainer />
        <div className="App">
          <Switch>
            <Route path="/cart" component={CartPage} />
            <Route path="/shop" component={Shop} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/loginPage" component={LoginPage} />
            <Route path="/signupPage" component={SignupPage} />
            <Route path="/" exact={true} component={HomePage} />
          </Switch>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
