var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

function uniqueArray(array) {
    var result = [];

  nextInput:
    for (var i = 0; i < array.length; i++) {
      var str = array[i]; 
      for (var j = 0; j < result.length; j++) { 
        if (result[j] == str) continue nextInput; 
      }
      result.push(str);
    }

  return result;
}
alert(uniqueArray(array));