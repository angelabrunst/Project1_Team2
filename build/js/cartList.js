var o=(c,t,e)=>new Promise((a,i)=>{var n=r=>{try{s(e.next(r))}catch(l){i(l)}},m=r=>{try{s(e.throw(r))}catch(l){i(l)}},s=r=>r.done?a(r.value):Promise.resolve(r.value).then(n,m);s((e=e.apply(c,t)).next())});import{renderListWithTemplate as h,getLocalStorage as u}from"./utils.js";export default class d{constructor(t,e){this.key=t,this.listElement=e,this.total=0,this.totalItems=0}init(){return o(this,null,function*(){const t=u(this.key);this.calculateListTotal(t),this.renderList(t)})}calculateListTotal(t){const e=t.map(a=>a.FinalPrice);this.total=e.reduce((a,i)=>a+i),this.totalItems=t.length}calculateTotalItems(){return this.init(),this.totalItems}renderList(t){this.listElement.innerHTML="";const e=document.getElementById("cart-card-template");h(e,this.listElement,t,this.prepareTemplate),document.querySelector(".list-total").innerText+=` $${this.total}`}prepareTemplate(t,e){return t.querySelector(".cart-card__image img").src=e.Images.PrimaryMedium,t.querySelector(".cart-card__image img").alt+=e.Name,t.querySelector(".card__name").textContent=e.Name,t.querySelector(".cart-card__color").textContent=e.Colors[0].ColorName,t.querySelector(".cart-card__price").textContent+=e.FinalPrice,t}}
