import { renderListWithTemplate, getLocalStorage } from "./utils.js";

export default class CartList {
  constructor(key, listElement) {
    this.key = key;
    this.listElement = listElement;
    this.total = 0;
    this.totalItems = 0; //Jermain
    this.newlistElements = [];
  }

  async init() {
    const list = getLocalStorage(this.key);
    this.newlistElements = this.newListOfProduct(list);
    this.calculateListTotal(this.newlistElements);
    this.renderList(this.newlistElements);
  }
  newListOfProduct(list) {
    /*JERMAIN CAHNGE*/
    let newarray = list;
    let finalarray = [];
    while (newarray.length > 0) {
      let x = [];
      let temp = newarray[0];
      x = newarray.filter((item) => item.Id == temp.Id);
      let hola = { qty: x.length };
      Object.assign(temp, hola);
      finalarray.push(temp);
      newarray = newarray.filter((item) => item.Id !== temp.Id);
    }
    return finalarray;
  }

  calculateListTotal(list) {
    const amounts = list.map((item) => item.FinalPrice * item.qty);
    this.total = amounts.reduce((sum, item) => sum + item);
    this.totalItems = list.length;
  }
  calculateTotalItems() {
    /*JERMAIN CAHNGE*/
    this.init(); /*JERMAIN CAHNGE*/
    return this.totalItems; /*JERMAIN CAHNGE*/
  } /*JERMAIN CAHNGE*/

  renderList(list) {
    // make sure the list is empty
    this.listElement.innerHTML = "";
    //get the template
    const template = document.getElementById("cart-card-template");
    renderListWithTemplate(
      template,
      this.listElement,
      list,
      this.prepareTemplate
    );
    document.querySelector(".list-total").innerText += ` $${this.total}`;
  }

  prepareTemplate(template, product) {
    template.querySelector(".cart-card__image img").src =
      product.Images.PrimarySmall;
    template.querySelector(".cart-card__image img").srcset +=
      product.Images.PrimaryMedium +
      " 1x, " +
      product.Images.PrimaryLarge +
      " 2x, " +
      product.Images.PrimaryExtraLarge +
      " 3x";
    template.querySelector(".cart-card__image img").alt += product.Name;
    template.querySelector(".card__name").textContent = product.Name;
    template.querySelector(".cart-card__color").textContent =
      product.Colors[0].ColorName;
    template.querySelector(".cart-card__price").textContent +=
      product.FinalPrice;
    template.querySelector(".cart-card__quantity").textContent =
      "qty: " + product.qty;
    return template;
  }
}
