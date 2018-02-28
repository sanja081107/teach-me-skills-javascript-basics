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





function  findLongestWord2(str) {

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

console.log( "mama hi programer papa result= " +findLongestWord2(" mama   hi programer   papa  "));
