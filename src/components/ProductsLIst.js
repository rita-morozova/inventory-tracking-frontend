import React, { useState, useEffect } from "react";
import ProductService from "../services/ProductService";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBBtn,
  MDBCardHeader,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("None");
  const [data, setData] = useState([]);

  useEffect(() => {
    filterProducts();
    exportData();
  }, [filter]);

  const listAllProducts = () => {
    return ProductService.getListOfProducts().then((data) => {
      setProducts(data.data);
    });
  };

  const flammableProducts = () => {
    return ProductService.filterIsFlammable().then((data) => {
      setProducts(data.data);
    });
  };

  const QTYDESProducts = () => {
    return ProductService.filterQtyDes().then((data) => {
      setProducts(data.data);
    });
  };

  const QTYASCProducts = () => {
    return ProductService.filterQtyAsc().then((data) => {
      setProducts(data.data);
    });
  };

  const filterProducts = () => {
    if (filter === "None") {
      listAllProducts();
    }

    if (filter === "Flammable") {
      return flammableProducts();
    }

    if (filter === "QTY DES") {
      return QTYDESProducts();
    }

    if (filter === "QTY ASC") {
      return QTYASCProducts();
    }
  };

  const updateFilter = (e) => {
    setFilter(e.target.value);
  };

  const exportData = () => {
    return ProductService.exportFile().then((data) => {
      setData(data.data);
    });
  };

  const deleteProduct = (id) => {
    ProductService.deleteProduct(id).then(() => {
      console.log("Product deleted");
    });
    setProducts(products.filter((el) => el.id !== id));
  };

  return (
    <div>
      <MDBCardHeader className="text-center text-uppercase py-4 mb-3">
        <h4>Products</h4>
      </MDBCardHeader>
      <div className="row justify-content-center col-md-12 mx-auto">
        <div className="center-table card-body">
          <section className="table-add float-right mb-3 mr-2">
            <select
              value={filter}
              onChange={updateFilter}
              className="browser-default custom-select"
              style={{ width: "auto" }}
            >
              <option value="None">None</option>
              <option value="Flammable">Flammable</option>
              <option value="QTY DES">QTY DES</option>
              <option value="QTY ASC">QTY ASC</option>
            </select>
            <Link to={`/products/add`}>
              <MDBBtn>Add Product</MDBBtn>
            </Link>
            <CSVLink data={data} className="btn btn-primary">
              Export to CSV
            </CSVLink>
          </section>
          <MDBTable striped hover bordered>
            <MDBTableHead className="stylish-color white-text">
              <tr>
                <th scope="col">UPC</th>
                <th scope="col">SKU</th>
                <th scope="col">QTY</th>
                <th scope="col">FLAMMABLE</th>
                <th scope="col">ACTIONS</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {products.map((e, index) => (
                <tr key={index}>
                  <td>{e.UPC}</td>
                  <td>{e.SKU}</td>
                  <td>{e.QTY}</td>
                  <td>{e.flammable}</td>
                  <td>
                    <Link to={`/products/${e.id}`}>
                      <MDBIcon
                        className="ms-3"
                        icon="edit"
                        size="lg"
                        color="primary"
                      />
                    </Link>
                    <MDBIcon
                      icon="trash-alt"
                      className="p-3"
                      size="lg"
                      color="primary"
                      onClick={() => deleteProduct(e.id)}
                    />
                  </td>
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </div>
      </div>
    </div>
  );
};
export default ProductsList;
