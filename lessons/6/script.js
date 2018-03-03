"use strict"

// // function findLongestWord(str) {
// //     var words = str.split(' ');
// //     var longestWord = words[0];

// //     for (var i = 1; i < words.length; ++i) {
// //         if (words[i].length > longestWord.length) {
// //             longestWord = words[i];
// //         }
// //     }

// //     return longestWord;
// // }

// // console.log(findLongestWord('Java')) // 'Java'

// // console.log(findLongestWord('Web Development Tutorial')) // 'Development'

// "use strict"

// var str1 = 'abc';
// var str2 = 'b';

// console.log(str1 < str2); //true

// var a = 'WTF';

// var obj = {
//     a: 'name',
//     b: 1,
//     c: [],
//     d: {},
//     getA: function() {
//          return this.a;
//     }
// }

// obj.a = 'name'
// obj.b = 1

// obj.getA(); // 'name'

// obj.a // 'name'

// obj.b = 2;

// var f = obj.getA;

// // console.log(f);

// // console.log(f());

// function func() {
// //     var abc;
// //     console.log(abc); // undefined

// //     console.log(f); // undefined

// //     for (var counter = 0; counter < 12; ++counter) {
// //         // console.log(counter);
// //         if (counter > 0) {
// //             abc = 1;

// //             function f() {
// //                 console.log('f');
// //             }
// //         }
// //     }

// //     console.log(counter);
// // }

// // func();

// var a = {
//     a: 12,
//     getA: function() {
//         return this.a;
//     }
// }

// var b = {
//     a: 'abc'
// };

// b.f = a.getA;

// // console.log(b.f); //
// // console.log(b.f === a.getA);
// console.log(b.f()); // 'abc'

// ;(function(exports) {
//     exports.method = function() {}
// })(typeof window === 'undefined' ? module.exports : window);

// function Cat(name) {
//     // ... this
//     this.name = name;

//     this.getName = function() {
//         return this.name;
//     }
// }

// var vasia = new Cat('Vasia');
// var murzik = new Cat('Murzik');

// console.log(vasia.getName()); // 'Vasia'
// console.log(murzik.getName()); // 'Murzik'

// Cat();

// // var vasia = {
// //     name: 'Vasia',
// //     getName: function() {
// //         return this.name;
// //     }
// // };

// console.log(vasia.name); // 

// var Counter;
// (function() {
//     var counterId = 0;

//     Counter = function Counter() {
//         // ...
//         this.id = ++counterId;

//         this.n = 0;

//         this.getValue = function() {
//             return this.n++;
//         }
//     }
// })();

// var counter = new Counter();
// var counter2 = new Counter();

// console.log(counter.id); //
// console.log(counter2.id); //

// console.log(counter.getValue()); //
// console.log(counter.getValue()); //

var obj = {
    a: 11,
    method: function(b) {
        // this
        return this.a + b;
    }
}

// a.getA();

var f = obj.method;

obj.method(1);

// console.log(f.apply(obj, [1, 2, 2]));
// console.log(f.call(obj, 1, 2, 2));

function getMaxElement() {
    return Math.max.apply(null, arguments[0]);
}

console.log(getMaxElement([1, 2, 3, -1, 20, 1], 2, 1, 'string'));
