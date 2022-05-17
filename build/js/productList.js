var l = (s, t, e) =>
  new Promise((i, c) => {
    var o = (r) => {
        try {
          a(e.next(r));
        } catch (n) {
          c(n);
        }
      },
      m = (r) => {
        try {
          a(e.throw(r));
        } catch (n) {
          c(n);
        }
      },
      a = (r) => (r.done ? i(r.value) : Promise.resolve(r.value).then(o, m));
    a((e = e.apply(s, t)).next());
  });
import { renderListWithTemplate as y } from "./utils.js";
export default class d {
  constructor(t, e, i) {
    (this.category = t), (this.dataSource = e), (this.listElement = i);
  }
  init() {
    return l(this, null, function* () {
      const t = yield this.dataSource.getData(this.category);
      this.renderList(t),
        (document.querySelector(".title").innerHTML = this.category);
    });
  }
  renderList(t) {
    this.listElement.innerHTML = "";
    const e = document.getElementById("product-card-template");
    y(e, this.listElement, t, this.prepareTemplate);
  }
  prepareTemplate(t, e) {
    return (
      (t.querySelector("a").href += e.Id),
      (t.querySelector("img").src = e.Images.PrimarySmall),
      (t.querySelector("img").srcset +=
        e.Images.PrimaryMedium +
        " 1x, " +
        e.Images.PrimaryLarge +
        " 2x, " +
        e.Images.PrimaryExtraLarge +
        " 3x"),
      (t.querySelector("img").alt += e.Name),
      (t.querySelector(".card__brand").textContent = e.Brand.Name),
      (t.querySelector(".card__name").textContent = e.NameWithoutBrand),
      (t.querySelector(".product-card__price").textContent += e.FinalPrice),
      (t.querySelector(".product-card__discount").textContent += Math.round(
        e.SuggestedRetailPrice - e.FinalPrice
      )),
      t
    );
  }
}
