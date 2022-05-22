import { loadHeaderFooter } from "./utils.js";
import CartList from "./cartList.js";

loadHeaderFooter();

const myCartList = new CartList(
  "so-cart",
  document.querySelector(".product-list")
);
myCartList.init();

//check to see if there is anything in the cart...
if (myCartList.total > 0) {
  // show our checkout button and total if there are items in the cart.
  document.querySelector(".list-footer").classList.remove("hide");
}

const p = document.querySelector(".cart-card__remove");

if (p != null || p != undefined) {
  p.addEventListener("click", () => {
    const productId = p.dataset.id;
    // console.log("clicked - productId: " + productId +  "  e.target: " + e.target);
    myCartList.removeFromCart(productId);
  });
}
