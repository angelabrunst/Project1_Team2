import { loadHeaderFooter as c } from "./utils.js";
import u from "./CheckoutProcess.js";
c();
const e = new u("so-cart", ".checkout-summary");
e.init(),
  document
    .querySelector("#zip")
    .addEventListener("blur", e.calculateOrdertotal.bind(e)),
  document.querySelector("#checkoutSubmit").addEventListener("click", (o) => {
    o.preventDefault();
    var t = document.forms[0],
      r = t.checkValidity();
    t.reportValidity(), r && e.checkout();
  });
