// Input: 1 5 2 3 0 4
// Output: 0 1 2 3 4 5

// result = [1, 5, 2, 3, 0, 4] result = a.slice()
// 1. min = 1, minIndex = 0 -> min = 0, minIndex = 4
// 2. result = [0, 5, 2, 3, 1, 4]
// 3. min = 5, minIndex = 1 -> min = 2, minIndex = 2 -> min = 1, minIndex = 4
// 4. result = [0, 1, 2, 3, 5, 4]
// 5. min = 2, minIndex = 2
// 6. result = [0, 1, 2, 3, 5, 4]
// 7. min = 3, minIndex = 3
// 8. result = [0, 1, 2, 3, 5, 4]
// 9. min = 5, minIndex = 4 -> min = 4, minIndex = 5
// 10. result = [0, 1, 2, 3, 4, 5]


function bubbleSort(arr) {
    var a = arr.slice();

    for (var i = 0; i < a.length; ++i) {
        for (var j = a.length - 1; j > i; --j) {
            if (a[j - 1] > a[j]) {
                var temp = a[j];
                a[j] = a[j - 1];
                a[j - 1] = temp;
            }
        }
    }

    return a;
}

function chooseSort(a) {
    var result = a.slice();

    for (var i = 0; i < result.length - 1; ++i) {
        var minIndex = i;

        for (var j = i + 1; j < result.length; ++j) {
            if (result[  j] < result[minIndex]) {
                minIndex = j;
            }
        }

        var temp = result[minIndex];
        result[minIndex] = result[i];
        result[i] = temp;
    }

    return result;
}


/**
 * Контекст вызова, apply, call
 */
// var user = {
//     name: 'Artem',
//     getName: function() {
//         return this.name;
//     }
// }

// var name = user.getName(); // 'Artem'

// var func = user.getName;
// // OR
// // var func = function() {
// //     return this.name;
// // };

// var b = {
//     name: 'Vasia'
// }
// func.call(b);














var a = [1, 2, 3, 10, 0, 1]
function sortArray(a) {
    //...
}

var r = sortArray(a)

// a = [0, 1, 1, 2, 3, 10]

