import ProductData from './productData.js';
const dataSource = new ProductData('tents');
console.log(dataSource.getData());

let products = [];


function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// get tents data
// or should we do it this way?
// async function getProductsDataAwait() {
//   products = await fetch("../json/tents.json").then(convertToJson);
// }

// add to cart button event handler
function addToCart(e) {
  const product = products.find((item) => item.Id === e.target.dataset.id);
  setLocalStorage(e.target.dataset.id, product);
}

// add listener to Add to Cart button
document.getElementById("addToCart").addEventListener("click", addToCart);
