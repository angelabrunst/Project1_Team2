import ProductData from "./productData.js";
import ProductList from "./productList.js";

// Create an instance of our ProductData class.
const dataSource = new ProductData("tents");
// console.log(dataSource.getData());

// Get the element we want the product list to render in
const listElement = document.querySelector(".product-list");

// Create an instance of our ProductList class and send it the correct information.
const myProductList = new ProductList("tents", dataSource, listElement);

// Call the init method to show our products
myProductList.init();
