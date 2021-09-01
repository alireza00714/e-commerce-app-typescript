import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import ProductsListPage from "./Pages/ProductsListPage/ProductsListPage";
import SingleProduct from "./Components/SingleProduct/SingleProduct";
import BuyingLayout from "./Layouts/BuyingLayout/BuyingLayout";
import { Redirect, Route, Switch } from "react-router-dom";
import CartPage from "./Pages/CartPage/CartPage";

function App() {
  return (
    <BuyingLayout>
      <Switch>
        <Route path="/" exact={true}>
          <Redirect to="/buy" />
        </Route>
        <Route path="/buy" exact={true}>
          <HomePage />
        </Route>
        <Route path="/buy/products" exact={true}>
          <ProductsListPage />
        </Route>
        <Route path="/buy/products/single/:id">
          <SingleProduct />
        </Route>
        <Route path="/buy/products/:category">
          <ProductsListPage />
        </Route>
        <Route path="/pay/cart/1">
          <CartPage />
        </Route>
      </Switch>
    </BuyingLayout>
  );
}

export default App;
