// Task-1

document.querySelector('.b-1').onclick = () => {
   let out1 = document.querySelector('.out-1');

   for (let i = 0; i < 3 ; i++) {
      for (let j = 0; j < 3; j++ ) {
         out1.innerHTML += '*';
      }
      out1.innerHTML += '_';
   }
}

// Task-2

const divout2 = document.querySelector('.out-2');

function t2 () {
   let out2 = '';

   for( i = 1; i <=3; i++) {
      out2 += `${i} <br>`
      for(k=1; k < 3; k++) {
         out2 += '*_'
         if (k == 3) {  
            out2 += '<br>'
         }
      }
   }
   divout2.innerHTML = out2;
}

document.querySelector('.b-2').onclick = t2;


// Task-3

const divout3 = document.querySelector('.out-3');

function t3() {
   let out3 = '';

   for (let i = 1; i <= 4; i++) {
      for (let k = 1; k <= 3; k++) {
         out3 += '*_';
      }
      out3 += '<br>'
   }
   divout3.innerHTML = out3;
}

document.querySelector('.b-3').onclick = t3;


// Task-4

const divout4 = document.querySelector('.out-4');

function t4 () {
   let out4 = '';

   for (i = 1 ; i <= 3; i++) {
      out4 += `${i}_`;
      for (k = 1; k <=5; k++) {
         out4 += `${k} `;
      }
   }
   divout4.innerHTML = out4;
}

document.querySelector('.b-4').onclick = t4;

// Task-5

const divout5 = document.querySelector('.out-5');

function t5 () {
   let out5 = '';

   for (let i = 0; i < 3; i++) {
      for (let k = 0; k < 6; k++) {
         if (k % 2 == 0) {
            divout5.innerHTML += 1;
         }
         else {
            divout5.innerHTML += 0;
         }
      }
      divout5.innerHTML += '<br>';
   } 

}

document.querySelector('.b-5').onclick = t5;

// Task-6

const divout6 = document.querySelector('.out-6');

function t6 () {
   let out6 = '';

   for (i = 0; i < 3; i++) {
      for (k = 0; k <= 6; k++) {
         if (k == 0 || k == 5) {out6 += '1'} 
         else if (k == 2 || k == 4 ) {out6 += '0'}
         else if (k == 3 || k == 6) {out6 += 'x'}
      }
      out6 += '<br>';
   }
   divout6.innerHTML += out6;
}

document.querySelector('.b-6').onclick = t6;

// Task-7

const divout7 = document.querySelector('.out-7');

function t7 () {
   let out7 = '';

   for (i = 0; i < 4; i++) {
      for (k = 0; k <= i; k++) {
         out7 += '*';
      }
      out7 += '<br>';
   }
   divout7.innerHTML = out7;
}

document.querySelector('.b-7').onclick = t7;

// Task-8

const divout8 = document.querySelector('.out-8');

function t8 () {
   let out8 = '';

   for (i = 0; i < 5; i++) {
      for (k = 5; k > i; k-- ) {
         out8 += '*';
      }
      out8 += '<br>';
   }
   divout8.innerHTML = out8;
}

document.querySelector('.b-8').onclick = t8;

// Task-9

const divout9 = document.querySelector('.out-9');

function t9 () {
   let out9 = '';

   for (i = 0; i <= 5; i++) {
      for (k = 1 ; k <= i; k++) {
         out9 += k + ' ';
      }
      out9 += '<br>'
   }
   divout9.innerHTML = out9;
}

document.querySelector('.b-9').onclick = t9;

// Task-10

const divout10 = document.querySelector('.out-10');

function t10 () {
   let out10 = '';

   for (i = 0; i < 5; i++) {
     let a = '';
     for (k = 1; k <= 10; k++) {
        let b = `${i*10+k}`;
        if (b < 10) {
           a += '0';
        }
        a += b + ' ';
      }
      out10 += a + '<br>';
   }
   divout10.innerHTML = out10;
}

document.querySelector('.b-10').onclick = t10;            
