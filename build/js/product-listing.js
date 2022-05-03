import t from"./productData.js";import o from"./productList.js";import{getParam as r}from"./utils.js";const c=r("category"),s=new t,e=document.querySelector(".product-list"),i=new o(c,s,e);i.init();
