import React, { useState, useEffect } from "react";
import SupplierService from "../services/SupplierService";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBCardHeader,
} from "mdb-react-ui-kit";

const SuppliersList = () => {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    listAllSuppliers();
  }, []);

  const listAllSuppliers = () => {
    return SupplierService.getListOfSuppliers().then((data) => {
      setSuppliers(data.data);
    });
  };

  return (
    <div>
      <MDBCardHeader className="text-center text-uppercase py-4 mb-3">
        <h4>Suppliers</h4>
      </MDBCardHeader>
      <div className="row justify-content-center col-md-12 mx-auto">
        <div className="center-table card-body">
          <MDBTable striped hover bordered>
            <MDBTableHead className="stylish-color white-text">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Code</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {suppliers.map((e, index) => (
                <tr key={index}>
                  <td scope="row">{e.name}</td>
                  <td>{e.supplier_code}</td>
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </div>
      </div>
    </div>
  );
};

export default SuppliersList;
