import ProductData from "./productData.js";
import ProductDetails from "./productDetails.js";
import { loadHeaderFooter, getParam } from "./utils.js";

loadHeaderFooter();

const dataSource = new ProductData();
const productId = getParam("product");
const product = new ProductDetails(productId, dataSource);
product.init();
