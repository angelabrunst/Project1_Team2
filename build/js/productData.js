const n = "http://157.201.228.93:2992/";
function o(t) {
  if (t.ok) return t.json();
  throw new Error("Bad Response");
}
export default class c {
  constructor() {}
  getData(e) {
    return fetch(n + `products/search/${e}`)
      .then(o)
      .then((r) => r.Result);
  }
  findProductById(e) {
    return fetch(n + `product/${e}`)
      .then(o)
      .then((r) => r.Result);
  }
}
