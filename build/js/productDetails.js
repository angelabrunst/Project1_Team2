var n=(u,r,t)=>new Promise((a,e)=>{var s=d=>{try{c(t.next(d))}catch(i){e(i)}},o=d=>{try{c(t.throw(d))}catch(i){e(i)}},c=d=>d.done?a(d.value):Promise.resolve(d.value).then(s,o);c((t=t.apply(u,r)).next())});import{setLocalStorage as l,getLocalStorage as p,loadHeaderFooter as m}from"./utils.js";import h from"./cartList.js";m();export default class g{constructor(r,t){this.productId=r,this.product={},this.dataSource=t}init(){return n(this,null,function*(){this.product=yield this.dataSource.findProductById(this.productId),document.querySelector("main").innerHTML=this.renderProductDetails(),document.getElementById("addToCart").addEventListener("click",this.addToCart.bind(this)),this.animation()})}addToCart(){let r=p("so-cart");r||(r=[]),r.push(this.product),l("so-cart",r)}animation(){const r=document.querySelectorAll("#addToCart");r.forEach(t=>{t.addEventListener("click",a=>{if(a.preventDefault(),!t.classList.contains("add")){t.classList.add("add");const e=document.querySelector(".button-added");e.setAttribute("class","button-add");const s=document.querySelector(".items-on-bagpack");s.setAttribute("class","button-add2");const o=new h("so-cart",document.querySelector(".product-list"));document.querySelector(".button-add2").innerText=o.calculateTotalItems(),setTimeout(()=>{t.classList.remove("add"),e.classList.remove("button-add"),e.setAttribute("class","button-added"),s.classList.remove("button-add2"),s.setAttribute("class","items-on-bagpack")},4e3)}})})}renderProductDetails(){return`<section class="product-detail">
    <h3>${this.product.Brand.Name}</h3>
    <h2 class="divider">${this.product.NameWithoutBrand}</h2>
    <img class="divider" src="${this.product.Images.PrimarySmall}" alt="${this.product.NameWithoutBrand}" srcset="${this.product.Images.PrimaryMedium} 1x, ${this.product.Images.PrimaryLarge} 2x, ${this.product.Images.PrimaryExtraLarge} 3x"  />
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
