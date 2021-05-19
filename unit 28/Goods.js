class Goods{
  constructor(name, amount, image, count){
      this.name = name;
      this.amount = amount;
      this.image = image;
      this.count = count;
  }
  draw(domElement){
    document.querySelector(domElement).innerHTML += `<div><span class="material-icons">${this.image}</span> ${this.name} ${this.amount}</div>` 
  }
}