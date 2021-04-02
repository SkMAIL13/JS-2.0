// Task-1

function t1() {
   let out = '';

   for (i = 1; i < 51; i++) {
      out += i + ' ';
   }
   document.querySelector('.out-1').innerHTML = out;
}

document.querySelector('.b-1').onclick = t1;

// Task-2

document.querySelector('.b-2').onclick = t2;

function t2() {
   let out2 = '';

   for (i = 2; i <= 122; i += 2) {
      out2 += i + ' ';
   }
   document.querySelector('.out-2').innerHTML = out2;
}

// Task-3

function t3() {
   let out3 = '';

   for (i = 25; i >= 7; i--) {
      out3 += i + ' ';
   }

   document.querySelector('.out-3').innerHTML = out3;
}

let btn3 = document.querySelector('.b-3').onclick = t3;

// Task-4

function t4() {
   let out4 = '';

   for (i = 77; i >= 35; i -= 3) {
      out4 += i + ' ';
   }

   document.querySelector('.out-4').innerHTML = out4;
}

document.querySelector('.b-4').onclick = t4;

// Task-5

function t5() {
   out5 = '';

   for (i = 1; i <= 17; i++) {

      if (i % 2 === 0) {
         out5 += i + '_**'

         document.querySelector('.out-5').innerHTML = out5;
      } else {
         out5 += i + '_*';
         document.querySelector('.out-5').innerHTML = out5;
      }
   }
}

document.querySelector('.b-5').onclick = t5;

// Task-6

function t6() {
   let inp6 = +document.querySelector('.inp-6');
   let count = 0;
   document.querySelector('.out-6').innerHTML = '';
   for (let i = 0; i < inp6.value; i++) {
      document.querySelector('.out-6').innerHTML += '******' + '<br>';
      count += 1;
   }
   inp6.value = count;

}

// Task-7

function t7() {
   let inp7 = +document.querySelector('.i-7').value;
   document.querySelector('.out-7').innerHTML = ' ';

   for (let i = inp7; i > -1; i--) {
      document.querySelector('.out-7').innerHTML += i + ' ';
   }
}

document.querySelector('.b-7').onclick = t7;

// Task-8

function t8() {
   let inp81 = +document.querySelector('.i-81').value;
   let inp82 = +document.querySelector('.i-82').value;
   for (i = inp81; i <= inp82; i++) {
      document.querySelector('.out-8').innerHTML += i + ' ';
   }
}

document.querySelector('.b-8').onclick = t8;

// Task-9

function t9() {
   let inp91 = +document.querySelector('.i-91').value;
   let inp92 = +document.querySelector('.i-92').value;

   if (inp91 > inp92) {
      [inp91, inp92] = [inp92, inp91];
   }

   let out9 = '';
   for (i = inp91; i <= inp92; i++) {
      out9 += i + ' ';
   }
   document.querySelector('.out-9').innerHTML = out9;
}

document.querySelector('.b-9').onclick = t9;

// Task-10

function t10() {
   for (i = 1950; i <= 2000; i++) {
      if (i % 2 == 0) {
         document.querySelector('.out-10').innerHTML += i + ' ';
      }
   }
}

document.querySelector('.b-10').onclick = t10;

// Task-11

function t11() {

   let divMass11 = document.querySelectorAll('.div-11');
   let out11 = '';

   for (i = 0; i < divMass11.length; i++) {
       out11 += divMass11[i].textContent + ' ';
   }

   document.querySelector('.out-11').innerHTML = out11;
}
document.querySelector('.b-11').onclick = t11;

// Task-12

function t12() {
   let div = document.querySelectorAll('.div-12');

   for (i = 0; i < div.length; i++) {
       div[i].style.background = 'orange';
   }
}

document.querySelector('.b-12').onclick = t12;

// Task-13

function t13() {
   let inp13 = document.querySelectorAll('.i-13');

   for (i = 0; i < inp13.length; i++) {
      if (i == 0) 
      {inp13[i].value = 1}
      else 
      if (i == 1) 
      {inp13[i].value = 2}
      else {inp13[i].value = 3}
  }
}

document.querySelector('.b-13').onclick = t13;

// Task-14

function t14 () {
   let inp14 = document.querySelectorAll('.i-14');


   for (i = 0; i < inp14.length; i++) {
      if ( inp14[i].checked ) {
         document.querySelector('.out-14').innerHTML = inp14[i].value;
      }
   }
}

document.querySelector('.b-14').onclick = t14;

// Task-15

function t15() {
   let out15 = '';

   for (i = 0 ; i <= 10; i++){
      out15 += ' ' + (10 - i) + ' ' + i;
   }
   document.querySelector('.out-15').innerHTML = out15;
}

document.querySelector('.b-15').onclick = t15;