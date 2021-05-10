
// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/

let input1 = document.querySelector('.i-1');
let out1 = document.querySelector('.out-1');


function t1() {
    let symbol = input1.value;
    out1.textContent = symbol;
    return symbol    
}

// ваше событие здесь!!!
input1.addEventListener('input', t1)

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

let input2 = document.querySelector('.i-2')
let out2 = document.querySelector('.out-2')

function t2(e) {
    let keyKod = e.keyCode;
    out2.textContent = keyKod;

    return keyKod
}

// ваше событие здесь!!!
input2.addEventListener('keypress', t2)


// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */

let w3 = 75;
let input3 = document.querySelector('.i-3');

function t3(e) {
    let keyKod = e.keyCode
    let out3 = document.querySelector('.out-3')

    if (keyKod >= 97 && keyKod <= 122) {out3.textContent = true}
    else if (keyKod >= 48 && keyKod <= 57) {out3.textContent = false}
}

// ваше событие здесь!!!
input3.addEventListener('keypress', t3)

// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */

let input4 = document.querySelector('.i-4');

function t4() {
    let out = input4.value.toLowerCase();
    
    document.querySelector('.out-4').textContent = out;
}

// ваше событие здесь!!!
input4.addEventListener('input', t4)

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

let input5 = document.querySelector('.i-5');

function t5() {
    let out = input5.value.toUpperCase();

    document.querySelector('.out-5').textContent = out
}

// ваше событие здесь!!!
input5.addEventListener('input', t5)

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */

let input6 = document.querySelector('.i-6');

function t6() {
    let lowerCase = input6.value.toLowerCase();

    input6.value = lowerCase;
}

// ваше событие здесь!!!
input6.addEventListener('input', t6)

// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */

let input7 = document.querySelector('.i-7');

function t7() {
    const a7 = ['A', 's', 'z', 'q', 'w', 'e', 'r', 't', 'y'];

    function arrayRandElement(arr) {
        let rand = Math.floor(Math.random() * arr.length);
        return arr[rand];
    };

    let symbol = arrayRandElement(a7);
    document.querySelector('.out-7').textContent += symbol;
}

// ваше событие здесь!!!
input7.addEventListener('input', t7);

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */

let input8 = document.querySelector('.i-8');
let mass = [];

function t8() {
    if(input8.value == 'i') {mass.push(1)}
    else if(input8.value == 'o') {mass.push(0)}
    else if(input8.value == 'l') {mass.push(7)}
    else {mass.push(a)}
    input8.value = '';

    document.querySelector('.out-8').textContent = mass
}

// ваше событие здесь!!!
input8.addEventListener('input', t8)

// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t9, выводит в .out-9 количество нажатых клавиш стрелка вниз. */

let input9 = document.querySelector('.i-9');

function t9(e) {
    let count = 0;

    if (e.keyCode == 40) {count++}

    document.querySelector('.out-9').textContent = count++;
}

// ваше событие здесь!!!
input9.addEventListener('keydown', t9);

// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */

let input10 = document.querySelector('.i-10');

function t10(event) {
    //console.log(e.keyCode)
    w3++;
    let img = document.querySelector('.div-10').querySelector('img');

    if(event.keyCode == 38 || event.keyCode == 40) {img.style.height = w3 + 'px' }
    else if(event.keyCode == 37 || event.keyCode == 39) {img.style.width = w3 + 'px'}
}

// ваше событие здесь!!!
input10.addEventListener('keydown', t10)

// Task 11 ============================================
/*  Проект. 
1. Выполните в html верстку клавиш клавиатуры. Сверстайте – блок цифровых клавиш от 1 до 0. И ряд клавиш q – p. Добавьте клавишу левый shift, левый  alt, левый ctrl,  пробел, enter.
2. Добавьте на input .i-11 событие onkeypress или onkeyup или onkeydown ( по вашему выбору). Когда событие происходит ( ввод символа в input) необходимо подсветить ( добавить класс active) клавише с таким символом. Со всех остальных клавиш – удалить класс active.
3. Если вводится следующий символ – повторить удаление active и подсветить клавишу с введенным символом.
4. Ограничения проекта – тестируются только указанные клавиши в латинской раскладке. Комбинации клавиш не тестируются. Т.е. нажиматься shift+A, ctrl+shift – не будут. Все символы вводятся в нижнем регистре.
*/

function t11() {

}

// ваше событие здесь!!!

