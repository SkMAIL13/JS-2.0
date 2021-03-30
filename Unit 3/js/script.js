//Task-1
function f1() {
   let i1 = document.querySelector('.i-1').value;
   if (i1 == 4) {
      document.querySelector('.out-1').textContent = true;
   } else {
      document.querySelector('.out-1').textContent = false;
   }
}

//Task-2

let a21 = 30;
let a22 = 50;

function f2() {
   if (a21 > a22) {
      document.querySelector('.out-2').textContent = a21;
   } else {
      document.querySelector('.out-2').textContent = a22;
   }
}

document.querySelector('.b-2').onclick = f2;

//Task-3

function f3() {
   let i31 = +document.querySelector('.i-31').value;
   let i32 = +document.querySelector('.i-32').value;
   if (i31 > i32) {
      document.querySelector('.out-3').textContent = i31;
   } else {
      document.querySelector('.out-3').textContent = i32;
   }
}

document.querySelector('.b-3').onclick = f3;

//Task-4

function f4() {
   let age = document.querySelector('.i-4').value;
   if ((2021 - age) >= 18) {
      document.querySelector('.out-4').textContent = 1;
   } else {
      document.querySelector('.out-4').textContent = 0;
   }
}

document.querySelector('.b-4').onclick = f4;

// Task-5

function f5() {
   let numT5 = +document.querySelector('.i-5').value;
   if (numT5 < 0) {
      document.querySelector('.out-5').textContent = 'm';
   } else if (numT5 == 0) {
      document.querySelector('.out-5').textContent = 0;
   } else {
      document.querySelector('.out-5').textContent = 1;
   }
}

document.querySelector('.b-5').onclick = f5;

//Task-6

function f6() {
   let inp6 = +document.querySelector('.i-6').value;
   if ((inp6 % 2) == 0) {
      document.querySelector('.out-6').textContent = 'even';
   } else {
      document.querySelector('.out-6').textContent = 'odd';
   }
}

document.querySelector('.b-6').onclick = f6;

//Task-7

function f7() {
   let inp71 = document.querySelector('.i-71').value;
   let inp72 = document.querySelector('.i-72').value;
   document.querySelector('.out-7').textContent = inp71 ** inp72;
}

document.querySelector('.b-7').onclick = f7;

//Task-8

function f8() {
   let sel8 = document.querySelector('.s-8').value;
   switch (sel8) {
      case '1':
         document.querySelector('.out-8').textContent = 'One';
         break;
      case '2':
         document.querySelector('.out-8').textContent = 'Two';
         break;
      case '3':
         document.querySelector('.out-8').textContent = 'Three';
         break;
   }
}

document.querySelector('.b-8').onclick = f8;

//Task-9

function f9() {
   let inp9 = document.querySelector('.i-9').value;

   if (inp9 >= 1 && inp9 <= 32) {
      document.querySelector('.out-9').textContent = '1';
   } else
      if (inp9 >= 33 && inp9 <= 43) {
         document.querySelector('.out-9').textContent = '2';
      } else
         if (inp9 >= 44 && inp9 <= 64) {
            document.querySelector('.out-9').textContent = '3';
         } else {
            document.querySelector('.out-9').textContent = '0';
         }
}

document.querySelector('.b-9').onclick = f9;

//Task-10

function f10() {
   let sel100 = document.querySelector('.s-100').value;
   document.querySelector('.out-10').textContent = sel100;
}

document.querySelector('.b-10').onclick = f10;

//Task-11

const btn11 = document.querySelector('.btn-11');

btn11.onclick = () => {
   inp11 = document.querySelector('.s-110');

   document.querySelector('.out-11').innerHTML = inp11.value;
}

//Task-12

let i120 = document.querySelector('.i-120');

function f12() {
   let v = i120.value;
   document.querySelector('.out-12').innerHTML = (typeof v);

}

document.querySelector('.b-12').onclick = f12;

//Task-13

let i130 = document.querySelector('.i-130');

function f13() {
   let z = i130.value;
   document.querySelector('.out-13').innerHTML = (typeof z);
}

document.querySelector('.b-13').onclick = f13;

//Task-14 

function f14() {
   let a = +document.querySelector('.i-141').value;
   let b = +document.querySelector('.i-142').value;
   let c = document.querySelector('.s-143').value;

   if (c == '+') {
      document.querySelector('.out-14').innerHTML = a + b;
   } else
   if (c == '-') {
      document.querySelector('.out-14').innerHTML = a - b;
   } else
   if (c == '*') {
      document.querySelector('.out-14').innerHTML = a * b;
   } else
   if (c == '/') {
      document.querySelector('.out-14').innerHTML = a / b;
   }
   else {
      document.querySelector('.out-14').innerHTML = 'False';
   }
}

document.querySelector('.b-14').onclick = f14;

//Task-15

//Дан select s-151 и s-152, каждый из которых содержит 1 и 0. Дан select s-153, который содержит две операции - && и || . Дана кнопка b-15, при нажатии на которую срабатывает функция f15. Функция выводит в out-15 результат логических операций выбранных в 3 select к числам выбранным в первом и втором select. Например выбрано 1 1 &&, нужно вывести результат операции 1&&1 т.е. 1 или 0.

function f15 () {
   let inp151 = +document.querySelector('.s-151').value;
   let inp152 = +document.querySelector('.s-152').value;
   let inp153 = document.querySelector('.s-153').value;

   if (inp153 == '&&') {
      document.querySelector('.out-15').innerHTML = inp151 && inp152;
   } else 
   if (inp153 == '||') {
      document.querySelector('.out-15').innerHTML = inp151 || inp152;
   }
    else {
      document.querySelector('.out-15').innerHTML = 'None!';
   }
}

document.querySelector('.b-15').onclick = f15;
