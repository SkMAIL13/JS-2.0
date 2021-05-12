
// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */

function t1() {
   document.querySelector('.out-1').textContent = 'touch '
}

// ваше событие здесь!!!
document.querySelector('.div-1').addEventListener("touchstart", t1)

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */

let touchSumm = 0;

function t2(e) {
   touchSumm++;
   document.querySelector('.out-2').textContent = touchSumm
}

// ваше событие здесь!!!
document.querySelector('.div-2').addEventListener('touchstart', t2) 


// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */

function t3(e) {
   let out = document.querySelector('.out-3');

   if (e.target.classList.contains('div-3_1')) {out.textContent = 'div-3_1'}
   else if (e.target.classList.contains('div-3_2')) {out.textContent = 'div-3_2'}
}

// ваше событие здесь!!!
document.querySelector('.div-3_1').addEventListener('touchstart', t3)
document.querySelector('.div-3_2').addEventListener('touchstart', t3)


// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */

let btn4 = document.querySelector('.b-4');
let div4 = document.querySelector('.div-4');
let out4 = document.querySelector('.out-4');

function t4() {
   out4.textContent += 'touch ';
}

// ваше событие здесь!!!
btn4.onclick = () => div4.addEventListener('touchstart', t4)

// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */

let btn5 = document.querySelector('.b-5');

function t5() {
   out4.textContent = ' ';
}

// ваше событие здесь!!!
btn5.onclick = t5

// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

function t6() {
   document.querySelector('.out-6').textContent = 'touchend ';
}

// ваше событие здесь!!!
div4.ontouchend = t6;

// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */

let div7 = document.querySelector('.div-7');

function t7() {
   div7.style.backgroundColor = 'red';
}

// ваше событие здесь!!!
div7.ontouchstart = t7

// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */

let div8 = document.querySelector('.div-8');
let a8 = ['red', 'green', 'blue', 'pink', 'yellow'];
let out = '';

function t8() { 
   let i = Math.random() * a8.length;
   div8.style.backgroundColor = a8[Math.floor(i)]
}

// ваше событие здесь!!!
div8.addEventListener('touchstart', t8)

// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */

//let i9 = 0;
//let out9 = '';

//function t9(event) {
//   i9 = event.targetTouches.length;  
//   document.querySelector(".out-9").textContent = i9;
//}

let a9 = 0;

function t9 () {
   let out9 = document.querySelector('.out-9');
   document.querySelector('.div-9').addEventListener('touchend', t9_1);
   
   function t9_1 () {
      a9 = 0;
      out9.textContent = a9
   }
   a9++;
   out9.textContent = a9
}

// ваше событие здесь!!!
document.querySelector('.div-9').addEventListener('touchstart', t9);


// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */

let a10 = 75;
let div10 = document.querySelector('.div-10')

function t10() {
   a10++;
   div10.style.width = a10 + 'px'
}

// ваше событие здесь!!!
div10.addEventListener('touchmove', t10)

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */

let div11 = document.querySelector('.div-11')

function t11(e) {
   let x = e.touches[0].radiusX;
   let y = e.touches[0].radiusY;
   document.querySelector('.out-11').textContent = `RadiusX: ${x}; RadiusY:${y}`;
}

// ваше событие здесь!!!   
div11.addEventListener('touchstart', t11)

// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12.
<p>Изучите html код внутри div-12-wrapper.</p>
<p>1. Добавьте на кнопку nex событие click, touch так, чтобы при событии запускалась функция nextFunction и активным становилось изображение следующее за выделенным классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>2. Добавьте на кнопку prev событие click, touch так, чтобы при событии запускалась функция prevFunction и активным становилось изображение до выделенного классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>3. Учтите краевые эффекты - когда мы доходим до конца или начала, то нажатие кнопки должно приводить к перемещению рамки в начало или конец изображений.</p>
<p>4. Добавьте кнопку reset (функция resetFunction), нажатие которой сбрасывает активное изображение на нулевое. </p>
<p>5. Добавьте во все действия следующее - в изображении img-12-max заменяется src на активную. Т.е. произошло событие - заменилась главная картинка.</p>
*/

const images = document.querySelectorAll('.img-12-min');
let count = 0; // переменная, которая указывает на номер активного изображения в images

const next = document.querySelector('.next');
next.onclick = nextFunction;

const prev = document.querySelector('.prev');
prev.onclick = prevFunction;

const reset = document.querySelector('.reset');
reset.onclick = resetFunction;

let imgMax = document.querySelector('.img-12-max');

function nextFunction() {
   count++;
   if (count == images.length) {
     count = 0;
   }
   for (i = 0; i < images.length; i++) {
     if (images[i].classList.contains('active-img')) {
       images[i].classList.remove('active-img');
     }
   }
   images[count].classList.add('active-img');
 
   let imgMin = images[count].getAttribute('src');
   imgMax.setAttribute('src', imgMin);
 }

function prevFunction() {
   count--;
   if (count < 0) {
      count = images.length -1;
   }
   for ( i = 0; i < images.length; i++) {
      if( images[i].classList.contains('active-img') ) {
         images[i].classList.remove('active-img')
      }
   }
   images[count].classList.add('active-img');

   let imgMin = images[count].getAttribute('src');
   imgMax.setAttribute('src', imgMin)
}

function resetFunction() {
   count = 0;
   imgMax.setAttribute('src', 'img/1.png');
   
   for (let i of images) {
      if ( i.classList.contains('active-img') ) {
         i.classList.remove('active-img')
      }
   }
   images[count].classList.add('active-img')
}

// ваше событие здесь!!!

