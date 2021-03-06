import ExternalServices from "./ExternalServices.js";
import ProductList from "./ProductList.js";
import { loadHeaderFooter, getParam } from "./utils.js";

loadHeaderFooter();

const category = getParam("category");

// Create an instance of our ExternalServices class.
const dataSource = new ExternalServices();

// Get the element we want the product list to render in
const listElement = document.querySelector(".product-list");

// Create an instance of our ProductList class and send it the correct information.
const myProductList = new ProductList(category, dataSource, listElement);

// Call the init method to show our products
myProductList.init();
