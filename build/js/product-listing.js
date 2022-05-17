import t from "./ExternalServices.js";
import o from "./ProductList.js";
import { loadHeaderFooter as r, getParam as e } from "./utils.js";
r();
const c = e("category"),
  s = new t(),
  i = document.querySelector(".product-list"),
  n = new o(c, s, i);
n.init();
