import axios from "axios";

const baseUrl =
  "https://inventory-tracking-mm.herokuapp.com/api/v1/suppliers";

class SupplierService {
  getListOfSuppliers() {
    return axios.get(baseUrl);
  }
}

export default new SupplierService();
