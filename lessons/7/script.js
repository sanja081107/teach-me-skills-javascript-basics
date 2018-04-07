// window.onload = function() {
//     var block = document.getElementById('element');
//     console.log(block);
// }

document.addEventListener('DOMContentLoaded', function() {
    /**
     * DOM Basics
     */
    // var block = document.getElementById('element');
    // console.log(block);

    // var span = document.createElement('span');
    // span.innerHTML = 'Text';

    // block.appendChild(span);



    /**
     * Difference between onclick and addEventListener
     */
    // var btn = document.querySelector('.btn');

    // function handleBtnClick() {
    //     alert('Clicked!')
    // }
    
    // btn.onclick = function() {
    //     handleBtnClick();
    //     secondHandler();
    // };
    // btn.addEventListener('click', handleBtnClick);



    /**
     * Remove event listener
     * Создание обработчика, который будет вызван определённое количество раз только.
     */

    // var clickCounter = 0;
    // var MAX_CLICK_COUNT = 2;

    // var secondHandler = function() {
    //     alert('Second handler!');

    //     clickCounter++;

    //     if (clickCounter === MAX_CLICK_COUNT) {
    //         btn.removeEventListener('click', secondHandler);
    //     }
    // }

    // btn.addEventListener('click', secondHandler);





    /**
     * Погружение и всплытие событий
     */
    // var btn = document.querySelector('.btn');
    // var el = document.querySelector('.el');
    // var container = document.querySelector('.container');

    // el.addEventListener('click', function() { console.log('el') });
    // container.addEventListener('click', function() { console.log('container') });
    // btn.addEventListener('click', function() { console.log('btn') });

    // el.addEventListener('click', function(e) { console.log('el') }, true);
    // container.addEventListener('click', function(e) {
    //     console.log('container');

    //     e.stopPropagation();

    //     // console.log(e);
    // }, true);
    // btn.addEventListener('click', function(e) {console.log('btn') }, true);



    /**
     * preventDefault, предотвращение дефолтной обработки событий на примере отправки формы.
     */
    // var form = document.getElementById('submit-form');

    // form.addEventListener('submit', function(e) {
    //     e.preventDefault();

    //     console.log('Submit!');
    // });





     /**
      * Делегирование событий
      */
    var btnContainer = document.querySelector('.container');

    // Function to handle button click
    function handleBtnClick() {
        alert('Clicked!')
    }

    btnContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn')) {
            handleBtnClick();
        }
    });    
})

// function isUndefined(n) {
//     return !n && typeof n !== 'number'
// }




/**
 * Домашнее задание, реализация функции фильтрации inBetween.
 * inBetween - это функция, которая возвращает функцию, значение min, max берутся из замыкания
 */
function inBetween(min, max) { // min = 2, max = 5
    return function(value) { // value = 12
        /*
        if (value >= min && value <= max) {
            return true;
        }

        return false;
        */

        return value >= min && value <= max;
    }
}

/**
 * Домашнее задание, функция фильтрация, которая принимает массив элементов и функцию фильтр.
 * @param {*} arr 
 * @param {*} func 
 */
function filter(arr, func) {
    var result = [];

    for (var i = 0; i < arr.length; ++i) {
        if (func(arr[i])) {
            result.push(arr[i])
        }
    }

    return result;
}

var filterElementFunc = inBetween(1, 3)
console.log(filter([1, -12, 2, 10], filterElementFunc)); // [1, 2]

var filterFunc = inBetween(2, 5)

console.log(filterFunc(12)) // false
console.log(filterFunc(3)) // true

