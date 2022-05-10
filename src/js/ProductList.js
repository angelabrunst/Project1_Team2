import { renderListWithTemplate } from "./utils.js";

export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {
    const list = await this.dataSource.getData(this.category);
    //console.log(list);
    this.renderList(list);
    //set the title to the current category
    document.querySelector(".title").innerHTML = this.category;
  }

  renderList(list) {
    // make sure the list is empty
    this.listElement.innerHTML = "";
    //get the template
    const template = document.getElementById("product-card-template");
    renderListWithTemplate(
      template,
      this.listElement,
      list,
      this.prepareTemplate
    );
  }

  prepareTemplate(template, product) {
    template.querySelector("a").href += product.Id;
    template.querySelector("img").src = product.Images.PrimaryMedium;
    template.querySelector("img").alt += product.Name;
    template.querySelector(".card__brand").textContent = product.Brand.Name;
    template.querySelector(".card__name").textContent =
      product.NameWithoutBrand;
    template.querySelector(".product-card__price").textContent +=
      product.FinalPrice;
    template.querySelector(".product-card__discount").textContent += Math.round(
      product.SuggestedRetailPrice - product.FinalPrice
    );
    return template;
  }
}
