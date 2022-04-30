var e=(s,r,d)=>new Promise((a,o)=>{var u=t=>{try{i(d.next(t))}catch(c){o(c)}},p=t=>{try{i(d.throw(t))}catch(c){o(c)}},i=t=>t.done?a(t.value):Promise.resolve(t.value).then(u,p);i((d=d.apply(s,r)).next())});export default class l{constructor(r,d){this.productId=r,this.product={},this.dataSource=d}init(){return e(this,null,function*(){this.product=yield this.dataSource.findProductById(this.productId),document.querySelector("main").innerHTML=this.renderProductDetails(),document.getElementById("addToCart").addEventListener("click",this.addToCart.bind(this))})}addToCart(){localStorage.setItem(this.productId,JSON.stringify(this.product))}renderProductDetails(){return`<section class="product-detail">
    <h3>${this.product.Brand.Name}</h3>
    <h2 class="divider">${this.product.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${this.product.Image}"
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
