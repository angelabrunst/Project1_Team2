var n=(u,d,t)=>new Promise((a,r)=>{var s=e=>{try{c(t.next(e))}catch(i){r(i)}},o=e=>{try{c(t.throw(e))}catch(i){r(i)}},c=e=>e.done?a(e.value):Promise.resolve(e.value).then(s,o);c((t=t.apply(u,d)).next())});import{setLocalStorage as l,getLocalStorage as p,loadHeaderFooter as h}from"./utils.js";import m from"./cartList.js";h();export default class b{constructor(d,t){this.productId=d,this.product={},this.dataSource=t}init(){return n(this,null,function*(){this.product=yield this.dataSource.findProductById(this.productId),document.querySelector("main").innerHTML=this.renderProductDetails(),document.getElementById("addToCart").addEventListener("click",this.addToCart.bind(this)),this.animation()})}addToCart(){let d=p("so-cart");d||(d=[]),d.push(this.product),l("so-cart",d)}animation(){const d=document.querySelectorAll("#addToCart");d.forEach(t=>{t.addEventListener("click",a=>{if(a.preventDefault(),!t.classList.contains("add")){t.classList.add("add");const r=document.querySelector(".button-added");r.setAttribute("class","button-add");const s=document.querySelector(".items-on-bagpack");s.setAttribute("class","button-add2");const o=new m("so-cart",document.querySelector(".product-list"));document.querySelector(".button-add2").innerText=o.calculateTotalItems(),setTimeout(()=>{t.classList.remove("add"),r.classList.remove("button-add"),r.setAttribute("class","button-added"),s.classList.remove("button-add2"),s.setAttribute("class","items-on-bagpack")},4e3)}})})}renderProductDetails(){return`<section class="product-detail">
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
