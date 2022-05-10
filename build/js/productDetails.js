var a=(o,t,d)=>new Promise((e,s)=>{var u=r=>{try{i(d.next(r))}catch(c){s(c)}},p=r=>{try{i(d.throw(r))}catch(c){s(c)}},i=r=>r.done?e(r.value):Promise.resolve(r.value).then(u,p);i((d=d.apply(o,t)).next())});import{setLocalStorage as l,getLocalStorage as n,loadHeaderFooter as h}from"./utils.js";h();export default class m{constructor(t,d){this.productId=t,this.product={},this.dataSource=d}init(){return a(this,null,function*(){this.product=yield this.dataSource.findProductById(this.productId),document.querySelector("main").innerHTML=this.renderProductDetails(),document.getElementById("addToCart").addEventListener("click",this.addToCart.bind(this))})}addToCart(){let t=n("so-cart");t||(t=[]),t.push(this.product),l("so-cart",t)}renderProductDetails(){return`<section class="product-detail">
    <h3>${this.product.Brand.Name}</h3>
    <h2 class="divider">${this.product.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${this.product.Images.PrimaryLarge}"
      alt="${this.product.NameWithoutBrand}"
    />

    <p class="product-card__discount">Retail Price: <strike>$${this.product.SuggestedRetailPrice}</strike></p>
    <p class="product-card__price"><b>Our Price: $${this.product.ListPrice}</b></p>
    <p class="product-card__discount">You Save: $${Math.round(this.product.SuggestedRetailPrice-this.product.ListPrice)}</p>
    <p class="product__color">${this.product.Colors[0].ColorName}</p>
    <p class="product__description">
      ${this.product.DescriptionHtmlSimple}
    </p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${this.productId}">Add to Cart</button>
    </div>
  </section>`}}
