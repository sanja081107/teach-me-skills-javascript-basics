
var tree = document.getElementById('list');
    
tree.onclick = function(event) {
 
    var target = event.target;
    

    if (target.tagName != 'SPAN') return; 

    elemList = target.nextElementSibling;
    
    if(elemList!=null && elemList.tagName == 'UL')
    
    elemList.hidden=!elemList.hidden;
};

