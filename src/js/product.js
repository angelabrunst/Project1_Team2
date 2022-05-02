import ProductData from "./productData.js";
import ProductDetails from "./productDetails.js";
import { getParam } from "./utils.js";
const dataSource = new ProductData("tents");
// console.log(dataSource.getData());
const productId = getParam("product");
// console.log(dataSource.findProductById(productId));

const product = new ProductDetails(productId, dataSource);
product.init();

