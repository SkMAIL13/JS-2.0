
class Goods2 extends Goods {
    constructor(name, amount, image, count, price, out, sale) {
        super(name, amount, image, count, price, out);
        this.sale = sale;
    }
    draw() {
        if (this.sale === true) {
        document.querySelector(this.out).innerHTML += `<div><span class="material-icons">
        ${this.image}
        </span>${this.name}<br>total-price  <strong>${this.amount * this.price}</strong><br>sale`;}
        else  {
            document.querySelector(this.out).innerHTML += `<div><span class="material-icons">
            ${this.image}
            </span>${this.name}<br>total-price  <strong>${this.amount*this.price}</strong>`;
        }
    }
}