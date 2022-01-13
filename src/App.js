import "./App.css";
import ProductsList from "./components/ProductsLIst";
import Form from "./components/Form";
import SuppliersList from "./components/SuppliersList";
import { Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand navbar-dark bg-info">
        <Link to={"/"} className="navbar-brand">
          Inventory Managment
        </Link>
        <div className="navbar-nav mr-auto"></div>
        <div className="navbar-nav ml-auto">
          <Link to={"/products"} className="navbar-brand">
            Products
          </Link>
          <Link to={"/suppliers"} className="navbar-brand">
            Suppliers
          </Link>
        </div>
      </nav>
      <div>
        <Switch>
          <Route exact path={["/", "/products"]} component={ProductsList} />
          <Route path={"/suppliers"} component={SuppliersList} />
          <Route path="/products/add" component={Form} />
          <Route path="/products/:id" component={Form} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
