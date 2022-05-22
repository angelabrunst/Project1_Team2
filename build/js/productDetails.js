var u=(l,s,t)=>new Promise((i,e)=>{var a=d=>{try{c(t.next(d))}catch(o){e(o)}},r=d=>{try{c(t.throw(d))}catch(o){e(o)}},c=d=>d.done?i(d.value):Promise.resolve(d.value).then(a,r);c((t=t.apply(l,s)).next())});import{setLocalStorage as n,getLocalStorage as m,loadHeaderFooter as h,alertMessage as p}from"./utils.js";import g from"./cartList.js";h();export default class v{constructor(s,t){this.productId=s,this.product={},this.dataSource=t,this.slideIndex=1}init(){return u(this,null,function*(){this.product=yield this.dataSource.findProductById(this.productId),document.querySelector("main").innerHTML=this.renderProductDetails(),document.getElementById("addToCart").addEventListener("click",this.addToCart.bind(this)),this.animation(),this.showSlides(this.slideIndex)})}addToCart(){let s=m("so-cart");s||(s=[]),s.push(this.product),n("so-cart",s),p(`${this.product.NameWithoutBrand} added to cart!`)}animation(){const s=document.querySelectorAll("#addToCart");s.forEach(t=>{t.addEventListener("click",i=>{if(i.preventDefault(),!t.classList.contains("add")){t.classList.add("add");const e=document.querySelector(".button-added");e.setAttribute("class","button-add");const a=document.querySelector(".items-on-bagpack");a.setAttribute("class","button-add2");const r=new g("so-cart",document.querySelector(".product-list"));document.querySelector(".button-add2").innerText=r.calculateTotalItems(),setTimeout(()=>{t.classList.remove("add"),e.classList.remove("button-add"),e.setAttribute("class","button-added"),a.classList.remove("button-add2"),a.setAttribute("class","items-on-bagpack")},4e3)}})})}showSlides(s){let t,i=document.getElementsByClassName("mySlides"),e=document.getElementsByClassName("dot");for(s>i.length&&(this.slideIndex=1),s<1&&(this.slideIndex=i.length),t=0;t<i.length;t++)i[t].style.display="none";for(t=0;t<e.length;t++)e[t].className=e[t].className.replace(" active","");i[this.slideIndex-1].style.display="block",e[this.slideIndex-1].className+=" active"}plusSlides(s){this.showSlides(this.slideIndex+=s)}currentSlide(s){this.showSlides(this.slideIndex=s)}renderProductDetails(){return this.images="",this.product.Images.ExtraImages?this.product.Images.ExtraImages.length==3?this.images=` 
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

          <button class="prev">\u276E</button>
          <button class="next">\u276F</button>

        </div>
        <br>
        <div style="text-align:center">
          <span class="dot" id="dot1"></span> 
          <span class="dot" id="dot1"></span> 
          <span class="dot" id="dot1"></span> 
        </div>
        `:this.images=` <img class="divider" src="${this.product.Images.PrimarySmall}" alt="${this.product.NameWithoutBrand}" srcset="${this.product.Images.PrimaryMedium} 1x, ${this.product.Images.PrimaryLarge} 2x, ${this.product.Images.PrimaryExtraLarge} 3x"  />`:this.images=` <img class="divider" src="${this.product.Images.PrimarySmall}" alt="${this.product.NameWithoutBrand}" srcset="${this.product.Images.PrimaryMedium} 1x, ${this.product.Images.PrimaryLarge} 2x, ${this.product.Images.PrimaryExtraLarge} 3x"  />`,`<section class="product-detail">
    <h3>${this.product.Brand.Name}</h3>
    <h2 class="divider">${this.product.NameWithoutBrand}</h2>
    ${this.images}
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
