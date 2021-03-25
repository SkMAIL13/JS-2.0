//Task-8
const input8 = document.querySelector('.input8');
const button = document.querySelector('.button');

button.onclick = () => {
   console.log(input8.value);
}

//Task-9
const inp9 = document.querySelector('.inp9');
const but9 = document.querySelector('.but9');
const res9 = document.querySelector('.res9');

but9.onclick = function () {
   res9.innerHTML += inp9.value;
   inp9.value = '';
}