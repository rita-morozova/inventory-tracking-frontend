import axios from "axios";

const baseUrl = "https://inventory-tracking-mm.herokuapp.com/api/v1";

class ProductService {
  getListOfProducts() {
    return axios.get(`${baseUrl}/products`);
  }

  addProduct(product) {
    return axios.post(`${baseUrl}/products`, product);
  }

  getProduct(id) {
    return axios.get(`${baseUrl}/products/${id}`);
  }

  editProduct(id, product) {
    return axios.put(`${baseUrl}/products/${id}`, product);
  }

  deleteProduct(id) {
    return axios.delete(`${baseUrl}/products/${id}`);
  }

  filterIsFlammable() {
    return axios.get(`${baseUrl}/filterFlammable/?q=Flammable`);
  }

  filterQtyDes() {
    return axios.get(`${baseUrl}/filterQtyDes/?q=QTY`);
  }

  filterQtyAsc() {
    return axios.get(`${baseUrl}/filterQtyAsc/?q=QTY`);
  }

  exportFile() {
    return axios.get(`${baseUrl}/export`);
  }
}

export default new ProductService();
