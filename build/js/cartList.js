var n=(c,e,t)=>new Promise((a,i)=>{var o=r=>{try{l(t.next(r))}catch(s){i(s)}},m=r=>{try{l(t.throw(r))}catch(s){i(s)}},l=r=>r.done?a(r.value):Promise.resolve(r.value).then(o,m);l((t=t.apply(c,e)).next())});import{renderListWithTemplate as u,getLocalStorage as h}from"./utils.js";export default class d{constructor(e,t){this.key=e,this.listElement=t,this.total=0}init(){return n(this,null,function*(){const e=h(this.key);let t=[];t.push(e),this.calculateListTotal(t),this.renderList(t)})}calculateListTotal(e){const t=e.map(a=>a.FinalPrice);this.total=t.reduce((a,i)=>a+i)}renderList(e){this.listElement.innerHTML="";const t=document.getElementById("cart-card-template");u(t,this.listElement,e,this.prepareTemplate),document.querySelector(".list-total").innerText+=` $${this.total}`}prepareTemplate(e,t){return e.querySelector(".cart-card__image img").src=t.Images.PrimaryMedium,e.querySelector(".cart-card__image img").alt+=t.Name,e.querySelector(".card__name").textContent=t.Name,e.querySelector(".cart-card__color").textContent=t.Colors[0].ColorName,e.querySelector(".cart-card__price").textContent+=t.FinalPrice,e}}
