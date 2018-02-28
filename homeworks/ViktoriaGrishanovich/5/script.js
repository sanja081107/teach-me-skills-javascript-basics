function  findLongestWord(str) {
    
   var posSpace = str.indexOf(" ");
    
    if(posSpace==-1) {
        return str;
    }
    
    var firstWord = str.slice(0, posSpace);
    
    var findWord =  findLongestWord(str.slice(posSpace+1));
    
    console.log("find word = "+findWord);
    
    return (firstWord.length >= findWord.length)?firstWord:findWord;    
}

console.log("vika bb cccc ddddddd gg   r  result = "+findLongestWord(" vika bb cccc ddddddd gg   r"));





function  findLongestWord1(str) {

    var posSpace = -1;

    var findWord = "";   
    var nextWord  = "";
    var posNextSpace;
    
    while (true) {
      posNextSpace = str.indexOf(" ", posSpace+1);

        if (posNextSpace == -1) {
          nextWord =str.slice(posSpace+1);  
        }
        else {
            nextWord =str.slice(posSpace+1,posNextSpace);
        }

        if(findWord.length < nextWord.length ){
            findWord = nextWord; 
        }
        console.log("find word = "+findWord);
        
        if (posNextSpace == -1) {
            return findWord;
        }
        
        posSpace = posNextSpace;
    }
   
}

console.log( "mama hi programer papa result= " +findLongestWord1(" mama   hi programer   papa  "));













/*function sum(n){
    var sum=0;
    for (var i=1; )*/
//    var n = Number(prompt("Введите n число"));
//    if(n===1){
//        return 1;
//            return n+ sum(n-1); }
//        
//    
//  {
//    console.log(sum(n));  
//      
//      
//      //switch(x) {
// // case 
//      
 




//var a = Number(prompt("Введите первое число"));

//console.log('первое число ' + a );

//var b = Number(prompt("Введите второе число"));

////console.log( 'второе число '+ b );


//var s = Number(prompt("Введите третее число"));

//console.log( 'третее число '+ s );

//var result = a+b-s;

//console.log(result);


//alert (a+' + '+b +' - '+s+' = '+result );

/*
var from = "Маша";

function showMessage(from) {
    var text = arguments[1];
  from = 'Петя'; // меняем локальную переменную from
  alert( from + ': ' + text );
}

showMessage(from, "Привет");


alert( from ); // старое значение from без изменений, в функции была изменена копия
*/