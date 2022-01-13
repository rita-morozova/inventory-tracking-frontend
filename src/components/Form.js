import React, { useState, useEffect } from "react";
import { MDBBtn, MDBInput, MDBCardHeader } from "mdb-react-ui-kit";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import ProductService from "../services/ProductService";

const Form = () => {
  const [product, setProduct] = useState({
    id: "",
    UPC: "",
    SKU: "",
    QTY: "",
    weight: "",
    dimensions: "",
    flammable: "",
    supplier: "",
  });

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    describeProduct();
  }, [id]);

  const describeProduct = () => {
    if (id !== undefined || id !== null) {
      ProductService.getProduct(id).then((res) => {
        const data = res.data;
        setProduct({
          id: data.id,
          UPC: data.UPC,
          SKU: data.SKU,
          QTY: data.QTY,
          weight: data.weight,
          dimensions: data.dimensions,
          flammable: data.flammable,
          supplier: data.supplier,
        });
      });
    } else {
      setProduct({
        id: "",
        UPC: "",
        SKU: "",
        QTY: "",
        weight: "",
        dimensions: "",
        flammable: "",
        supplier: "",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id === undefined) {
      ProductService.addProduct(product).then(() => {
        console.log("Added Product");
        console.log(product);
        history.push("/products");
      });
    } else if (id !== undefined) {
      ProductService.editProduct(id, product).then(() => {
        console.log("Updated Product");
        history.push("/products");
      });
    }
  };

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const { UPC, SKU, QTY, weight, dimensions, flammable, supplier } = product;

  return (
    <div className="justify-content-center form-container">
      <div className="col-md-14 mx-auto mb-5">
        <MDBCardHeader className="text-center text-uppercase py-4 mb-3">
          {id !== undefined ? <h4>Edit Product</h4> : <h4>New Product</h4>}{" "}
        </MDBCardHeader>
      </div>

      <form className="col-md-9 mx-auto" onSubmit={(e) => handleSubmit(e)}>
        <div className="row mb-4">
          <div className="col">
            <div className="form-outline">
              <MDBInput
                type="number"
                name="UPC"
                value={UPC}
                placeholder="UPC"
                onChange={(e) => handleChange(e)}
                required
                size="lg"
              />
            </div>
          </div>

          <div className="col">
            <div className="form-outline">
              <MDBInput
                type="text"
                name="SKU"
                value={SKU}
                placeholder="SKU"
                onChange={(e) => handleChange(e)}
                required
                size="lg"
              />
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col">
            <div className="form-outline">
              <MDBInput
                type="number"
                name="QTY"
                value={QTY}
                placeholder="QTY"
                onChange={(e) => handleChange(e)}
                required
                size="lg"
              />
            </div>
          </div>

          <div className="col">
            <div className="form-outline">
              <select
                className="browser-default custom-select custom-select-lg "
                name="flammable"
                value={flammable}
                onChange={(e) => handleChange(e)}
                required
              >
                <option value="" disabled>
                  Flammable
                </option>
                <option>YES</option>
                <option>NO</option>
              </select>
            </div>
          </div>

          <div className="col">
            <div className="form-outline">
              <MDBInput
                type="text"
                name="weight"
                value={weight}
                placeholder="Weight"
                onChange={(e) => handleChange(e)}
                required
                size="lg"
              />
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col">
            <div className="form-outline">
              <MDBInput
                type="text"
                name="dimensions"
                value={dimensions}
                placeholder="Dimensions"
                onChange={(e) => handleChange(e)}
                required
                size="lg"
              />
            </div>
          </div>

          <div className="col">
            <div className="form-outline">
              <MDBInput
                type="text"
                name="supplier"
                value={supplier}
                placeholder="Supplier"
                onChange={(e) => handleChange(e)}
                required
                size="lg"
              />
            </div>
          </div>
        </div>

        <div className="d-grid gap-2 d-md-flex justify-content-md-end ">
          <Link to="/products">
            <MDBBtn outline color="info" className="btn mb-2 sized">
              Cancel
            </MDBBtn>
          </Link>
          <MDBBtn type="submit" className="btn btn-info mb-2 sized">
            Save
          </MDBBtn>
        </div>
      </form>
    </div>
  );
};

export default Form;
