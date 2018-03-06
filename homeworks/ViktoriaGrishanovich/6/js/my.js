var arr = [1, 2, 3, 4, 5, 6, 7];

alert(filter(arr, function(a) {
  return a % 2 == 0
})); // 2,4,6


alert( filter(arr, inBetween(3, 6)) ); // 3,4,5,6

alert( filter(arr, inArray([1, 2, 10])) ); // 1,2

function filter(inData, func){
    
    var outData = [];
   
    for(var i=0; i<inData.length; i++){
        if(func(inData[i])){
            outData.push(inData[i]);
        }
    }
    return outData;
}


function inBetween(firstNumber, lastNumber){
    
    return function (a) {
        if(a>=firstNumber && a<=lastNumber)
            return true;
        else
            return false;
    }; 
}

function inArray (arr) {
    
    return function(a) {
        for(var i=0; i<arr.length; i++)
        {
            if(a===arr[i]) return true;
        }
        return false;
    }
    
}

function sum(arr) {
  return arr.reduce(function(a, b) {
    return a + b;
  });
}

alert( sum([1, 2, 3]) ); // 6 (=1+2+3)

function sumArgs() {
  return Array.from(arguments).reduce(function(a, b) {
    return a + b;
  });
}

alert( sumArgs(10, 20, 30) ); // 60
