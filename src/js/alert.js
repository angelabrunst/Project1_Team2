export default class Alert {
    constructor(message, background, color) {
        this.message = message;
        this.background = background;
        this.color = color;
    }

    async init() {
        const alert = await this..getData(this.message);
        this.renderAlert(alert);
        document.querySelector(".alert").innerHTML = this.message;
    }

    renderAlert(alert) {
        // make sure the list is empty
        this.listElement.innerHTML = "";
        //get the template
        const template = document.getElementById("alert-template");

        renderAlertWithTemplate(
            template,
            this.listElement,
            alert,
            this.prepareTemplate
        );
    }

    prepareAlertTemplate(template, product) {
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