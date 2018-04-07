var a = 0;

var userName = 'Имя';

;(function() {
    "use strict"
    // var fistName = 'Vasia';

    // function makeCounter() {
    //     var n = 0;

    //     return function() {
    //         return ++n;
    //     }
    // }

    // var counter = makeCounter();
    // var counter2 = makeCounter();

    // console.log(counter()); // 1
    // console.log(counter()); // 2
    // console.log(counter2()); // 1
    // console.log(counter2()); // 2
    // console.log(counter()); // 3

    // var userName = 'Вася';

    // function showMessage() {
    //     userName = 'Петя';

    //     // userName === 'Петя'

    //     var message = 'Привет, я ' + userName;
    //     alert( message );
    // }
 
    // showMessage();

    // console.log(userName); // 'Петя'

    // function a() {
    //     function b() {
    //         variable = 'value'; // Do not work in strict mode.
    //     }

    //     b();
    // }

    // a();

    // console.log(variable); // 'value'

    // function calculate(a, b, c) {
    //     return a + b - c / 2;
    // }

    // var d = calculate(1, 2, 3);
    // var w = calculate(12, 22, 32);

    // function calculate(c, d) {
    //     c = 'value';
    //     d.param = 10;
    //     return a + d.param;
    // }

    // var a = 1;
    // var b = {
    //     param: 2
    // };
    // var d = calculate(a, b);

    // console.log('b.param: ' + b.param); // 10

    // Сумма цифр от 1 до n
    function sum(n) {
        if (n === 1) {
            return 1;
        }

        return n + sum(n - 1);
    }

    // Функция, которая вычисляет сумму цифр от 1 до n.
    // function sum(n) {
    //     var sum = 0;

    //     for (var i = 1; i <=n; ++i) {
    //         sum += i;
    //     }

    //     return sum;
    // }

    // function sum(n) {
    //     var sum = 0;
    //     var i = 1;

    //     while(i <= n) {
    //         sum += i;
    //         ++i;
    //     }

    //     return sum;
    // }

    // function sum(n) {
    //     var sum = 0;
    //     var i = 0;

    //     do {
    //          ++i;
    //         sum += i;
    //     } while (i < n);

    //     return sum;
    // }

    function sum(n) {
        return (1 + n) * n / 2
    }

    console.log(sum(1)) // 1
    console.log(sum(2)) // 3
    console.log(sum(3)) // 6
})();
