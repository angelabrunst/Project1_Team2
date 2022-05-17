var l = (r, e, t) =>
  new Promise((s, o) => {
    var a = (i) => {
        try {
          c(t.next(i));
        } catch (n) {
          o(n);
        }
      },
      h = (i) => {
        try {
          c(t.throw(i));
        } catch (n) {
          o(n);
        }
      },
      c = (i) => (i.done ? s(i.value) : Promise.resolve(i.value).then(a, h));
    c((t = t.apply(r, e)).next());
  });
import {
  getLocalStorage as u,
  setLocalStorage as m,
  alertMessage as p,
} from "./utils.js";
import d from "./ExternalServices.js";
export default class x {
  constructor(e, t) {
    (this.key = e),
      (this.outputSelector = t),
      (this.list = []),
      (this.itemTotal = 0),
      (this.shipping = 0),
      (this.tax = 0),
      (this.orderTotal = 0);
  }
  init() {
    (this.list = u(this.key)), this.calculateItemSummary();
  }
  calculateItemSummary() {
    const e = document.querySelector(this.outputSelector + " #cartTotal"),
      t = this.list.map((o) => o.FinalPrice);
    (this.itemTotal = t.reduce((o, a) => o + a)),
      (e.innerText = "$" + this.itemTotal);
    const s = document.querySelector(this.outputSelector + " #num-items");
    s.innerText = this.list.length;
  }
  calculateOrdertotal() {
    (this.shipping = 10 + (this.list.length - 1) * 2),
      (this.tax = (this.itemTotal * 0.06).toFixed(2)),
      (this.orderTotal = (
        parseFloat(this.itemTotal) +
        parseFloat(this.shipping) +
        parseFloat(this.tax)
      ).toFixed(2)),
      this.displayOrderTotals();
  }
  displayOrderTotals() {
    const e = document.querySelector(this.outputSelector + " #shipping"),
      t = document.querySelector(this.outputSelector + " #tax"),
      s = document.querySelector(this.outputSelector + " #orderTotal");
    (e.innerText = "$" + this.shipping),
      (t.innerText = "$" + this.tax),
      (s.innerText = "$" + this.orderTotal);
  }
  checkout() {
    return l(this, null, function* () {
      const e = document.forms.checkout,
        t = g(e);
      (t.orderDate = new Date()),
        (t.orderTotal = this.orderTotal),
        (t.tax = this.tax),
        (t.shipping = this.shipping),
        (t.items = S(this.list));
      try {
        const s = yield T.checkout(t);
        m("so-cart", []), location.assign("/checkout/checkedout");
      } catch (s) {
        for (let o in s.message) p(s.message[o]);
      }
    });
  }
}
const T = new d();
function g(r) {
  const e = new FormData(r),
    t = {};
  return (
    e.forEach(function (s, o) {
      t[o] = s;
    }),
    t
  );
}
function S(r) {
  const e = r.map((t) => ({
    id: t.Id,
    price: t.FinalPrice,
    name: t.Name,
    quantity: 1,
  }));
  return e;
}
