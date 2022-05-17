var s = (o, t, e) =>
  new Promise((i, u) => {
    var d = (n) => {
        try {
          c(e.next(n));
        } catch (r) {
          u(r);
        }
      },
      f = (n) => {
        try {
          c(e.throw(n));
        } catch (r) {
          u(r);
        }
      },
      c = (n) => (n.done ? i(n.value) : Promise.resolve(n.value).then(d, f));
    c((e = e.apply(o, t)).next());
  });
const a = "http://157.201.228.93:2992/";
function h(o) {
  return s(this, null, function* () {
    const t = yield o.json();
    if (o.ok) return t;
    throw { name: "servicesError", message: t };
  });
}
export default class p {
  constructor() {}
  getData(t) {
    return fetch(a + `products/search/${t}`)
      .then(h)
      .then((e) => e.Result);
  }
  findProductById(t) {
    return fetch(a + `product/${t}`)
      .then(h)
      .then((e) => e.Result);
  }
  checkout(t) {
    return s(this, null, function* () {
      const e = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(t),
      };
      return yield fetch(a + "checkout/", e).then(h);
    });
  }
}
