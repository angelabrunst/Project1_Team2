var o=(s,t,e)=>new Promise((i,c)=>{var l=r=>{try{n(e.next(r))}catch(a){c(a)}},d=r=>{try{n(e.throw(r))}catch(a){c(a)}},n=r=>r.done?i(r.value):Promise.resolve(r.value).then(l,d);n((e=e.apply(s,t)).next())});import{renderListWithTemplate as u}from"./utils.js";export default class m{constructor(t,e,i){this.category=t,this.dataSource=e,this.listElement=i}init(){return o(this,null,function*(){const t=yield this.dataSource.getData(this.category);this.renderList(t),document.querySelector(".title").innerHTML=this.category})}renderList(t){this.listElement.innerHTML="";const e=document.getElementById("product-card-template");u(e,this.listElement,t,this.prepareTemplate)}prepareTemplate(t,e){return t.querySelector("a").href+=e.Id,t.querySelector("img").src=e.Images.PrimaryMedium,t.querySelector("img").alt+=e.Name,t.querySelector(".card__brand").textContent=e.Brand.Name,t.querySelector(".card__name").textContent=e.NameWithoutBrand,t.querySelector(".product-card__price").textContent+=e.FinalPrice,t.querySelector(".product-card__discount").textContent+=Math.round(e.SuggestedRetailPrice-e.FinalPrice),t}}
