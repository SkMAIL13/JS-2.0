class Goods2 extends Goods{
   constructor(name, amount, image, sale, count){
     super(name, amount, image, count);
     this.sale = sale;
   }
   draw(domElement){
     document.querySelector(domElement).innerHTML += `<div><span class="material-icons">${this.image}</span> ${this.name} ${this.amount} sale: ${this.sale}</div>` 
   }
 }