import { loadHeaderFooter as o } from "./utils.js";
import r from "./cartList.js";
o();
const t = new r("so-cart", document.querySelector(".product-list"));
t.init(),
  t.total > 0 &&
    document.querySelector(".list-footer").classList.remove("hide");
