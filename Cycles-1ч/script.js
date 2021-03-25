document.querySelector('#b-1').onclick = t1;
function t1() {
   let out = '';

   for (i = 1; i <= 51; i++) {
      out += i + ' ';
   }
   document.querySelector('.out-1').innerHTML = out;
}

document.querySelector('#b-2').onclick = t2;
function t2() {
   let out2 = '';
   
   for (i = 2; i <= 122; i += 2) {
      out2 += i + ' ';
   }
   document.querySelector('.out-2').innerHTML = out2;
}