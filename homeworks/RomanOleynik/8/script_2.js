function intersect(a, b) {
    return a.filter(function (e) {
        return b.indexOf(e) > -1;
    });
}

var arr1 = [1, 2, 3, 5];
var arr2 = [3, 4, 6, 7, 7, 9, 2];

alert(intersect(arr1, arr2)); 