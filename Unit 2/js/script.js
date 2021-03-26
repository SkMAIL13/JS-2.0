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

//Task-10
const inp10 = document.querySelector('.inp10');
const but10 = document.querySelector('.but10');
const res10 = document.querySelector('.res10');

but10.onclick = () => {
   res10.innerHTML = +inp10.value * 10; 
}

//Task-11
const inp11 = document.querySelector('.inp11');
const but11 = document.querySelector('.but11');
const res11 = document.querySelector('.res11');

but11.onclick = () => {
   res11.innerHTML = +inp11.value + 10;
}

//Task-12
const inpName = document.querySelector('.i-12-1');
const inpSurname = document.querySelector('.i-12-2');
const but12 = document.querySelector('.send12');
const res12 = document.querySelector('.res12');

but12.onclick = () => {
   res12.innerHTML = `Hello,  ${inpName.value}  ${inpSurname.value}`
}

//Task-13
const inp13_1 = document.querySelector('.inp13-1');
const inp13_2 = document.querySelector('.inp13-2');
const but13 = document.querySelector('.but13');
const out13 = document.querySelector('.out-13');

but13.onclick = () => {
   out13.innerHTML = +inp13_1.value + +inp13_2.value;
}

//Task-14
const inp14 = document.querySelector('.i-14');
inp14.value = 'Hello';

//Task-15
let y = document.querySelector('.i-15');
y.style.border = '2px solid red';

//Task-16
const inp16_1 = document.querySelector('.inp16-1');
const inp16_2 = document.querySelector('.inp16-2');
const btn16 = document.querySelector('.but16');
const out16 = document.querySelector('.out-16');

btn16.onclick = () => {
   out16.innerHTML = +inp16_1.value + +inp16_2.value;
}

//Task-17
const inp17 = document.querySelector('.inp17');
const btn17 = document.querySelector('.btn17');
const out17 = document.querySelector('.out-17');

btn17.onclick = () => {
   let t = inp17.value;
   t = parseInt(t);
   out17.innerHTML = t;
}

//Task-18
const inp18 = document.querySelector('.inp18');
const btn18 = document.querySelector('.btn18');

btn18.onclick = () => {
   let t = inp18.value;
   t = parseFloat(t);
   console.log(t);
}

//Task-19
const inp19_1 = document.querySelector('.inp19-1');
const inp19_2 = document.querySelector('.inp19-2');
const btn19 = document.querySelector('.btn19');
const out19 = document.querySelector('.out19');

btn19.onclick = () => {
   out19.innerHTML = +inp19_1.value + +inp19_2.value;
}

//Task-20
const inpName20 = document.querySelector('.inpName20');
const inpSurname20 = document.querySelector('.inpSurname20');
const inpAge20 = document.querySelector('.inpAge20');
const speciality20 = document.querySelector('.speciality20');
const btn20 = document.querySelector('.btn20');
const out20 = document.querySelector('.out-20');

btn20.onclick = () => {
   out20.innerHTML = (`Уважаемый ${inpName20.value}, ${inpSurname20.value}, ваш возраст ${inpAge20.value} года, по профессии вы ${speciality20.value} `);
}
