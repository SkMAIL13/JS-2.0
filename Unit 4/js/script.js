//Task-1

function f1() {
   alert('Task-1');
}

document.querySelector('.b-1').onclick = f1;

//Task-2

function f2() {
   alert('Task-2');
}

document.querySelector('.b-2').onclick = f2;

//Task-3

function f3() {
   alert('Task-3');
}

document.querySelector('.p-3').onclick = f3;

//Task-4

function f4() {
   let inp4 = document.querySelector('.i-4');

   if (inp4.checked) {
      document.querySelector('.out-4').textContent = true;
   } else {
      document.querySelector('.out-4').textContent = false;
   }
}

document.querySelector('.b4').onclick = f4;

//Task-5

let btn5 = document.querySelector('.b-5');
let inp5 = document.querySelector('.i-5');

btn5.onclick = () => {
   if (inp5.checked) {
      document.querySelector('.out-5').textContent = inp5.value;
   } else {
      document.querySelector('.out-5').textContent = 'false';
   }
}

//Task-6

const inp6 = document.querySelector('i-6');
const out6 = document.querySelector('out-6');

function f6 () {
   out6.textContent = inp6.value;
}

document.querySelector('.b-6').onclick = f6;

//Task-7

let inp7 = document.querySelector('.i-7');
let but7 = document.querySelector('.b-7');

but7.onclick = () => {
   document.querySelector('.out-71').textContent = inp7.value;
   
   if (inp7.value.length >= 6) {
      document.querySelector('.out-72').textContent = '1';
   } else {
      document.querySelector('.out-72').textContent = '0';
   }
}

//Task-8

const div8 = document.querySelector('.out-8');

function f8() {
    div8.innerHTML += '<input type="text" class="i-81" value="TEST"><button class="b-81">New BTN</button><div class="out-81"></div>';

    let btn = document.querySelector('.b-81');
    let input81 = document.querySelector('.i-81');
    let div81 = document.querySelector('.out-81');
    // let div81 = document.querySelector('.out-81');

    btn.onclick = f81;
    function f81 () {
        div81.textContent = input81.value;
    }
}

document.querySelector('.b-8').onclick = f8;

//Task-9

let btn9 = document.querySelector('.b-9');

btn9.onclick = function f9 () {
   let inp9 = document.querySelector('.r-9');
   if(inp9.checked) {
      document.querySelector('.out-9').textContent = inp9.value;
   } else {
      document.querySelector('.out-9').textContent = '0';
   }
}

//Task-10

let inp10 = document.querySelector('.i-10');
let btn10 = document.querySelector('.b-10');
let out10 = document.querySelector('.out-10');

btn10.onclick = () => {
   out10.style.backgroundColor = inp10.value;
}

//Task-11 

let btn11 = document.querySelector('.b-11');

btn11.onclick = () => {
   let inp111 = document.querySelector('.i-111'); 
   let inp112 = document.querySelector('.i-112'); 
   inp112.value = inp111.value;
}

//Task-12

let btn12 = document.querySelector('.b-12');

btn12.onclick = () => {
   let inp12 = document.querySelector('.i-12')
   document.querySelector('.out-12').innerHTML = inp12.value;
}

//Task-13

let inp13 = document.querySelector('.i-13');

inp13.oninput = () => {
   document.querySelector('.out-13').innerHTML =  inp13.value;
}

//Task-14

let  btn14 = document.querySelector('.b-14');

btn14.onclick = () => {
   let txtArea15 = document.querySelector('.t-14')
   document.querySelector('.out-14').innerHTML = txtArea15.value;
}

//Task-15

let btn15 = document.querySelector('.b-15');

btn15.onclick = () => {
   let inp15 = document.querySelector('.i-15');
   let txtArea16 = document.querySelector('.t-15');
   let out15 = document.querySelector('.out-15');

   txtArea16.innerHTML = inp15.value;
   out15.innerHTML = inp15.value;
}

//Task-16

const btn16 = document.querySelector('.b-16');

btn16.onclick = () => {
   let inp16 = document.querySelector('.s-16');
   let out16 = document.querySelector('.out-16');

   out16.innerHTML = inp16.value;
}

//Task-17

const inp17 = document.querySelector('.s-17');

function f17 () {  
   document.querySelector('.out-17').textContent = inp17.value; 
}

inp17.onchange = f17;

//Task-18

const inp18 = document.querySelector('.s-18');

function f18 () {
   document.querySelector('.i-18').value = inp18.value;
}

inp18.onchange = f18;

//Task-19

const btn19 = document.querySelector('.b-19');
const inp191 = document.querySelector('.i-191');
const inp192 = document.querySelector('.i-192');

btn19.onclick = () => {
   document.querySelector('.out-19').innerHTML = inp191.value + ' ' + inp192.value; 
}

//Task-20

const btn20 = document.querySelector('.b-20');
const out20 = document.querySelector('.out-20');

btn20.onclick = function f20 () {
   e.preventDefault ();
   let form = doc.querySelector('.f-20');
   console.log(form.elements);
   console.log(form.elements['username'].value);

   let a = form.elements['username'].value;
   let b = form.elements['password'].value;

   out20.innerHTML = a + ' ' + b 
}