import "./App.css";
import HomePage from "./pages/homePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Shop from "./pages/shop/shop";
import CartProvider from "./providers/cartProvider";
import CartPage from "./pages/cartPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckoutPage from "./pages/checkout/checkoutPage";
import SignupPage from "./pages/signupPage";
import LoginPage from "./pages/loginPage";
import FavoritePage from "./pages/favoritePage";
import ProductPage from "./pages/productPage";
import FavoriteProvider from "./providers/favoriteProvider";
function App() {
  return (
    <Router>
      <CartProvider>
        <FavoriteProvider>
          <ToastContainer />
          <div className="App">
            <Switch>
              <Route path="/products/:name" component={ProductPage} />
              <Route path="/cart" component={CartPage} />
              <Route path="/shop" component={Shop} />
              <Route path="/checkout" component={CheckoutPage} />
              <Route path="/loginPage" component={LoginPage} />
              <Route path="/signupPage" component={SignupPage} />
              <Route path="/favorite" component={FavoritePage} />
              <Route path="/" exact={true} component={HomePage} />
            </Switch>
          </div>
        </FavoriteProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
