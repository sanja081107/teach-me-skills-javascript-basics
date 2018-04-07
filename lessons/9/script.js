document.addEventListener('DOMContentLoaded', function() {
    // filter, map, reduce

    // var a = [1, -1, 0, 2, -5];

    // function filter(a) {
    //     var newArray = [];

    //     for (var i = 0; i < a.length; ++i) {
    //         if (func(a[i])) {
    //             newArray.push(a[i])
    //         }
    //     }

    //     return newArray;
    // }





    // var newArray = a.filter(function(element) {
    //     return element > 0;
    // });

    // var newArray = a.map(function(element) {
    //     return element * 2;
    // });

    // a = [1, 2, 3]
    // newArray = [2, 4, 6]






    // var a = [-1, 0, 2, 3];
    // var newArray = a
    //     .filter(function(el) {
    //         return el > 0;
    //     })
    //     .map(function(element) {
    //         return element * 2;
    //     });
    // // var newArray = [4, 6];







    // var b = [1, 2, 4, 5, 6];

    // var sum = b.reduce(function(currentSum, currentElement) {
    //     return currentSum + currentElement;
    // }, 0); // initialValue

    // // 1. Enter: currentSum = 0 // initialValue; currentElement = 1. Exit: 1
    // // 2. Enter: currentSum = 1; currentElement = 2; Exit: 3;
    // // 3. Enter: currentSum = 3; currentElement = 4; Exit: 7;
    // // ...

    // function reduce(arr, func, initialValue) {
    //     var current = initialValue;

    //     for (var i = 0; i < arr.length; ++i) {
    //         current = func(current, arr[i]);
    //     }

    //     return current;
    // }







    // 1. Пароль может состоять только из символов латинского алфита.
    // 2. Пароль должен быть минимум 6 символов и не больше 16 символов.
    function validatePassword(password) {
        return /^[a-zA-Z0-9]{6,16}$/g.test(password);
    }

    // OR

    // function validatePassword(password) {
    //     if (password.length < 6 || password.length > 16) {
    //         return false;
    //     }

    //     for (var i = 0; i < password.length; ++i) {
    //         var code = password.charCodeAt(i);

    //         if (code >= 48 && code <= 57) {
    //             continue;
    //         }

    //         if (code >= 65 && code <= 90) {
    //             continue;
    //         }

    //         if (code >= 97 && code <= 122) {
    //             continue;
    //         }

    //         return false;
    //     }

    //     return true;
    // }

    console.log(validatePassword('пароль')) // false
    console.log(validatePassword('abc')); // false
    console.log(validatePassword('abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc')) // false;
    console.log(validatePassword('Aw12ab')); // true
    

    function uniqueArray(arr) {
        var hashMap = {};
        var uniqueArr = [];

        for (var i = 0; i < arr.length; ++i) {
            if (!hashMap[arr[i]]) {
                hashMap[arr[i]] = true;
                uniqueArr.push(arr[i])
            }
        }

        return uniqueArr;
    }

    var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8]; // [1, 2, 3, 5, 9, 8]
    console.log(uniqueArray(array));


















    // var obj = {
    //     prop: 'value'
    // }










    // var func = function() {
    //     console.log(this.prop);
    // }
    // obj.method = func;

    // obj.method();

    // // OR

    // obj.method = function() {
    //     console.log(this.prop);
    // }














    // obj.foo = 'bar';
    // console.log(obj.foo); // 'bar'
    // obj.method(); // this = obj;
    
    
    
    
    
    
    
    // var f = a.c;
    // var b = {  };

    // f(); // this = undefined

    // var b = {}
    // var a = b;
    // a = {};

    // console.log(a !== b);








    // function User(name) {
    //     // 1. this = new Object()

    //     this.name = name;

    //     this.getName = function() {
    //         return this.name;
    //     };

    //     this.setName = function(name) {
    //         this.name = name;
    //     }
    // }

    // var vasia = new User('Vasia');
    // var petia = new User('Petia');
    // var sasha = new User('Sasha');


    // function printUserName(user) {
    //     console.log(user.getName());
    // }

    // // OR

    // var vasia = {
    //     name: 'Vasia',
    //     getName: function() {
    //         return this.name;
    //     },
    //     setName: function(name) {
    //         this.name = name;
    //     }
    // }
    // var petia = {
    //     name: 'Petia',
    //     getName: function() {
    //         return this.name;
    //     },
    //     setName: function(name) {
    //         this.name = name;
    //     }
    // }
    // var sasha = {
    //     name: 'Sasha',
    //     getName: function() {
    //         return this.name;
    //     },
    //     setName: function(name) {
    //         this.name = name;
    //     }
    // }














    // var obj = {}
    // obj.name = 'Vasia';

    // function Person(name) {
    //     // 1. var this = {}
        
    //     var obj = this;

    //     obj.name = name;

    //     obj.getName = function() {
    //         return this.name;
    //     };

    //     obj.setName = function(name) {
    //         this.name = name;
    //     }

    //     // n. return this;
    // }

    // var vasia = new Person('Vasia');
    // var petia = new Person('Petia');
    // var sasha = new Person('Sasha');

    // function makeUser(name) { // 'Vasia'
    //     var obj = {
    //         name: name, // 'Vasia'
    //         getName: function() {
    //             return this.name;
    //         },
    //         setName: function(name) {
    //             this.name = name;
    //         }
    //     }

    //     return obj;
    // }

    // var user = makeUser('Vasia')






    // vasia.name; // 'Vasia'
    // vasia.func();

    // User();
});
