class Goods {
  constructor(name, amount, image, count, price, out) {
     this.name = name;
     this.amount = amount;
     this.image = image;
     this.count = count;
     this.price = price;
     this.out = out;
  }
  draw() {
      document.querySelector(this.out).textContent += `<div><span class="material-icons">
      ${this.image}
      </span>${this.name}<br>total-priсe<strong>${this.amount * this.price}</strong>`;
  }
}
