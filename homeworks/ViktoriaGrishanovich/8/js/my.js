var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];


function uniqueArray(arr){
var newArr=[];
    
    for(var i=0; i< arr.length; i++){
        var flag=0;
        for( var j=0; j<newArr.length;j++){
            if (arr[i]==newArr[j] ){
               flag=1;
                        }
        }
        if(flag==0){
            newArr[newArr.length]=arr[i];
        }
        
        
        
    }
    return newArr;
}

console.log("result = " + uniqueArray(array).toString());



var firstArray = [2, 2, 4, 1];
var secondArray = [1, 2, 0, 2];

function intersection(firstArr, secondArr){
 
    var newArr=[];
    
    for(var i=0; i< firstArr.length; i++){
        for( var k=0; k< secondArr.length; k++ ){
            if(firstArr[i]==secondArr[k]){
                var flag=0;
                for( var j=0; j<newArr.length;j++){
                    if (firstArr[i]==newArr[j] ){
                        flag=1;
                    }
                }
                if(flag==0){
                    newArr[newArr.length]=firstArr[i];
                }
          
            }
        }
      
        
        
    }
    return newArr;
}


console.log("result2 = " + intersection(firstArray, secondArray).toString());



function  reverseWord(str){
    var result = "";
  for( var i = str.length-1; i>=0  ; i-- ){
      result=result+str[i];
  } 
     return result;
}

function  reverseStr(str) {
    
   var posSpace = str.indexOf(" ");
    
    if(posSpace==-1) {
        return reverseWord(str);
    }
    
    
    var firstWord = reverseWord(str.slice(0, posSpace));
    
    var findWord =  reverseStr(str.slice(posSpace+1));
    
    console.log("find word = "+findWord);
    
    return firstWord+ " " + findWord;    
}

console.log(" result = "+reverseStr("Welcome to this Javascript Guide"));






function  reverseStr2(str) {

    var posSpace = -1;

    var  result = "";   
    var nextWord  = "";
    var posNextSpace;
    
    while (true) {
      posNextSpace = str.indexOf(" ", posSpace+1);

        if (posNextSpace == -1) {
          nextWord =reverseWord(str.slice(posSpace+1));  
        }
        else {
            nextWord =reverseWord(str.slice(posSpace+1,posNextSpace));
        }
        result = result + " " + nextWord;
        if (posNextSpace == -1) {
            return result;
        }
        
        posSpace = posNextSpace;
    }
   
}

console.log( "mama hi programer papa result= " +reverseStr2(" mama   hi programer   papa  "));






