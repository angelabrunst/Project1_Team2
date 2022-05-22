import {
  setLocalStorage,
  getLocalStorage,
  loadHeaderFooter,
  alertMessage,
} from "./utils.js";
import CartList from "./cartList.js"; /*JERMAIN CAHNGE*/

loadHeaderFooter();

export default class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
    this.slideIndex = 1;
  }

  async init() {
    this.product = await this.dataSource.findProductById(this.productId);
    document.querySelector("main").innerHTML = this.renderProductDetails();
    document
      .getElementById("addToCart")
      .addEventListener("click", this.addToCart.bind(this));
    this.animation();
    this.showSlides(this.slideIndex);
    
    

    
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
    alertMessage(`${this.product.NameWithoutBrand} added to cart!`);
  }

  animation() {
    const btnadds = document.querySelectorAll("#addToCart");
    btnadds.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        /*Add animation of button */
        if (!btn.classList.contains("add")) {
          btn.classList.add("add");
          const div = document.querySelector(".button-added");
          div.setAttribute("class", "button-add");
          /*set the super indice*/
          const div2 = document.querySelector(
            ".items-on-bagpack"
          ); /*JERMAIN CAHNGE*/
          div2.setAttribute(
            "class",
            "button-add2"
          ); /*JERMAIN CAHNGE  (key, listElement)*/
          const cart = new CartList(
            "so-cart",
            document.querySelector(".product-list")
          ); /*JERMAIN CAHNGE*/
          document.querySelector(
            ".button-add2"
          ).innerText = cart.calculateTotalItems(); /*JERMAIN CAHNGE*/
          /*Remove the class animation from button */
          setTimeout(() => {
            btn.classList.remove("add");
            div.classList.remove("button-add");
            div.setAttribute("class", "button-added");
            div2.classList.remove("button-add2");
            div2.setAttribute("class", "items-on-bagpack");
          }, 4000);
        }
      });
    });
  }

  showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].className += " active";
  }
  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }
  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  renderProductDetails() {
    this.images = "";
    if (this.product.Images.ExtraImages){
      if (this.product.Images.ExtraImages.length == 3){
        this.images = ` 
        <div class="slideshow-container">

          <div class="mySlides fade">
            <div class="numbertext">1 / 3</div>
            <img class="divider" src=${this.product.Images.ExtraImages[0].Src} >
            <div class="text">Caption Text</div>
          </div>

          <div class="mySlides fade">
            <div class="numbertext">2 / 3</div>
            <img class="divider" src=${this.product.Images.ExtraImages[1].Src} >
            <div class="text">Caption Two</div>
          </div>

          <div class="mySlides fade">
            <div class="numbertext">3 / 3</div>
            <img class="divider" src=${this.product.Images.ExtraImages[2].Src} >
            <div class="text">Caption Three</div>
          </div>

          <button class="prev">❮</button>
          <button class="next">❯</button>

        </div>
        <br>
        <div style="text-align:center">
          <span class="dot" id="dot1"></span> 
          <span class="dot" id="dot1"></span> 
          <span class="dot" id="dot1"></span> 
        </div>
        `;
      }else{
        this.images = ` <img class="divider" src="${this.product.Images.PrimarySmall}" alt="${
          this.product.NameWithoutBrand
        }" srcset="${this.product.Images.PrimaryMedium} 1x, ${
          this.product.Images.PrimaryLarge
        } 2x, ${this.product.Images.PrimaryExtraLarge} 3x"  />`;
      }
    }else{
      this.images = ` <img class="divider" src="${this.product.Images.PrimarySmall}" alt="${
        this.product.NameWithoutBrand
      }" srcset="${this.product.Images.PrimaryMedium} 1x, ${
        this.product.Images.PrimaryLarge
      } 2x, ${this.product.Images.PrimaryExtraLarge} 3x"  />`;
    }

    return `<section class="product-detail">
    <h3>${this.product.Brand.Name}</h3>
    <h2 class="divider">${this.product.NameWithoutBrand}</h2>
    ${this.images}
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
