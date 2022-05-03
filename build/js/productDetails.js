var o=(a,s,t)=>new Promise((e,r)=>{var u=d=>{try{i(t.next(d))}catch(c){r(c)}},l=d=>{try{i(t.throw(d))}catch(c){r(c)}},i=d=>d.done?e(d.value):Promise.resolve(d.value).then(u,l);i((t=t.apply(a,s)).next())});export default class p{constructor(s,t){this.productId=s,this.product={},this.dataSource=t}init(){return o(this,null,function*(){this.product=yield this.dataSource.findProductById(this.productId),document.querySelector("main").innerHTML=this.renderProductDetails(),document.getElementById("addToCart").addEventListener("click",this.addToCart.bind(this.productId));const s=document.querySelectorAll("#addToCart");s.forEach(t=>{t.addEventListener("click",e=>{if(e.preventDefault(),!t.classList.contains("add")){t.classList.add("add");const r=document.querySelector(".button-added");r.setAttribute("class","button-add"),setTimeout(()=>{t.classList.remove("add"),r.classList.remove("button-add"),r.setAttribute("class","button-added")},3e3)}})})})}addToCart(){localStorage.setItem(this.productId,JSON.stringify(this.product))}renderProductDetails(){return`<section class="product-detail">
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
