import { setLocalStorage, getLocalStorage, loadHeaderFooter } from "./utils.js";

loadHeaderFooter();

export default class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
  }

  async init() {
    this.product = await this.dataSource.findProductById(this.productId);
    document.querySelector("main").innerHTML = this.renderProductDetails();
    document
      .getElementById("addToCart")
      .addEventListener("click", this.addToCart.bind(this));

    // const btnadds = document.querySelectorAll("#addToCart");
    // btnadds.forEach((btn) => {
    //   btn.addEventListener("click", (e) => {
    //     e.preventDefault();
    //     /*Add animation of button */
    //     if (!btn.classList.contains("add")) {
    //       btn.classList.add("add");
    //       const div = document.querySelector(".button-added");
    //       div.setAttribute("class", "button-add");
    //       /*Remove the class animation from button */
    //       setTimeout(() => {
    //         btn.classList.remove("add");
    //         div.classList.remove("button-add");
    //         div.setAttribute("class", "button-added");
    //       }, 3000);
    //     }
    //   });
    // });
  }

  addToCart() {
    // to fix the cart we need to get anything that is in the cart already.
    let cartContents = getLocalStorage("so-cart");
    //check to see if there was anything there
    if (!cartContents) {
      cartContents = [];
    }
    // then add the current product to the list
    cartContents.push(this.product);
    setLocalStorage("so-cart", cartContents);
  }

  renderProductDetails() {
    return `<section class="product-detail">
    <h3>${this.product.Brand.Name}</h3>
    <h2 class="divider">${this.product.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${this.product.Images.PrimaryLarge}"
      alt="${this.product.NameWithoutBrand}"
    />

    <p class="product-card__discount">Retail Price: <strike>$${
      this.product.SuggestedRetailPrice
    }</strike></p>
    <p class="product-card__price"><b>Our Price: $${
      this.product.ListPrice
    }</b></p>
    <p class="product-card__discount">You Save: $${Math.round(
      this.product.SuggestedRetailPrice - this.product.ListPrice
    )}</p>
    <p class="product__color">${this.product.Colors[0].ColorName}</p>
    <p class="product__description">
      ${this.product.DescriptionHtmlSimple}
    </p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${this.productId}">Add to Cart</button>
    </div>
  </section>`;
  }
}
